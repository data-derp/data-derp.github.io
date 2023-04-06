---
sidebar_position: 12
minutesToComplete: 60
---

# Exercise: Gold 2
What is the final charge time and final charge dispense for every completed transaction?
* Find all StopTransaction (filter)
* Join with StartTransaction Responses, matching on transaction_id (left join)
* Find the matching StartTransaction Requests (left join)
* Calculate the total_time (withColumn, cast, maths)
* Calculate total_energy (withColumn, cast)
* Calculate total_parking_time (explode, filter, window, groupBy)
* Join and Shape (left join, select)