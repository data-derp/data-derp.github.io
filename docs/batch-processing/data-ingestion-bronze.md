---
sidebar_position: 3
minutesToComplete: 5
---

# Bronze
When creating long-term storage for analytical use cases, the first step is to ingest data for the source, with a shape as close as possible to the original shape. As the first step in our data processing journey, this allows us to 
1. create a "checkpoint" or "save zone" so that we can more easily debug issues and determine if there were issues at this step or downstream
2. replay data to downstream steps in the case that there is an error or interruption (data is idempotent)

In this exercise, we will:
* ingest the raw data in a single pull
* convert the data to parquet format (a format good for writing)
* partition the data by YYYY > MM > DD > HH