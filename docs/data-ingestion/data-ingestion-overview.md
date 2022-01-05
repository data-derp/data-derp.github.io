---
sidebar_position: 1
---
# Data Ingestion Overview

![project-structure-ingestion-navi.png](./assets/project-structure-ingestion-navi.png)

The figure above represents our final state for this project, but the box in red highlights the salient steps for "Data Ingestion". At high level, we are concerned with ingesting our data from relevant data sources to a place where we can read and re-read over and over again without needing to repull the data from those sources. This makes it easier for us to debug and reprocess (and saves CO2 emissions from network calls).

The onion breakdown:
1. **Data Ingestion Core Logic** will be demonstrated in an exercise in Databricks, which will accelerate our learning of the Spark API and general data handling
2. Next, we will showcase what this same logic looks like in fully-TDD'ed **Data Ingestion Production Code**
3. And then, we will **deploy that production code to the cloud**
4. Lastly, we will demonstrate a codebase which joins assets resulting from (2) Production Code with **Infrastructure as Code**.

