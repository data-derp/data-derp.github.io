# Overview

## Preface
![not-everything-is-big-data.png](./assets/not-everything-is-big-data.png)
We’re here to teach you big data skills, but in reality...

Single-Node vs. Cluster: not everything is Big Data!
[You don’t always need Spark](https://www.indellient.com/blog/a-journey-from-pandas-to-spark-data-frames/)
([sometimes Pandas deployed on a single node function/container is just fine!](https://www.indellient.com/blog/a-journey-from-pandas-to-spark-data-frames/))

Batch vs Streaming: [streaming isn’t always the solution](https://www.section.io/engineering-education/batch-processing-vs-stream-processing/)!

## History of Big Data - Revisited
Databases
* single node servers, vertical scaling only
* mostly used for operational data, transactions


On-Prem Data Warehouses
* horizontal scaling possible
* utilized massively parallel processing (MPP) to run big queries
* SQL-only interface, low interoperability


On-Prem Data Lakes
* Hadoop ecosystem
* Data Processing via MapReduce, Hive, Spark, etc.
* Difficult for data governance and data integrity 


## Some Problems with Big Data Workloads
* [ACID transactions](https://www.youtube.com/watch?v=VRm2UMsFVz0)
* Corrupt/incomplete data
* Editability, schema evolution
* GDPR requests
* Data versioning and auditability (very important for getting Machine Learning models approved by regulators)

## Some More Problems with Big Data Workloads
**Batch vs Streaming conundrum**

* Lambda Architecture: Having to maintain different code bases and data stores for batch and for streaming


* Kappa Architecture: play everything through the streaming pipeline...but your retention period is **limited** and it’s a pain to manage, query, edit
  * Moral of the story: streaming/Kappa architecture isn’t a silver bullet

## Modern Solutions
[Delta Lake](https://delta.io/) ([please try to watch the whole video](https://www.youtube.com/watch?v=LJtShrQqYZY))
* This presentation is actually from early/mid 2019 (ignore the upload date on YouTube),
* Delta Lake’s gotten even better since then!
* **Executive Summary:**
  * Delta Lake is just Apache Parquet with **a transaction log on top**!
  * Delta Lake can optimize the layout of your underlying parquet files (via OPTIMIZE)
  * **However**, writing/updating Delta Lake tables often requires a big data engine such as Spark

## Delta Lake Key Features
* ACID Transactions
  * Ensures data integrity, using the transaction log
* Updates, Deletes, Upserts
  * Perform Data Manipulation Language (DML) commands such as updates/deletes/upserts
  * Important for GDPR, improving/maintaining data quality of existing tables
* Advanced Metadata handling
  * Enhanced capturing and utilization of metadata
  * Improves query performance compared to standard Parquet
* Schema Enforcement & Evolution