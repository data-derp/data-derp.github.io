---
sidebar_position: 4
minutesToComplete: 120
---

# Exercise: Last Connection Time of Charge Points


| Question | Context |
| --- | --- |
| **When was the last connection time of a Charge Point?** | A singular Charge Point sends a heartbeat message at a configured interval unless specified differently by the CSMS when it first registers itself. We can find out when it has last responsive by finding the timestamp of the most recent message from any OCPP action for that Charge Point. A singular Charge Point sends a heartbeat message at a configured interval unless specified differently by the CSMS when it first registers itself. We can find out when it has last responsive by finding the timestamp of the most recent message from any OCPP action for that Charge Point.  This information goes into a daily end of day report in order to figure out which Charge Points to send a technician to in order to bring it back online. |

In this exercise, we'll take ourselves through the Data Processing milestones to answer the question: **When was the last connection time of a Charge Point?**.

Since we know that we only need to calculate this once per day for a daily report, we'll use a **batch** transformation. This means, once per day, this transformation will run and generate a report (table, dataset, or visualisation) that can be sent to email addresses, viewed from a dashboard, or used for automated downstream processing.

In this exercise, we'll ingest some data, transform it, write it out to various formats according to our consumers' needs, and visualise it.

Follow the directions [here](https://github.com/data-derp/exercise-ev-databricks/tree/main/last-connection-time-charge-points) to get started!