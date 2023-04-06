---
sidebar_position: 1
minutesToComplete: 5
---
# Breakdown of the Multi-Hop Architecture
Recall that the Multi-Hop Architecture comprises 3 stages: Bronze, Silver, and Gold.

![bronze-silver-gold.png](./assets/bronze-silver-gold.png)

In this section, we'll talk about how to take our domain questions and organise what the input and outputs are of each hop.

## Applying the domain
Let's bring back the domain questions from our earlier exercises and the steps taken to answer them:

| **1. When was the last connection time of a Charge Point?** | **2. What is the final charge time and final charge dispense for every completed transaction?** |
| :---: | :---: |
| Read Data with a Schema | Read OCPP Data (data.csv) |
| Time Conversion | Return only StopTransaction Requests (filter)|
| Windows and Rows | Unpack JSON in StopTransaction Request (withColumn, from_json) |
| Cleanup | Unpack StartTransaction Response (withColumn, from_json) |
|  | Unpack StartTransaction Request (withColumn, from_json) |
| | Find the matching StartTransaction Requests (left join) | 
| | Join Start and Stop data (left join) |
| | Convert the start_timestamp and stop_timestamp fields to timestamp type (to_timestamp, withColumn) |
| | Calculate the Charge Transaction Duration (total_time) (withColumn, cast, maths) |
| | Calculate total_energy (withColumn, cast) |
| | Unpack JSON in MeterValues Request (withColumn, from_json) |
| | Calculate total_parking_time (explode, filter, window, groupBy) |
| | Join with Target DataFrame (left join) |
| | All together now! (select) |

Note: there are some **non-business case transformations**  that could be relevant to both use cases (or new ones) or just good curation/cleanup activities in preparation for further transformation:
* Read from a data source (in this case a csv)
* Unpack from string to JSON
* Flatten (unpack nested structures and bring to top level)
* Casting ambiguous columns to types

Thinking back to the multi-hop (Bronze, Silver, Gold) architecture we can re-organise our transformation into the following stages:

| Bronze | Silver |
| :---: | :---: |
| Read from data source (raw) and store | Unpack from string to JSON |
| | Flatten (unpack nested structures and bring to top level) |
| | Casting ambiguous columns to types |

And of course, the Gold transformation Step will feature various transformations required to answer one of our domain questions

| **Gold (1) When was the last connection time of a Charge Point?** | **Gold (2) What is the final charge time and final charge dispense for every completed transaction?** |
| :---: | :---: |
| Windows and Rows | Find all StopTransaction (filter) |
| Cleanup | Join with StartTransaction Responses, matching on transaction_id (left join) |
| | Find the matching StartTransaction Requests (left join) |
| | Calculate the total_time (withColumn, cast, maths) |
| | Calculate total_energy (withColumn, cast) |
| | Calculate total_parking_time (explode, filter, window, groupBy) |
| | Join and Shape (left join, select) | 