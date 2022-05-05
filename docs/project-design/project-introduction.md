---
sidebar_position: 2
---


# Project Introduction

<div style={{textAlign: 'center'}}>

<figure class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/vn0H4klq-as" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>
</div>





In the next few sections, we'll walk through some of those landmarks that we just talked about, namely
* Data Ingestion
* Data Transformation
* Data Visualisation

And we'll do that in the context of a small project.

We'll take **Example 1: Jess** as our core use case.

Our goal is to study the relationship between CO2 and Temperature around the world. Some questions that we aim to answer:
* Which countries are worse-hit (higher temperature anomalies)?
* Which countries are the biggest emitters?
* What are some attempts of ranking “biggest polluters” in a sensible way?


We'll focus first on developing our core Ingestion logic by leveraging the enahanced learning experience in Databricks notebooks. Next, we'll do a demonstration of what that looks like in Production Code. And then, we'll finally deploy those artifacts created by the production code to AWS Glue.

We'll do the same for our Data Transformation logic. And of course, lastly, we'll visualise our data.

The below figure represents what our final state will be, including the logic and the infrastructure.


<div style={{textAlign: 'center'}}>

![project-structure-navi.png](./assets/project-structure-navi.png)

</div>
