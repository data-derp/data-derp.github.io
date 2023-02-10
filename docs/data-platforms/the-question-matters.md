---
sidebar_position: 6
minutesToComplete: 5
---

# The Question Matters
It is pertinent to note that it is important to truly understand the problem we are solving and the requirements around the freshness of data, because different problems/requirements can result in vastly different data processing architectures.

For example, a supplier might process historic trends of a particular product to predict how much supply that they might need to meet a regular demand. In this case, a simple batch job once per night (or even better, on the first of every month) is sufficient. 

On the other hand, in a situation where demand is unpredictable or spikes unexpectedly, the supplier might require closer to real-time data (in which we would consider streaming solutions), in order to calculate new pricing (for example Uber's surge pricing) on the fly.

:::info
Don't worry about understanding the deeper details behind batch/streaming right at this point, we'll cover the details in a later section. The key takeaway is: the question that you are trying to answer matters to architecture.
:::

Regardless of whether we answer our question using batch or streaming architectures, we often come across a few common landmarks of Data Processing, which we'll cover in the next section.