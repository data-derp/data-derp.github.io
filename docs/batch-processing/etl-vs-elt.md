---
sidebar_position: 7
minutesToComplete: 5
---
# ETL vs ELT

<div style={{textAlign: 'center'}}>

<figure class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/IqXqe7ZbcM8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>

</div>

## Let's Be Pragmatic
Rather than obsessing over this ETL vs ELT cage fight, just try to take away the following:
* Sometimes you may want to optimize/reshape your data sooner (because it is a common use-case/denominator for your consumers or your consumers don't have the capabilities to aggregate data on their own)
* Other times, you want to leave the schema flexible (and just let the user’s queries/views do the work) to avoid having to maintain lots of tables/views/jobs

To bring it back to our context (3-hop architecture), it is totally and completely acceptable for Consumers read directly from the Silver layer resulting in an ELT architecture. These Consumers must have the technical capabilities within their team to handle the respective amount of data according to their data requirements (timeliness, amount of data, compute power). Some organisations might also opt to push the results of the Silver layer to queryable sources like PowerBI so that Business Intelligence departments can use their own tools to gain insights on this data. The Silver layer is powerful to its consumers and accelerates the time to delivering insights/value because of its curated nature. Somewhere, some **lightweight** governance team (comprising domain, business, and technical representatives from multiple teams within the network of data) will have likely made a standarisation decision about how to represent certain domain objects, for example, that all unique identifiers must be lowercase and case-insensitive or that values of a certain measure must be of `double` type and have 2 significant digits. The Silver layer delivers this level of standardisation and curation while still maintaining the granularity of the data so that consumers have the flexibility to run their own aggregations. This is one form of an ELT architecture.

For complex aggregations or for teams without the big data capabilities, we might take yet another step to transform our data from the Silver layer, in the form of any number of Gold layers which is then used by a consumer. Usually, there is a 1:1 relationship between the Gold layer and a use-case, and is our classical ETL representation. In this case, it's important to understand exactly what is requested or what question is being answered by the data in order to determine the correct aggregation. Understanding what questions are to be answered by data is also important in determining what shape the data takes in the Silver layer as well (common denominator), but it is more granular and specific in the Gold layer.

