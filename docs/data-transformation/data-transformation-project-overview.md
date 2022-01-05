---
sidebar_position: 41
---
# Project Overview

![project-structure-transformation-navi.png](./assets/project-structure-transformation-navi.png)

The figure above represents our final state for this project, but the box in red highlights the salient steps for "Data Ingestion". At high level, we are concerned with transforming our ingested data into a shape that can be easily visualised in a graph in a Notebook.

Similar to the Data Ingestion topic, the onion breakdown:
1. **Data Transformation Core Logic** will be demonstrated in an exercise in Databricks, which will accelerate our learning of the Spark API and general data handling
2. Next, we will showcase what this same logic looks like in fully-TDD'ed **Data Transformation Production Code**
3. And then, we will **deploy that production code to the cloud**
4. Lastly, we will demonstrate a codebase which joins assets resulting from (2) Production Code with **Infrastructure as Code**.

