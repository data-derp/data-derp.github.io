---
sidebar_position: 1
minutesToComplete: 5
---
# Our Batch Domain Questions
Let's bring back the domain questions from our earlier exercises and the steps taken to answer them:

| **1. When was the last connection time of a Charge Point?** | **2. What is the final charge time and final charge dispense for every completed transaction?** |
| :---: | :---: |
| Read Data with a Schema | Read OCPP Data (data.csv) |
| Time Conversion | Read Transactions Data (transactions.csv)|
| Windows and Rows | Return only StopTransaction (filter) |
| Cleanup | Unpack JSON in StopTransaction (from_json) |
|  | Flattening your Data (select) |
| | Flattening your Data (select) | 
| | Join Transactions with Stop Transaction Records that exist for those transactions (inner join) |
| | Rename timestamp column to "stop_timestamp" (withColumnRenamed) |
| | Convert the start_timestamp and stop_timestamp fields to timestamp type (to_timestamp, withColumn) |
| | Calculate the Charge Session Duration (withColumn, cast, round, mathops) |
| | Cleanup extra columns (select) |
| | Unpack JSON in StopTransaction (from_json) |
| | Flatten MeterValues JSON (select, explode, alias) |
| | Most recent Energy.Active.Import.Register Reading (filter, to_timestamp, window, order by) |
| | Cast Value to double (cast) |
| | All together now! (left join) |

Note: there are some **non-business case transformations**  that could be relevant to both use cases (or new ones) or just good curation/cleanup activities in preparation for further transformation:
* Read from a data source (in this case a csv)
* Unpack from string to JSON
* Flatten
* Casting columns to types

Thinking back to the multi-hop (Bronze, Silver, Gold) architecture we can re-organise our transformation into the following stages:

| Bronze | Silver |
| :---: | :---: |
| Read from data source (raw) and store | Unpack from string to JSON |
| | Flatten |
| | Casting columns to types |

And of course, the Gold transformation Step will feature various transformations required to answer one of our domain questions

| **Gold (1) When was the last connection time of a Charge Point?** | **Gold (2) What is the final charge time and final charge dispense for every completed transaction?** |
| :---: | :---: |
| Windows and Rows | Return only StopTransaction (filter) |
| Cleanup | Join Transactions with Stop Transaction Records that exist for those transactions (inner join) |
| | Calculate the Charge Session Duration (withColumn, cast, round, mathops) |
| | Cleanup extra columns (select) |
| | Most recent Energy.Active.Import.Register Reading (filter, to_timestamp, window, order by) |
| | All together now! (left join) |