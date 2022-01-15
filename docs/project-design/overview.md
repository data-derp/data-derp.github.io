---
sidebar_position: 1
---


# Background
Generally, there are a few common landmarks that are encountered on Data projects: 
* a **data source**
* an **Ingestion** step to pull and store data in a form closest to that of the source to allow for easy debugging and reprocessing
* a **Transformation** step to shape the data into a form that would help answer a question
* a **Visualisation** step to answer a question
* an **Intelligence** step which might include AI/ML use cases

Before we can start ingesting any data, it is important to truly understand the problem we are solving, because different problems result in different architectures.

## Example 1: Jess
A colleague on your team, Jess (who is a stellar analyst), needs to consume data on global temperatures between the years 1850 and 2020 in order to create projections for a report. The data required here exists and will not change. The data can be ingested once (**Batch Processing**), transformations can be written to shape the data into a format easily consumable by the Analytical software that Jess uses, and that transformed data can be stored in a place that can be easily accessed.

## Example 2: Toni
Toni, a Data Scientist on your team, needs to design an alert system for an Intelligent Home System for home offices. Because high concentrations of CO2 can result in deteriorated mental performance (headaches, sleepiness, etc), Toni's customers would like their homes to have a max CO2 contentration of less than 1000ppm. This system comprises a set a CO2 sensors placed at strategic locations in a customer's home and sends CO2 readings to a storage solution in the cloud. Toni, has been asked to predict whether the concentration of CO2 molecules will surpass 1000ppm and automatically triggers a window in the room to be cracked open. For this solution, Toni needs needs near-real time data in order to accurately predict when to open a window, for example, within 5 minutes. For this data will need to ingested (**Streamed**) at a rate that allows data to become available to Toni within 5 minutes of the reading.

