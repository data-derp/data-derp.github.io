---
sidebar_position: 5
---
# Exercise: Infrastructure as Code
![project-structure-ingestion-navi.png](./assets/project-structure-ingestion-navi.png)

Creating resources in the AWS Console can be sometimes prone to mistakes, but we have [Infrastructure as Code](https://infrastructure-as-code.com/book/) to the rescue.

The Terraform code to bring up our infrastructure can be found [here](https://github.com/data-derp/exercise-co2-vs-temperature-infrastructure/tree/master/iac/data-ingestion).

1. Manually delete the resources you created by hand (in the `data-ingestion` section) to prevent resource clashing.
2. Follow [these instructions](https://github.com/data-derp/exercise-co2-vs-temperature-infrastructure/blob/master/infrastucture-as-code.md#data-transformation-iac) to use Terraform to create these resources. 