---
sidebar_position: 5
minutesToComplete: 120
---

# Exercise: Final Charge Time and Charge Dispense for Completed Charges

| Question | Context |
| --- | --- |
| What is the final charge time and final charge dispense for every completed transaction for a given month? |  The MeterValues payload gives a cumulative reading of the charge that has been dispensed (measurand = "Energy.Active.Import.Register"). This also requires finding the start time of the transaction in question (transactional data not captured as part of the OCPP payloads). |