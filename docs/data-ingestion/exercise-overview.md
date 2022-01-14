---
sidebar_position: 1
---
# Project Overview

![project-structure-ingestion-navi.png](./assets/project-structure-ingestion-navi.png)

The figure above represents our final state for this project, but the box in red highlights the salient steps for "Data Ingestion". At high level, we are concerned with ingesting our data from relevant data sources to a place where we can read and re-read over and over again without needing to repull the data from those sources. This makes it easier for us to debug and reprocess (and saves CO2 emissions from network calls).

## The Onion Breakdown:
1. **Data Ingestion Core Logic** will be demonstrated in an exercise in Databricks, which will accelerate our learning of the Spark API and general data handling
2. Next, we will showcase what this same logic looks like in fully-TDD'ed **Production Code**
3. And then, we will create AWS resources to **run the Production Code in an AWS Glue Job in the Cloud**
4. Lastly, we will demonstrate how those manually-created AWS resources can be written as **Infrastructure as Code** to reduce mistakes and increase replicability.

