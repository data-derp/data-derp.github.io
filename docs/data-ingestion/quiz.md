---
sidebar_position: 10
---

# Quiz

## What is one challenge of working with parquet as compared to csv with respect to debugging?
> It’s not human-readable (compressed) and requires software to read/print it.

## When first ingesting from a data source, why do you maintain a copy of the raw data as close to the original format as possible?
> * You want to maintain your original source of truth in case of bugs/logic changes
> * You don’t want to realize months down the line that you’ve accidentally been overwriting/tampering with the raw data and that it’s no longer irrecoverable!
> * If (..or more like when) ever you want to fix/update your data transformation logic, it’s also good to have an optimized copy of your raw data (e.g. in Parquet vs plain text) so that your re-processing doesn’t take as long!
> * It also helps to debug by breaking the steps into an ingestion step and transformation steps.
