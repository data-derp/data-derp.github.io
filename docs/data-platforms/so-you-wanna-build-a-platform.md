---
sidebar_position: 1
minutesToComplete: 15
---

# So you wanna build a platform?

If you think back to the introduction of our domain, there are some very specific questions that we could answer with data, but we never talked about who was actually asking for that data. Some example personas could be:
* a **business intelligence analyst** responsible for reporting to the business about the performance of a product against defined business metrics
* a **product owner** of an adjacent department looking to use specific parts of your data to generate business value through another product
* a **machine learning specialist** creating a recommendation engine using your data.

All of these personas have different requirements of how their data is delivered (e.g. APIs for highly aggregated small amount of data, emailable CSVs, a data stream, or location to the data) and how curated their data should be. A business analyst might want historical data at a high level of aggregation grouped by a time measure delivered to a visualisation tool like Power BI. A product owner might require a lightly-aggregated [near] real time stream of data so that they can get real-time data that can be further transformed by the team for their use case. A machine learning specialist might require **a lot** of lightly-transformed historical signal data via Blob Storage link which can be used to train a model.

Platforms offer various levels of curated data in that domain such that the data is cleaned up (e.g. deduplicated), the fields/columns are understandable/well-documented, there is transparency (through documentation or Data Lineage tooling) about how the data was transformed, and the data is served to consumers according to their needs. This reduces the need to data wranglers in an organisation from solving the same problem over again (curation) and there is a consistent definition for whether or not a domain object is in a certain state (e.g. healthy/not-healthy). Additionally, not all people in an organisation, especially those far from tech, should need to understand the raw data and how to transform it in order to come to a conclusion for a business decision (but they should be aware that data is at the heart of a business decision). For example: not all sensor data is human-readable and might come in a binary format which is required to be de-coded by a manufacturer-specific translation mapping, of which there are many. Could you imagine everyone in your organisation needing to do the same sometimes tedious transformations for every product that used data? How would you ensure that all transformations happened consistently?

A platform should be built as a product, where all consumers/personas are heavily reasearched, it is clear what kind of data they need, how fresh that data needs to be, how accure it needs to be, and what delivery mechanism is most desirable.