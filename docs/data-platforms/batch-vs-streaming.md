---
sidebar_position: 3
minutesToComplete: 3
---

# Batch vs. Streaming
In the battle between batch vs. streaming, there is no clear winner, but rather we should choose to do batch or streaming based on what makes sense in our use case. 

There are many who will assert that "real time is always better". This is not true. If the use case requires real time (or near real time), such as [High Frequency Trading](https://en.wikipedia.org/wiki/High-frequency_trading), then it makes sense. If you have a once-per-month report that needs to be generated, it probably isn't worth the work (or the carbon footprint) or costs to have data available real time.

The answer truly lies in pragmatism.

In this section, we'll talk first about how to handle batch use cases in our domain within a platform context. Later, we'll cover streaming!