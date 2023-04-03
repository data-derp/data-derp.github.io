---
sidebar_position: 49
---


# Quiz

<details><summary>Why might you generally want to transform data “close” to its source?
(e.g. if your huge dataset lies on AWS S3, why would you often/generally want to crunch it within your AWS tenant/account first rather than serving the raw data directly to consumers?)</summary>

<ul>
<li>Cost: transferring large amounts of data out of your cloud provider/data warehouse can often result in expensive egress fees 😤 </li>

<li>Performance:</li>
<ul>
<li>You should deploy your Data Lake and Big Data Compute services on the same cloud provider(s) to minimize data transfer over networks and also to avoid those egress fees mentioned above!</li>
<li>You should leverage your Big Data Compute services’ (e.g. Databricks, AWS Glue, AWS EMR, Azure Synapse Analytics) highly performant/scalable connectors to S3 (AWS) or ADLS Gen2 (Azure) to scan data efficiently</li>
</ul>
</ul>
</details>


<details>
<summary>When should you use ETL vs ELT, why?</summary>
<ul>
<li>ETL is great for workloads that are reused by many consumers so it makes sense to shape the data consistently sooner rather than later</li>
<li> ELT is great for consumers who need some flexibility. With respect to speed, ELT can sometimes be a bit slow and wasteful as you have to often re-process/re-transform the raw data all over again</li>
At the end the day, it depends what makes the most sense for your use-case!
</ul>
</details>




<details><summary>What’s the difference between a Join and a Union?</summary>

Hopefully the pictures/diagrams in [this article](https://www.essentialsql.com/what-is-the-difference-between-a-join-and-a-union/) provide a clear intuition.
Both operations are essential knowledge!

Please avoid these classic mistakes:
<ol>
<li>If you’re using JOIN, make sure that you don’t have duplicate column names on the two tables before joining (other than the joining keys themselves)</li>
<li>If you’re using UNION, make sure that the two tables/DataFrames have identical columns and column orderings</li>
</ol>
</details>

<details><summary> What does a GROUP BY aggregation do?</summary>
In standard SQL, it aggregates rows that share the same grouping key into a single summary row
</details>


<details><summary>What’s one scenario where using Window functions are advantageous over GroupBy aggregations?</summary>
Have a look at [this example](https://databricks.com/blog/2015/07/15/introducing-window-functions-in-spark-sql.html)

Basically, Window functions allow you to maintain all of your original rows (without having to collapse/summarize them per group)

Of course, there are times when you’d want to aggregate instead of window as well, depends on the query/business question!
</details>

<details><summary>What kinds of operations often induce shuffling in your Spark job?</summary>
[“Wide Transformations/Dependencies”](https://databricks.com/glossary/what-are-transformations) such as joins, aggregations, window functions. Implication: they can really slow down your Spark job. [Concise summary here.](https://databricks.com/glossary/what-are-transformations)
</details>

<details><summary>What are some most powerful ways that you can optimise your Spark job?</summary>
Partition your data smartly such that the most common filters and groupBys in your queries don’t have to scan/shuffle all partitions unnecessarily
</details>

<details><summary>Joins are often important and inevitable...so how might you optimize a join to minimize shuffling?</summary>
via broadcast join (small join tables) OR partition your data such that data for the same join key isn’t spread across too many different partitions
</details>


<details><summary>What’s a good rule of thumb for partitioning?</summary>
Partition on columns that you would typically do a filter/groupBy 

A partition should ideally contain anywhere between 256MB - 2GB of data. Too many small partitions (each containing kilobytes means you have lots of small files - that’s bad!)

For the small file reason above, you generally shouldn’t partition on high cardinality columns
</details>




