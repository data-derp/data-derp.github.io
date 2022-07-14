---
sidebar_position: 49
---


# Quiz

## Why might you generally want to transform data “close” to its source?
(e.g. if your huge dataset lies on AWS S3, why would you often/generally want to crunch it within your AWS tenant/account first rather than serving the raw data directly to consumers?)


> Cost: transferring large amounts of data out of your cloud provider/data warehouse can often result in expensive egress fees 😤

> Performance:
Your should deploy your Data Lake and Big Data Compute services on the same cloud provider(s) to minimize data transfer over networks and also to avoid those egress fees mentioned above!
You should leverage your Big Data Compute services’ (e.g. Databricks, AWS Glue, AWS EMR, Azure Synapse Analytics) highly performant/scalable connectors to S3 (AWS) or ADLS Gen2 (Azure) to scan data efficiently

## When should you use ETL vs ELT, why?

> ETL is great for workloads that are reused by many consumers so it makes sense to shape the data consistently sooner rather than later 

> ELT is great for consumers who need some flexibility. With respect to speed, ELT can sometimes be a bit slow and wasteful as you have to often re-process/re-transform the raw data all over again
At the end the day, it depends what makes the most sense for your use-case!


## What’s the difference between a Join and a Union?

> Hopefully the pictures/diagrams in [this article](https://www.essentialsql.com/what-is-the-difference-between-a-join-and-a-union/) provide a clear intuition. 
Both operations are essential knowledge!

Please avoid these classic mistakes:
1. If you’re using JOIN, make sure that you don’t have duplicate column names on the two tables before joining (other than the joining keys themselves)
2. If you’re using UNION, make sure that the two tables/DataFrames have identical columns and column orderings

## What does a GROUP BY aggregation do?
> In standard SQL, it aggregates rows that share the same grouping key into a single summary row



## What’s one scenario where using Window functions are advantageous over GroupBy aggregations?
 > Have a look at [this example](https://databricks.com/blog/2015/07/15/introducing-window-functions-in-spark-sql.html)
>
> Basically, Window functions allow you to maintain all of your original rows (without having to collapse/summarize them per group)
>
> Of course, there are times when you’d want to aggregate instead of window as well, depends on the query/business question!

## Question: What kinds of operations often induce shuffling in your Spark job?
> [“Wide Transformations/Dependencies”](https://databricks.com/glossary/what-are-transformations) such as joins, aggregations, window functions. Implication: they can really slow down your Spark job. [Concise summary here.](https://databricks.com/glossary/what-are-transformations)

## What are some most powerful ways that you can optimise your Spark job?
> Partition your data smartly such that the most common filters and groupBys in your queries don’t have to scan/shuffle all partitions unnecessarily


## Joins are often important and inevitable...so how might you optimize a join to minimize shuffling?
> via broadcast join (small join tables) OR partition your data such that data for the same join key isn’t spread across too many different partitions


## What’s a good rule of thumb for partitioning?
> Partition on columns that you would typically do a filter/groupBy 
> 
> A partition should ideally contain anywhere between 256MB - 2GB of data. Too many small partitions (each containing kilobytes means you have lots of small files - that’s bad!)
>
> For the small file reason above, you generally shouldn’t partition on high cardinality columns


