---
sidebar_position: 1
minutesToComplete: 5
---
# Our Batch Domain Questions
Let's bring back the domain questions from our earlier exercises and the steps taken to answer them:

| **1. When was the last connection time of a Charge Point?** | **2. What is the final charge time and final charge dispense for every completed transaction?** |
| --- | --- |
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

There are some **non-business case transformations**  that could be relevant to both use cases (or new ones) or just good curation/cleanup activities in preparation for further transformation:
* Read from a data source (in this case a csv)
* Unpack from string to JSON
* Flatten
* Casting columns to types


<<< TODO: Insert image about the curation steps and additional transformation steps happening after that >>>