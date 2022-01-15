---
sidebar_position: 1
---


# Intro to Streaming

## Apache Kafka
![apache-kafka.png](./assets/apache-kafka.png)
![topic-partitions.png](./assets/topic-partitions.png)

[Kafka in 5 mins](https://youtu.be/PzPXRmVHMxI)

([from Stephane Maarek's playlist](https://www.youtube.com/watch?v=XFqm_ILuhs0&list=PLt1SIbA8guusxiHz9bveV-UHs_biWFegU&ab_channel=StephaneMaarek)) deeper dive, definitely worth watching the rest of
this playlist after the Kafka 101 playlist below


[Kafka 101 Playlist](https://www.youtube.com/watch?v=qu96DFXtbG4&list=PLa7VYi0yPIH0KbnJQcMv5N9iW8HkZHztH) ([first 5 videos](https://www.youtube.com/watch?v=qu96DFXtbG4&list=PLa7VYi0yPIH0KbnJQcMv5N9iW8HkZHztH) in the playlist are mandatory)
Excellent introduction to the motivation and philosophy of Apache Kafka
If you’re not too bored, try to watch all of the videos on the playlist (at 1.25x or 1.5x speed)

* Topics 
  * Events are **organized** and durably stored in topics, similar to a folder in a filesystem,
  and the events are the files in that folder. An example topic name could be "payments"
* Partitions
  * How do you allow topics to be consumed **in parallel**?
*Offsets
  * Kafka retains records in the log in **incremental fashion**,
  making the consumers responsible for tracking the https://github.com/kelseymok/kafka-example, known as the **“offset”**
* Consumer Groups
  * What happens if two consumers use the same Consumer Group Id?


[optional - do this after reading everything] Walkthrough of Kafka ([official tutorial](http://kafka.apache.org/quickstart)) (run in [this docker container](https://github.com/kelseymok/kafka-example))

## Cloud Offerings
![kafka-vs-standard-messaging.png](./assets/kafka-vs-standard-messaging.png)
[Amazon Kinesis](https://www.youtube.com/watch?v=07iZOEl0knc&ab_channel=StephaneMaarek) (Explore the [main service categories of Kinesis](https://aws.amazon.com/kinesis/))
Kinesis is a managed alternative to Kafka for AWS, supporting most of the same features + autoscaling.
[Amazon Managed Streaming for Apache Kafka (Amazon MSK)](https://aws.amazon.com/msk/) has also been recently launched

[Azure Event Hubs](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-for-kafka-ecosystem-overview)
Like Kinesis, Event Hubs also has auto-scaling capabilities (auto-inflate).
However, unlike Amazon Kinesis, Azure Event Hubs endpoints are fully-compatible with Kafka’s Producer and Consumer APIs

Bigger Picture
* [Should I use Kafka (pub/sub) or a standard message queue (e.g. RabbitMQ)?](https://www.youtube.com/watch?v=lwMjjTT1Q-Q&ab_channel=MarkRichards)
* [Comprehensive comparison](https://betterprogramming.pub/rabbitmq-vs-kafka-1ef22a041793) ([there's also a Part 2 to this article - scroll to the bottom](https://betterprogramming.pub/rabbitmq-vs-kafka-1ef22a041793))

## Streaming Processing Concepts
![two-problems-distributed-systems.png](./assets/two-problems-distributed-systems.png)
[Delivery Semantics](https://www.confluent.io/blog/exactly-once-semantics-are-possible-heres-how-apache-kafka-does-it/)
* Exactly-Once
  * (may not be available in all frameworks)
* At-Most-Once
* At-Least-Once

How would you decide which strategy to go with?
[Concrete Example](https://keen.io/blog/demystifying-apache-kafka-message-delivery-semantics-at-most-once-at-least-once-exactly-once/)

## Advanced Considerations
[How many Partitions should I set per topic?](https://www.confluent.io/blog/how-choose-number-topics-partitions-kafka-cluster/)


[Comparing Streaming Processing Frameworks](https://www.youtube.com/watch?v=PiEQR9AXgl4&ab_channel=Databricks)
For all intents and purposes, Apache Flink and Apache Spark are almost interchangeable in that comparison (vs Kafka Streams and Akka Streams). The only difference is that Flink can naturally run in Continuous Processing mode 


## Streaming Analytics Concepts
![windowed-grouped-aggregation.png](./assets/windowed-grouped-aggregation.png)
[Windows](https://ci.apache.org/projects/flink/flink-docs-stable/dev/stream/operators/windows.html)
* Tumbling Windows
* Sliding Windows
* Session Windows
  * (may not be available in all frameworks)

[Handling Lateness & Watermarking](https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html#handling-late-data-and-watermarking)

[keyBy](https://ci.apache.org/projects/flink/flink-docs-stable/dev/stream/operators/#keyby)
Splitting the stream logically for your domain

[State](https://ci.apache.org/projects/flink/flink-docs-stable/dev/stream/state/state.html#using-keyed-state) (using Flink as an example)
* Keyed State vs Operator State
* Managed Data Structures for State
  * ValueState
  * ListState
  * MapState

![checkpoints.png](./assets/checkpoints.png)
[Checkpointing](https://ci.apache.org/projects/flink/flink-docs-release-1.13/docs/dev/datastream/fault-tolerance/checkpointing/)
Making sure we can recover from failures seamlessly
Analogous to log based recovery for database systems

## Stateful Streaming in a Nutshell
![stateful-streaming-in-a-nutshell.png](./assets/stateful-streaming-in-a-nutshell.png)
