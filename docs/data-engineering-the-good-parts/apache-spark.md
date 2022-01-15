---
sidebar_position: 5
---

# Apache Spark

## Introduction to Spark
* Must-Read: [Slides from Brooke Wenig](https://brookewenig.com/SparkOverview.html#/)
* [Video from Frank Kane](https://www.youtube.com/watch?v=M_cjCGwqLnc) #TODO: not available anymore
  * Important comment on Frank Kane’s video
  * Scala is only faster than Python if you’re writing a lot of custom UDFs or data structures with RDDs.
  If you’re using built-in Spark functions, then performance is **identical**
  * Most modern Spark users are shifting towards a Python codebase to take advantage of modern data science and machine learning tools - see next slides for empirical evidence 😉

* Takeaways
  * What is the difference between Transformations (lazy evaluation) and Actions?
  * What is the difference between Driver and Worker nodes


Aside: [how 'hot' is Spark?](https://venturebeat.com/2021/02/01/databricks-raises-1-billion-funding-round-at-28-billion-valuation/)


[Spark SQL Programming Guide](http://spark.apache.org/docs/3.1.1/sql-getting-started.html) ([Python or Scala recommended](http://spark.apache.org/docs/3.1.1/sql-getting-started.html))

## Are You Still a Python Hater?
![spark-usage-2013.png](./assets/spark-usage-2013.png)
![spark-usage-2020.png](./assets/spark-usage-2020.png)


## Data + AI Summit 2020
One of the keynote presentations from the Chief Architect of Databricks


[Project Zen: Making Spark Pythonic | Reynold Xin | Keynote Data + AI Summit EU 2020](https://www.youtube.com/watch?v=-vJLTEOdLvA&t=160s&ab_channel=Databricks)
* Heading towards taking advantage of idiomatic Python with type hints
* Improving Python debugging is on the Databricks roadmap
* There’s no denying the rich ecosystem of libraries, especially for advanced analytics & ML

## Are you a Pandaphile?
Try Databricks [Koalas](https://koalas.readthedocs.io/en/latest/index.html)
* PySpark but using Pandas syntax and APIs
* If you’re interested, try it out and let us know what you think!
* However for the rest of this course, we’ll teaching you the following APIs separately:
  * Spark DataFrames
  * Pandas
