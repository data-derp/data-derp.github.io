---
sidebar_position: 4
minutesToComplete: 30
authors: [kmok]
---


# Delta Lake and our Domain
In the past sections, we've covered the Medallion/Multi-hop Architecture in the context of Batch Processing, moved on to Streaming, and just covered Delta Lake (which has very promising features in the modern data handling world). In Data Engineering, there is no single right answer and we must take contextual cues to pick the right architectures and technology. In our Domain, we can use all of these concepts to develop a fluid pipeline that serves both our Batch/Streaming needs for our consumers, while still curating our data in a sustainable manner.

## Our Architecture
In our architecture, we'll use both Batch and Streaming along with the Medallion/Multi-hop Architecture in addition to Delta Lake.

### Bronze
In the Bronze layer, we'll take cues from both our Batch Processing (Bronze) layer and the Spark Streaming API to do the following:
1. Ingest from stream
2. Write to Delta Lake and store in a dedicated storage location, partitioned by year, month, day, hour, and minute

```
root
 |-- year=2023
 |    |-- month=1
 |    |    |-- day=1
 |    |    |    |-- hour=1
 |    |    |    |    |-- minute=1
 |    |    |    |    |-- minute=2
 |    |    |    |    |-- minute=3
```

In the Batch Processing (Bronze) layer, we stored our data directly in the Parquet format. We'll do the same but with real-time data (using the Spark Streaming API) and write to the Delta Lake format, partitioned by year, month, day, hour, and minute (more on the Partitioning Strategy later). Partitioning by year, month, day, hour, and minute allows us in a downstream step (Silver) to pick up all the data from the last minute and write it to Parquet. **Note:** Partitioning by minute leads to a bit of a small-file problem (leading to longer compute times), but for the sake of the upcoming exercise and seeing partitions change, we'll partition by minute anyway.

Additionally, as before, we'll also be storing our partitioned files in our local DBFS storage (Databricks File Store). In production-like settings, we might choose instead to store the data directly in blob storage in the cloud (e.g. AWS S3 or Azure ADLS).

### Silver
In the Silver layer, we'll clean-up and harmonise our data without massive reducing the dimensions of data:
1. Ingest data from the Bronze layer from the last minute
2. Transform (flatten, standardise, harmonise, deduplicate)
3. Write to Delta Lake format in a specified location

Writing data on a per-minute basis comes with downsides, especially around handling late data. What happens if a Charge Point was offline for 5 minutes? That data would essentially be ignored, resulting in Data Incompleteness. Depending on your consumers, this might be suitable behaviour, but if Data Completeness is important, logic around reconciling missing or late data would need to be written and handled appropriately. If 5 minutes is a common and appropriate delay, the Silver layer job can be run instead every 5 minutes (scheduled by orchestration tool/cron) or slightly longer to ensure that the majority of the data is captured. The tradeoff is that the consumers would need to be ok with waiting 5 minutes for the most recent data.

In this stage, we'll write our data again to another output directory on our local DBFS storage. Similar to the comment on the Bronze layer, in production settings, we might choose to store our data directly in blob storage.

The outputs of the Silver layer are interesting, because consumers might want to consume this curated data as it is the most complete set of data that has been harmonised (they don't need to harmonise it themselves). Consumers of this layer might be analysts who want to run historical aggregations or ML Engineers who need as much data as possible to create models based on historical data. Analysts might want to run their aggregations in their tool of choice (e.g. PowerBI or Tableau) and ML Engineers might want direct access to the Delta Lake files on blob storage. Even from these two consumers, the access paths are quite different and should be handled differently (see below table).

| Persona | Data Requirement | Architecture (example) |
| --- | --- | --- |
| Analyst | Historical data pushed to their tool of choice | The Silver layer data gets pushed to an event hub (e.g. Kafka, queue, etc) which is consumed by an application that writes that data to the storage of the Analytical tool (e.g. PowerBI, Tableau). Alternatively, skip the event hub directly and use the Spark Streaming API to write directly to PowerBI or Tableau. There are tradeoffs: the event hub decouples your logic from the consumers and allows a separate system to handle individual consumer requests but it does add another layer of complexity. |
| ML Engineer | A lot of data within a longer historical time-frame which is curated but not aggregated. "Raw as possible". | Depending on the ML Engineer, access to the location of data is perfectly acceptable. For ML Engineers who are used to only working in human-readable formats like CSV or JSON, a one-time export of the selected data to CSV/JSON might be necessary. | 
| Real-time Data Application Developer | [Near] Real-time data that has been curated | Applications such as recommendation engines use the combination of [near] real-time data and models built from historical data by ML Engineers. The models can come from the output of a ML Engineer and the [near] real-time data can come from the Silver layer via an event hub (Kafka, queue, etc). |


### Gold
Our Gold layer is dedicated to one-in-a-while complex transformation tasks which might be expensive from both the cost and time perspectives.

1. Ingest at a defined frequency (e.g. once per day, by cron)
2. Transform by business logic
3. Write in Delta Lake and store in a dedicated storage location 

Similar to the Silver layer, the Gold layer is triggered at a defined frequency (depending on the consumers' requirements because the Gold layer is complex and costly - or sometimes complex and not necessary to be run so frequently) by an orchestration tool/cron. The consumers of the Gold layer might be those who use the data infrequently to make decisions through a dashboard. Delta Lake is a suitable format but because these consumers might not be technical, similar to the Silver layer, delivery directly to a dashboard or analytics tool (or another consumer-accepted format) might be required.


## Orchestration
You might have already noted in the Medallion Architecture, the stages are never just triggered one after the other, but rather might introduce a time lag. In this case, proper orchestration is important to ensure that downstream actions get triggered at the expected time and under pre-defined conditions (e.g. success of an upstream job).

## Partitioning Strategy
The way that our consumer query our data will define our partitioning strategy (why it's so important to do user research, even for data). We'll assume here that the majority of queries target the Silver layer and are charge_point_id-centric. Some examples:

```sql
Select * where charge_point_id = "123" 
Select * where charge_point_id = "123" and action = "StartTransaction" and message_type = "2" and year = "2023" and month = "1" and day = "01"
```

It's worth noting that while the partitioning literature states that partitioning on a high-cardinality column (like charge_point_id) is not good practice, this is actually a rather nuanced statement. Recall that partitioning is efficient because we can prevent Spark from reading ALL the data (an I/O-bound operation) before doing a filtering query; we can use partitioning to target a certain directory of unstructured data which reduces the number of files (and in IoT data, there's LOTs of little files). So long as the majority of the queries are not crossing the partition boundaries all too frequently, this partitioning strategy is suitable.

```
root
 |-- charge_point_id=1
 |    |-- year=2023
 |    |    |-- month=5
 |    |    |    |-- day=23
 |-- charge_point_id=2
 |    |-- year=2023
 |    |    |-- month=5
 |    |    |    |-- day=23
 |-- charge_point_id=3
 |    |-- year=2023
 |    |    |-- month=5
 |    |    |    |-- day=23
```

With a single partitioning strategy (with **charge_point_id** at the root, a `Select * where action = "StartTransaction"` across all charge_point_ids and all time, will result in Spark reading all the data the exists before filtering. In this case, if users report that they query the data by the action at the top-level, it might make sense to store the data a second time with action at the top-most partitioning level. Data storage is often cheaper than compute, but storing the data twice does incur costs.

```
root
 |-- StartTransactionRequest
 |    |-- charge_point_id=1
 |    |    |-- year=2023
 |    |    |    |-- month=5
 |    |    |    |    |-- day=23
 |-- StartTransactionRsponse
 |    |-- charge_point_id=1
 |    |    |-- year=2023
 |    |    |    |-- month=5
 |    |    |    |    |-- day=23
 |-- StopTransactionRequest
 |    |-- charge_point_id=1
 |    |    |-- year=2023
 |    |    |    |-- month=5
 |    |    |    |    |-- day=23
 |-- MeterValuesRequest
 |    |-- charge_point_id=1
 |    |    |-- year=2023
 |    |    |    |-- month=5
 |    |    |    |    |-- day=23
```