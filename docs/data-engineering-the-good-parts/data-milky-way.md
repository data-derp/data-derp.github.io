# Data Milky Way
Too much jargon... too little time

## Data Milky Way
![data-milky-way.png](./assets/data-milky-way.png)
Databases, NoSQL, Data Warehouses, Data Lakes, Spark…it’s too much!

[OLTP vs OLAP](https://www.youtube.com/watch?v=-v3PhEtOuxw&ab_channel=DataCamp)   ([more detailed article here](https://techdifferences.com/difference-between-oltp-and-olap.html#:~:text=OLTP%20and%20OLAP%20both%20are,is%20an%20analytical%20processing%20system.&text=The%20basic%20difference%20between%20OLTP,online%20database%20query%20answering%20system.))
[Database vs Data Warehouse](https://www.youtube.com/watch?v=FxQG65OhXAQ&ab_channel=Intricity101)   ([more detailed article here](https://panoply.io/data-warehouse-guide/the-difference-between-a-database-and-a-data-warehouse/))
[NoSQL vs SQL](https://www.mongodb.com/nosql-explained/nosql-vs-sql)
[Data Warehouse vs Data Lake](https://panoply.io/data-warehouse-guide/data-warehouse-vs-data-lake/)

**Choice is driven by Business Needs**
**When** do I need this data?
**How many people** need this data?
**How many different ways** do I want to visualize the data?
**How much does it cost** me to maintain?

## Data Milky Way - Databases & Data Warehouses 
[Databases: Scale Up vs Scale Out](https://hackernoon.com/database-scaling-horizontal-and-vertical-scaling-85edd2fd9944)

Up until the mid-late 2000s, businesses predominantly stored both [OLTP and OLAP](https://www.youtube.com/watch?v=-v3PhEtOuxw&ab_channel=DataCamp) data in relational databases (RDBMS)
* e.g. Oracle, Microsoft SQL Server, MySQL, PostgreSQL, etc.
* OLAP-oriented databases for storing large amounts of data were called **Data Warehouses**
* Relational databases were notoriously difficult to distribute/scale out
* As more data came in, businesses often opted to **scale up** 💰
  * Greater investment risk
  * Difficult to plan capacity
  * Expensive
  * Restrictive limits to CPU & memory
  * for a **single** server


* Data Warehouses required careful **upfront** planning
  * Schema and layout need to be decided beforehand
  * Query patterns/use-cases needed to be preempted

![scaling.png](./assets/scaling.png)

## Hadoop Hype Train
![joy-of-hadoop.png](./assets/joy-of-hadoop.png)
(2004) Google publishes the [MapReduce](https://www.youtube.com/watch?v=s8EPQpgpWVE&ab_channel=CBTNuggets) whitepaper, inspiring the Apache Hadoop project
* enabled **(on-prem)** distributed data processing on **commodity (cheap) hardware**
* businesses began throwing data into their Hadoop clusters!

![hadoop-network.png](./assets/hadoop-network.png)
[What you need to know about Hadoop](https://www.oreilly.com/content/hadoop-what-you-need-to-know/)

## Hadoop Disillusionment 
![hadoop-has-failed-us.png](./assets/hadoop-has-failed-us.png)

> Hadoop is great if you're a datascientist who knows how to code in MapReduce or Pig, Johnson says, but as you go higher up the stack, the **abstraction layers have mostly failed to deliver on the promise of enabling business analystics to get at the data.**

> "At the Hive layer, it's kind of OK. But people think they're going to use Hadoop for data warehouse...**are pretty surprised that this hot new technology is 10x slower tha"n what they're using before**," Johnson says.

While data locality + coupling storage and compute in Hadoop clusters was a decent idea for data throughput… 
* Businesses were forced to increase **both** CPU & Disk when they often only needed to
scale up just one or the other
* You’d have to pay for more CPU just to store inactive, rarely-utilized data, what a waste!
* Storing and replicating data on HDFS (Hadoop Distributed File System) was **expensive**
and difficult to maintain
* Query performance was **lackluster** and other beneficial properties of RDBMS were gone

## Cloud Revolution
Cloud Revolution: [Why object storage wins over Hadoop-based storage](https://www.ibm.com/cloud/blog/cutting-cord-separating-data-compute-data-lake-object-storage)
* To scale cost-effectively, we need to really separate compute and storage
  * e.g. simply provision more CPU-intensive clusters only when needed, while leaving storage the same
* As analytics and AI began to involve images, audio, unstructured data:
  * Cloud Data Lakes (often based on object storage) became the ideal storage solution
  * Rapid shift away from Hadoop storage (HDFS) [[must-read](https://blogs.oracle.com/bigdata/post/what-is-object-storage)]

Time for unified analytics/query engines such as Spark and Presto to shine  💫
* [Spark](https://www.oreilly.com/library/view/learning-spark-2nd/9781492050032/ch01.html) & [Presto](https://prestodb.io/overview.html)
* 2021 newcomer: [Dremio](https://www.dremio.com/)
Both engines excel when running analytical queries against data stored on Object Storage (e.g. Amazon S3, Azure Blob Storage)
Both engines take advantage of **both memory and disk** (unlike Hadoop MapReduce which read/writes data via disk only)

Presto is very popular for **ad-hoc interactive SQL queries**
(fun fact: AWS Athena is a serverless offering based on Presto)

Spark is **extremely popular for programmatic (Python/Scala/Java/R)
use-cases** but can also support SQL queries

![urs-hoelzle.png](./assets/urs-hoelzle.png)
(Senior Vice President of Technical Infrastructure, Google)


## Latency
Relative to ‘humanized’ time, to give you an idea of the enormous difference

Optional: [Latency in Big Data](https://www.youtube.com/watch?v=DXq5MOYGK1U) (demonstrates the massive impact of using memory vs disk vs network in Big Data) 
* Gives you a feel for the latency nightmare when only using disk and network (i.e. MapReduce)
* Hopefully demonstrates the orders of magnitude in performance gain with Spark!

## Unified Analytics Engines

Common Misconceptions:
* “Spark & Presto are NoSQL databases/data stores”
  * They’re not. But they can read/write from them 😀
* “Spark or Presto can replace all my databases”
* “Spark is an ‘In-Memory’ technology”
  * PostgreSQL/MySQL also cache data in RAM to speed up queries...but would you dare to call them ‘In-Memory’ technologies? 😅

![spark.png](./assets/spark.png)
![presto-cluster.png](./assets/presto-cluster.png)

Many companies (especially tech giants) can even often have both Spark and Presto/Athena in their stack

![presto-spark-netflix-platform.png](./assets/presto-spark-netflix-platform.png)

## But...
Okay, sounds like the OLAP world is in good hands...
But what about OLTP?
(i.e. databases for my live, transactional applications)?

## Distributed Data Systems
NoSQL Technologies
[Great introduction by Martin Fowler](https://www.youtube.com/watch?v=qI_g07C_Q5I)

[CAP Theorem](https://www.ibm.com/cloud/learn/cap-theorem#toc-the-cap-in-9y9p3uen)
**C** (consistency) **A** (availability) **P** (partition tolerance) : pick two
* [Is this really true in the real world?](https://www.youtube.com/watch?v=9SSvdLnmDiI&ab_channel=MarkRichards)
* What unrealistic assumption are we making here?
  * Can we really assume that network communications won’t fail?
  * Is there really such thing as a distributed system that won’t have partitions?
* Not a binary choice between C and A
* Several NoSQL solutions offer a tunable tradeoff between C and A
* Another overview

**Summary**
a CP system will say “sorry, I can’t be sure yet” to the client, in order to avoid giving an out-of-date answer
![cap.png](./assets/cap.png)
an AP system tries to spits out an answer even if it might not be the most up-to-date one

![cap-wikipedia.png](./assets/cap-wikipedia.png)
From [Wikipedia](https://en.wikipedia.org/wiki/CAP_theorem)

## OLTP Workloads
Big Data in OLTP is quite an advanced topic and has far less consolidation/standardization. The tech stacks for different problems/businesses vary a lot more than in OLAP workloads!

For the reasons above, we’ll focus on OLAP technologies for the rest of the course.
However, feel free to check out some common NoSQL technologies:


[Amazon DynamoDB](https://www.youtube.com/watch?v=lVJXehUvYew&ab_channel=Serverless)
[Azure CosmosDB](https://www.youtube.com/watch?v=3UGNBFiq1rg&ab_channel=MicrosoftAzure)
Redis
Elasticsearch


[Cassandra](https://www.youtube.com/watch?v=d7o6a75sfY0&ab_channel=DataStaxDevelopers)
[MongoDB](https://www.youtube.com/watch?v=RGfFpQF0NpE&ab_channel=MongoDB)

## Evolution of Data Processing
![map-reduce-processing.png](./assets/map-reduce-processing.png)
![data-processing-vision.png](./assets/data-processing-vision.png)

* [Hadoop to Spark w/ Object Storage](https://www.xplenty.com/blog/apache-spark-vs-hadoop-mapreduce/), [Data Catalogs](https://lakefs.io/metadata-management-hive-metastore-vs-aws-glue/)
* [Batch and Micro-Batch Streaming](https://www.upsolver.com/blog/batch-stream-a-cheat-sheet)
* [Continuous Processing](https://hazelcast.com/glossary/stream-processing/)


[One syntax to rule them all?](https://beam.apache.org/)
* Apache Beam is based on the [Dataflow model introduced by Google](https://storage.googleapis.com/pub-tools-public-publication-data/pdf/43864.pdf)
* Aims to unify the semantics of batch & streaming processing across engines (Flink, Spark, etc.)

**You don’t necessarily need streaming, let alone Beam!** evaluate your own project’s needs
Advanced (optional): [Practice developing a Beam app in AWS Kinesis](https://docs.aws.amazon.com/kinesisanalytics/latest/java/examples-beam.html)
We’ll mention Flink more in later sections 🌰


## Practical Data Workloads
![big-data-sword.png](./assets/big-data-sword.png)
We’re here to teach you big data skills, but in reality...

Single-Node vs. Cluster: not everything is Big Data!
[You don’t always need Spark](https://www.indellient.com/blog/a-journey-from-pandas-to-spark-data-frames/)
([sometimes Pandas deployed on a single node function/container is just fine!](https://www.indellient.com/blog/a-journey-from-pandas-to-spark-data-frames/))

Batch vs Streaming: [streaming isn’t always the solution](https://www.section.io/engineering-education/batch-processing-vs-stream-processing/)!

Batch Orchestration options
* [CRON](https://en.wikipedia.org/wiki/Cron), [Apache Airflow](https://airflow.apache.org/), Triggers (e.g. AWS Lambda, AWS Step Functions, [Glue Triggers](https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html))
* Simple CRON schedules (e.g. on Databricks) might work just fine, depends on the use-case

## Typical Data Pipeline
![typical-data-pipeline.png](./assets/typical-data-pipeline.png)

## Orchestration Core Concepts
But how do we make our pipeline **flow**? 🌊
* Data Engineering workflows often involve transforming and transferring data from one place to another
* Workflows in real-life have multiple steps and stages


* Sometimes, everything might work fine with just CRON jobs
* However, other times, you might want to control the state transitions of these steps:
  * e.g. if Step A doesn’t run properly, don’t run Step B because the data could be corrupt, instead run Step C
  * Once again, the concept of Directed Acyclic Graphs (DAGs) can come to our rescue

* Apache Airflow is just one nice way of setting up DAGs to orchestrate jobs 🌈
  * Note: Airflow is primarily designed as a task orchestration tool
  * You can trigger tasks on the Airflow cluster itself or on remote targets (e.g. AWS Fargate, Databricks, etc.)
  * NOT designed for transferring large amounts of actual data
  * Reference
  * Play around with Airflow locally


