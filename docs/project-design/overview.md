---
sidebar_position: 1
---

# Overview
Now that we've covered the theory behind Data Engineering, we'll spend the next few sections putting that to practice in the context of a domain. We'll do that by asking a relevant domain question and then walking through the data processing steps and architectures required to answer that question.

## The Question Matters
 It is pertinent to note that it is impportant to truly understand the problem we are solving and the requirements around the freshness of data, because different problems/requirements can result in vastly different data processing architectures.

For example, a supplier might process historic trends of a particular product to predict how much supply that they might need to meet a regular demand. In this case, a simple batch job once per night (or even better, on the first of every month) is sufficient. In a situation where demand is unpredictable or spikes unexpectedly, the supplier might require closer to real-time data (in which we would consider streaming solutions), in order to calculate new pricing (for example Uber's surge pricing) on the fly.

Regardless of whether we answer our question using batch or streaming architectures, we often come across a few common landmarks of Data Processing

## Common Landmarks of Data Processing
### Data Source
This is the source of data. For many of our Data Engineering use cases, it is often data that is generated as a result of a transactional application (e.g. e-commerce application) and stored in a database that fits the transactional application's usecase. This could be a Postgres or mysql database, but it could also be json/csv files, as a result of previous processing.

### Ingestion
This step is the action of reading from the data source. We often read or ingest data as-is or close to as-is so that it allows us to debug or reprocess data in case of pipeline/processing failures. 

### Transformation
Once the data has been ingested, transformation logic aggregates and shapes the data into a form that can be easily underestood and analysed, or used downstream in another pipeline.


### Visualisation


### Ingelligence
A step which might include AI/ML use cases



## TODO: move this to data mesh
<figure class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/uIDy7GKYv9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>