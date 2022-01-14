---
sidebar_position: 46
---
# Project Overview

![project-structure-transformation-navi.png](./assets/project-structure-transformation-navi.png)

The figure above represents our final state for this project, but the box in red highlights the salient steps for "Data Transformation". At high level, we are concerned with transforming (cleaning and reshaping) our ingested data into a shape that makes it easy to answer some questions in our analysis. Remember that some transformations are expensive, depending on the transformation and how much data that you have. These expensive transformations can leverage Spark (and its distributed architecture) for its speed.

## The Onion Breakdown:
1. **Data Transformation Core Logic** will be demonstrated in an exercise in Databricks, which will accelerate our learning of the Spark API and general data handling
2. Next, we will showcase what this same logic looks like in fully-TDD'ed **Production Code**
3. And then, we will create AWS resources to **run the Production Code in an AWS Glue Job in the Cloud**
4. Lastly, we will demonstrate how those manually-created AWS resources can be written as **Infrastructure as Code** to reduce mistakes and increase replicability.

