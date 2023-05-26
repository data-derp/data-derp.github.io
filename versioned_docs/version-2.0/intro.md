---
sidebar_position: 1
---

# Welcome!
Welcome to the Data Derp training! This is in open source Data Engineering training aimed to take you step by step through the high-level Data Engineering concepts to get you acquainted with the entire ecosystem, allowing you to deep-dive on specific topics on your own.

## How it works
The left-navigation bar lists topics in the order that they should be consumed. In other words, start at the top and make your way down. The content here includes:
* readings
* videos
* exercises
* self-quizzes

Sections marked **BONUS** are not part of core content, and we can recommend going through them only if you have time or interest. Often these are related topics but create too much overhead on the core Data Engineering content. Don't stress about them, you can always come back to it later!

## Prerequisites
This training uses Python and concepts from SQL and eventually moves on to more complex Data Engineering architectures. If you're unfamiliar with Python and SQL concepts, feel free to browse the [Prerequisites](./prerequisites) section to brush up on your skills and self-assess yourself.

## Required Software
Our goal is to get you learning fast. We use Databricks notebooks in this training which requires a Databricks workspace. We do this to prevent environment-setup and environment inconsistencies. 

To get started with Databricks:
1. use a Databricks workspace that you already have access to
2. [set up a new Databricks workspace on AWS/GCP/Azure](https://www.databricks.com/try-databricks?itm_data=NavBar-TryDatabricks-Trial#account)
3. use the [Databricks Community Edition](https://community.cloud.databricks.com/login.html) (not all features might be usable here)

:warning: **WARNING:** Databricks, outside the community edition and free trial, incurs compute costs. The configuration for the compute resources here is documented and should keep costs low but it is your responsibility to ensure that your 
compute resources (clusters) are shut down by the end of the day. There is an auto-termination policy in the suggested configuration, but it only triggers when there has been no activity for 30 minutes; if you have a streaming job running, it will continue to run forever and incur costs (both compute and storage).

## Contributors
The content in this training is curated by passionate contributors from all over the globe. If you see any areas for improvement, things that don't make sense, and [hopefully not] mistakes/broken links, please feel free to [create a Github Issue](https://github.com/data-derp/data-derp.github.io/issues/new) or submit a PR on the relevant Github repository:
* This site's [Github repo](https://github.com/data-derp/data-derp.github.io)
* Remainder of the [repos](https://github.com/data-derp)