---
sidebar_position: 1
minutesToComplete: 15
authors: [kmok]
---

# Basics of a Data Platform
As demonstrated in the "My First Dataset" section, when answering multiple questions in the domain, it might be helpful to consolidate and share efforts so that other people who have a similar goal can benefit from your work. That can be at the infrastructure level, where a lightweight team might be focused on providing tooling to handle event streams, data storage, data catalogues (find your data), and additional common developer tooling (like libraries, compute power like Spark) that are relevant to consumers of the platform. At the level of data processing, teams working within the Platform might develop products that transform the data that can (a) answer a domain question (using varying degrees of Intelligence) to make a business decision or (b) eliminate the complexity of a certain data transformation that requires deep domain knowledge and serves that transformed data to another team for further processing.

## Components of a Data Platform
### Self-Service Platform
A lightweight platform enables teams on the platform to both find and access data themselves, lowering the barrier to entry, and provides common tooling to get teams started quickly with experimentation. Several offerings can include:

* Event Streaming Technology
* Data Storage in various forms
* Data Catalogue to help find and data
* ML and Data Engineer tooling (e.g. Spark, other cloud-native Data-services)
* Common libraries or templates to speed up the process of experimentation
* Data Lineage tooling

### Data Products
A Data Product aims to answer a specific domain question to help a business make a decision or transform data according to a complex domain construct so that others can reuse the output shape of data. Data Products can be in the form of a simple data transformation or more complex ML models. They are cross-functional teams, very closely involve the Consumer or Decision-maker, and employ many Software Development sensible defaults like iterative development, deploying small changes, testing, and continuous deployment.

### Lightweight Data Governance
In order for a Platform to be in harmony, it requires some lightweight governance to help communicate the needs of the products back to the self-serve platform, ensure that the Platform has a clear goal and its collaborators understand it, ensure that the Platform continues to deliver value to the company, and is a lighthouse for good engineering and data practices. This is a distributed group with representatives from multiple levels in multiple disciplinaries. The purpose of this team is set some lightweight guidelines to ensure the success of every participant in the platform and the success of the company, not to rule by command and control. This group is often comprised of forward-thinking and people- and business-understanding individuals from all areas of the platform.

## The Guiding Light: FAIR Principles
The most successful Platforms are guided by the [FAIR Principles](https://www.go-fair.org/fair-principles/) whose ultimate goal is to ensure data sharing. Hanging on to your data and keeping it a secret is out-of-date behaviour. The following text is directly from [Go-FAIR](https://www.go-fair.org/fair-principles/). The principles refer to three types of entities: data (or any digital object), metadata (information about that digital object), and infrastructure. For instance, principle F4 defines that both metadata and data are registered or indexed in a searchable resource (the infrastructure component).

### Findable
The first step in (re)using data is to find them. Metadata and data should be easy to find for both humans and computers. Machine-readable metadata are essential for automatic discovery of datasets and services, so this is an essential component of the FAIRification process.

* F1. (Meta)data are assigned a globally unique and persistent identifier
* F2. Data are described with rich metadata (defined by R1 below)
* F3. Metadata clearly and explicitly include the identifier of the data they describe 
* F4. (Meta)data are registered or indexed in a searchable resource

### Accessible
Once the user finds the required data, she/he/they need to know how they can be accessed, possibly including authentication and authorisation.

* A1. (Meta)data are retrievable by their identifier using a standardised communications protocol
  * A1.1 The protocol is open, free, and universally implementable
  * A1.2 The protocol allows for an authentication and authorisation procedure, where necessary
* A2. Metadata are accessible, even when the data are no longer available

### Interoperable
The data usually need to be integrated with other data. In addition, the data need to interoperate with applications or workflows for analysis, storage, and processing.

* I1. (Meta)data use a formal, accessible, shared, and broadly applicable language for knowledge representation.
* I2. (Meta)data use vocabularies that follow FAIR principles
* I3. (Meta)data include qualified references to other (meta)data

### Reusable
The ultimate goal of FAIR is to optimise the reuse of data. To achieve this, metadata and data should be well-described so that they can be replicated and/or combined in different settings.

* R1. (Meta)data are richly described with a plurality of accurate and relevant attributes
  * R1.1. (Meta)data are released with a clear and accessible data usage license
  * R1.2. (Meta)data are associated with detailed provenance
  * R1.3. (Meta)data meet domain-relevant community standards