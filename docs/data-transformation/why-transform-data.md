---
sidebar_position: 2
---
# Why Transform Data?

Data might not be in the exact format you need to visualise, predict, or make conclusions 

In situations with big data, remember transformations need to happen “close” to where the data is stored 

What “close” means:
  * Clean/filter the data as soon as it’s sensible, so that end-users don’t repeat the same computations (wasteful)
  * Minimize data transfers over the network
  * You can still have separation between compute and storage resources
  * However, you can’t just treat Big Data like you would with microservices
  * You can’t just bounce huge JSONs back and forth between APIs using REST/HTTP
  * Use the right protocols! (e.g. s3://)