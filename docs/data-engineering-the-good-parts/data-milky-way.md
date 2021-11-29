# Data Milky Way

## Data Milky Way
Databases, NoSQL, Data Warehouses, Data Lakes, Spark…it’s too much!

[OLTP vs OLAP](https://www.youtube.com/watch?v=-v3PhEtOuxw&ab_channel=DataCamp)   ([more detailed article here](https://techdifferences.com/difference-between-oltp-and-olap.html#:~:text=OLTP%20and%20OLAP%20both%20are,is%20an%20analytical%20processing%20system.&text=The%20basic%20difference%20between%20OLTP,online%20database%20query%20answering%20system.))
[Database vs Data Warehouse](https://www.youtube.com/watch?v=FxQG65OhXAQ&ab_channel=Intricity101)   ([more detailed article here](https://panoply.io/data-warehouse-guide/the-difference-between-a-database-and-a-data-warehouse/))
[NoSQL vs SQL](https://www.mongodb.com/nosql-explained/nosql-vs-sql)
[Data Warehouse vs Data Lake](https://panoply.io/data-warehouse-guide/data-warehouse-vs-data-lake/)

Choice is driven by Business Needs
When do I need this data?
How many people need this data?
How many different ways do I want to visualize the data?
How much does it cost me to maintain?

## Data Milky Way - Databases & Data Warehouses 
Databases: Scale Up vs Scale Out
Up until the mid-late 2000s, businesses predominantly stored both OLTP and OLAP data in relational databases (RDBMS)
e.g. Oracle, Microsoft SQL Server, MySQL, PostgreSQL, etc.
OLAP-oriented databases for storing large amounts of data were called Data Warehouses
Relational databases were notoriously difficult to distribute/scale out
As more data came in, businesses often opted to scale up 💰
Greater investment risk
Difficult to plan capacity
Expensive
Restrictive limits to CPU & memory
for a single server


Data Warehouses required careful upfront planning
Schema and layout need to be decided beforehand
Query patterns/use-cases needed to be preempted

