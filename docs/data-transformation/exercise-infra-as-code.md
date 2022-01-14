---
sidebar_position: 50
---
# Infrastructure as Code
![project-structure-transformation-navi.png](./assets/project-structure-transformation-navi.png)

Creating resources in the AWS Console can be sometimes prone to mistakes, but we have [Infrastructure as Code](https://infrastructure-as-code.com/book/) to the rescue.

The Terraform code to bring up our infrastructure for `data-transformation` can be found [here](https://github.com/data-derp/exercise-co2-vs-temperature-infrastructure/tree/master/iac/data-transformation) and `data-workflow` can be found [here](https://github.com/data-derp/exercise-co2-vs-temperature-infrastructure/tree/master/iac/data-workflow).

1. Manually delete the resources you created by hand (for the `data-transformation` and `data-workflow` - don't delete the `data-ingestion` resources!) to prevent resource clashing.
2. Follow [these instructions](https://github.com/data-derp/exercise-co2-vs-temperature-infrastructure/blob/master/infrastucture-as-code.md#data-transformation-iac) to use Terraform to create the `data-transformation` resources. 
3. Follow [these instructions](https://github.com/data-derp/exercise-co2-vs-temperature-infrastructure/blob/master/infrastucture-as-code.md#data-transformation-iac) to use Terraform to create the `data-workflow` resources.
4. [Destroy your resources](https://github.com/data-derp/exercise-co2-vs-temperature-infrastructure/blob/master/infrastucture-as-code.md#destroy-everything) when you're done!