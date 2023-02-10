---
sidebar_position: 1
minutesToComplete: 5
---

# Domain Questions
Based on the sample OCPP actions and data we have displayed above, we should be able to answer some domain questions.

| Question | Context |
| --- | --- |
| When was the last connection time of a Charge Point? | A singular Charge Point sends a heartbeat message at a configured interval unless specified differently by the CSMS when it first registers itself. We can find out when it has last responsive by finding the timestamp of the most recent message from any OCPP action for that Charge Point.  This information goes into a daily end of day report in order to figure out which Charge Points to send a technician to in order to bring it back online. |
| What is the final charge time and final charge dispense for every completed transaction for a given month? |  The MeterValues payload gives a cumulative reading of the charge that has been dispensed (measurand = "Energy.Active.Import.Register"). This also requires finding the start time of the transaction in question (transactional data not captured as part of the OCPP payloads). |
| What Charge Points are currently active? |  A singular Charge Point sends a heartbeat message at a configured interval unless specified differently by the CSMS when it first registers itself. We can find out when it has last responsive by finding the timestamp of the most recent message from any OCPP action for that Charge Point. We want to know at any given time. |
| What is the last known charging dispense value for a given Charge Point and ongoing transaction? | The MeterValues payload gives a cumulative reading of the charge that has been dispensed (measurand = "Energy.Active.Import.Register") |

### Discussion Points
For each of the above questions, please answer the following:
* Does the data need to be near real-time? Could you calculate it in a calculated interval time without losing meaning?
* How might you represent the data in a Visualisation? What is the most efficient method of visual communication?