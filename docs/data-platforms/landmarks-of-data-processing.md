---
sidebar_position: 6
minutesToComplete: 15
---

# Common Landmarks of Data Processing
## Data Source
This is the source of data. For many of our Data Engineering use cases, it is often data that is generated as a result of a transactional application (e.g. e-commerce application) and stored in a database that fits the transactional application's usecase. This could be a Postgres or mysql database, but it could also be json/csv files, as a result of previous processing.

Aside from transactional data created from an application, there are many data sources out there to explore such as: 
* [Our World in Data](https://github.com/owid)
* [NASA Data](https://data.nasa.gov/)

Some important questions to ask yourself when selecting a data source are:
* Does it come from a reputable source? Was the data collected in a trustworthy and responsible fashion?
* Is the data biased? Does it omit key key?
* Is it too curated for what you need? (e.g. rounding, sampling)
* Do you understand how the data was aggregated and how it might effect your conclusions?
* Do you understand the domain and what each data point represents?

## Ingestion
This step is the action of reading from the data source. We often read or ingest data as-is or close to as-is so that it allows us to debug or reprocess data in case of pipeline/processing failures.

## Transformation
Once the data has been ingested, transformation logic aggregates and shapes the data into a form that can be easily underestood and analysed, or used downstream in another pipeline. We sometimes see this in the form of Bronze, Silver, Gold stages which represent increasingly curated levels of data. It's not required to use the Bronze, Silver, and Gold model all the time - sometimes it is enough to think through your problem and determine relevant and pragmatic stages from there (for example: just bronze or bronze/silver or a completely different naming scheme).

<div style={{textAlign: 'center'}}>

![bronze-silver-gold.png](./assets/bronze-silver-gold.png)

[Source: Databricks](https://www.databricks.com/blog/2019/08/14/productionizing-machine-learning-with-delta-lake.html)

</div>

In this space, we typically work with data frames (think: spreadsheets with columns and many rows that could be turned into a CSV file, but way cooler than spreadsheets :sunglasses:) and transform them using a SQL-like language and distributed compute like Spark (for handling large amounts of data quickly). This part requires some deeper knowledge of SQL.

## Visualisation
Typically, we spend quite some energy in the Ingestion/Transaformation space to get the data into a specific shape but we mustn't forget about why we ingested/transformed data in the first place: to give transparency and insights into a system in order to make an informed decision or opinion. Visualisations is just one form of how we use data to bring value to a consumer and can come in the form of a graph/charts or list of data. Different forms of visualisations are deemed appropriate in efficiently communicating different kinds of messages.

Some examples:
* [Line graph](https://en.wikipedia.org/wiki/Line_chart) to show linear trends
* [Scatter plot](https://en.wikipedia.org/wiki/Scatter_plot) to show the relationship between variables to determine a positive or negative correlation
* [Histogram](https://en.wikipedia.org/wiki/Histogram) to show the distribution of numerical data
* [Box (and whisker) plots](https://en.wikipedia.org/wiki/Box_plot) to show the spread and skewness of data
* [Log Chart](https://en.wikipedia.org/wiki/Logarithmic_scale), a non-linear method to display rapidly-growing values (e.g. exponential values) in a small graph

Some types of charts like [bar plots](https://en.wikipedia.org/wiki/Bar_chart) can [hide or misrepresent the spread of data](https://www.kickstarter.com/projects/1474588473/barbarplots).

## Intelligence
Another consumer of curated data are Intelligence applications. This could be a Machine Learning model which uses analytical/curated data as training data which could drive a recommendation engine in e-commerce or streaming media systems. Often, Machine Learning models require lots of [relevant] data for training and a different set of data for testing the model and work with Data Engineers to obtain the right kind of data. Sometimes a Data Scientist or Machine Learning Engineer will simply request "all the raw data" if the data is too well curated or aggregated but in reality, this is really just the start of a conversation and strong collaboration between a ML Engineer and a Data Engineer to leverage the best of the toolsets between the two expertises (e.g. distributed data processing engines, MLOps tooling). 

In this training, we won't build our own ML model, but will describe the ML process in a later section since Data Engineers might be in the position to supply data to ML Engineers and understanding the kinds of questions that ML Engineers answer will influence the design of upstream data systems maintained by Data Engineers.


