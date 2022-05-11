---
sidebar_position: 5
---
# Exercise: Infrastructure as Code (Optional)

<div style={{textAlign: 'center'}}>

<figure class="video-container">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/iJQPIc_L568" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</figure>
</div>


Creating resources in the AWS Console can be sometimes prone to mistakes, but we have [Infrastructure as Code](https://infrastructure-as-code.com/book/) to the rescue.

The Terraform code to bring up our infrastructure can be found [here](https://github.com/data-derp/exercise-co2-vs-temperature-infrastructure/tree/master/iac/data-ingestion).

1. Manually delete the resources you created by hand (in the `data-ingestion` section) to prevent resource clashing.
2. Follow [these instructions](https://github.com/data-derp/exercise-co2-vs-temperature-infrastructure/blob/master/infrastucture-as-code.md#data-transformation-iac) to use Terraform to create these resources. 