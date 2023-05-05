---
sidebar_position: 1
minutesToComplete: 40
---


# Practice Domain: EV Charging
Now that we've covered the theory behind Data Engineering, we'll spend the next few sections putting that to practice in the context of a domain. We'll do that by asking some relevant domain questions, walking through the data processing steps and architectures required to answer those questions, and then implementing them in exercises for the rest of the training.

But first, a little more context about our domain...

## Context
In the time of climate change, the world is attempting to reduce its dependency on coal and gas (and thereby CO2 emissions) for energy by adopting green/renewable technologies. One of those technologies are Electric Vehicles (henceforth, "EVs" or "EV" [singular]). Governments have additionally announced bans on the sale of gasoline-powered vehicles, some effective in the next 15 years in order to reduce CO2 emissions, putting pressure of automobile companies to invest in the betterment of EV-technology to make it more widespread and accessible. Logistics and large city public transportation fleets are also becoming electrified and charging technology is becoming more widespread and efficient, allowing for an even more larger spread of EVs. There are also a multitude of companies whose sole purpose is to coordinate the efforts of at-home Charger installations to make it even more convenient for the typical consumer, which also lays the groundwork for decentralised home energy management (leveraging bi-directional charging and home energy optimisers by way of home Photovoltalics and other energy generators). 

While the trend towards EVs seems optimistic, EVs aren't [yet] the hallmark of sustainability and socio-economic equality: battery technology largely still uses precious minerals whose method of acquisition are questionable, EVs are expensive thereby making them only available to those who are wealthy enough to afford both the vehicle and access to an at-home charging station, and EV charging networks are more prolific in cities whose living costs are already relatively expensive. There are continued efforts to improve both aspects (sustainability, socio-economic equality) and make it cheaper, more convenient, and accessible to the wider public which would even more reduce the dependency on oil and gas.

Charge Point Operators (CPOs), of which there are many, are responsible for installing Charge Points (Chargers) in strategic locations, maintaining security of the Charge Points, ensuring sufficient electricity flow and load management, managing reservations, handling bi-directional charging in compatible locations, and ensuring that charging an electric vehicle is a pleasant experience for the customer. There are four high-level components that a CPO might be concerned with in the space of Charge Management and optimisation:
1. the Charge Point that dispenses electricity which contains its own hardware and software
2. the Charging Station Management System (CSMS) with which the Charge Point communicates and interacts
3. the charging data generated by the Charge Point
4. intelligent solutions which offer cost-charging optimsations based on integrations with Photovolatics and real-time and historic data on electricty usage in the vicinity

The data collected by the CSMS is interesting for a variety of reasons. First, it offers drivers and fleet operators a view into their energy consumption and the ability to leverage scheduled/automated charging based on their own needs and charging patterns. Secondly, it offers some insight into charging behaviours which can feed into central electricity grids, allowing governments and electricity companies to better understand electricity consumption patterns and provide sufficient energy to these locations. Thirdly, as we slowly reduce our dependency on coal and gas, there could be interruptions of service from the elctricity grid if there are spikes of demand which the grid cannot quickly compensate but a network of plugged-in EVs in a community can quickly resolve in the locality through bi-directional charging back to the grid and decentralised at-home energy generators. In order for these use-cases to become realised,  Charge Point data must be treated as a first-class citizen and architectures/technologies allowing for near-real time insights and recommendations will need to be chosen carefully.

In the next few sections, we'll talk about how the technology works, give an overview of the data that is generated by the Charge Point and sent to the CSMS, suggest some simple questions or insights that can be determined by the data, and describe some of the architectures that would be responsible for providing those insights in a timely manner. 

## How it works
How it works, at a glance:
1. EV plugs into a Charge Point
2. Charge Point connects to and authenticates with a CSMS using Websockets and the OCPP Protocol
3. The Charge Point sends a message to the CSMS according to the OCPP protocol
4. The CSMS receives the message, processes/records it, and sends back a positive/negative response

The OCPP Protocol is an open standard created by the Open Charge Alliance (OCA) as a effort to standardise communication and encourage interoperability. Both Charge Points (the actual devices) and CSMSs can be certified by the OCA as being compliant with the OCPP Protocol. Despite that, there seems to be some variation between implementations of both Charge Points and CSMSs which are the result of interpretations of OCPP. There is an official testing protocol on the path to certification - both testing and access to the User Acceptance Test (UAT) document provided as part of their OCTT (OCPP Testing Tool) require OCA membership and vetting by OCA. Every year, the OCA has an event called PlugFest where CSMS developers can come to a single place to test their implementations against various Charge Points.

The OCPP Protocol, at the time of writing have the the following versions:
* OCPP 1.5 - deemed out of date but many Charge Points still only support this (they're recommended to update to at least the next version)
* [OCPP 1.6](https://www.openchargealliance.org/protocols/ocpp-16/) - most widely implemented, supports both SOAP/JSON versions
* [OCPP 2.0.1](https://www.openchargealliance.org/protocols/ocpp-201/) - improvements made in security and smart charging, not all Charge Points and CSMS implement this but are encouraged to do so to stay competitive

Staying true to versioning for APIs, version 2.0.1 is not backwards compatible with version 1.6, but they do have some core functionalities that they share.

## Some Core OCPP Actions and its Data
For every event that is generated by the Charge Point, the CSMS sends a response. The following are examples of raw OCPP data.

### Heartbeat Request
The Charge Point informs the CSMS that the it is still responsive. This is a configurable value on the Charge Point. If the Charge Point has not sent any other messages during that allotted time, it sends a Heartbeat to the CSMS.

```json
{}
```

### Heartbeat Response
```json
{
  "current_time": "2023-01-01T09:00:00+00:00"
}
```

### BootNotification Request
Whenever a Charge Point boots/reboots, it sends a BootNotification message which lets the CSMS know what configuration it has. The CSMS sends back an `accepted` response if all configuration values are suitable.

```json
{
  "charge_point_model": "AwesomeModel",
  "charge_point_vendor": "My Awesome Vendor"
}
```

### BootNotification Response

```json
{
  "current_time": "2023-01-01T09:00:00+00:00",
  "interval": 300,
  "registration_status": "Accepted"
}
```

### MeterValues Request
Sampled readings from the energy meter/sensors to provide information about the amount of energy dispensed at a given time and connector. These readings are sampled while a Transaction is in progress.

```json
{
    "connector_id": 1,
    "meter_value": [
      {
        "timestamp": "2022-01-01T08:00:06+00:00",
        "sampled_value": [
          {
            "value": "0.0",
            "context": "Sample.Periodic",
            "format": "Raw",
            "measurand": "Voltage",
            "phase": "L1-N",
            "location": null,
            "unit": "V"
          },
          {
            "value": "7.21",
            "context": "Sample.Periodic",
            "format": "Raw",
            "measurand": "Current.Import",
            "phase": "L1",
            "location": null,
            "unit": "A"
          },
          {
            "value": "1400.77",
            "context": "Sample.Periodic",
            "format": "Raw",
            "measurand": "Power.Active.Import",
            "phase": "L1",
            "location": null,
            "unit": "W"
          },
          {
            "value": "0.0",
            "context": "Sample.Periodic",
            "format": "Raw",
            "measurand": "Voltage",
            "phase": "L2-N",
            "location": null,
            "unit": "V"
          },
          {
            "value": "0.0",
            "context": "Sample.Periodic",
            "format": "Raw",
            "measurand": "Current.Import",
            "phase": "L2",
            "location": null,
            "unit": "A"
          },
          {
            "value": "0.0",
            "context": "Sample.Periodic",
            "format": "Raw",
            "measurand": "Power.Active.Import",
            "phase": "L2",
            "location": null,
            "unit": "W"
          },
          {
            "value": "0.0",
            "context": "Sample.Periodic",
            "format": "Raw",
            "measurand": "Voltage",
            "phase": "L3-N",
            "location": null,
            "unit": "V"
          },
          {
            "value": "0.0",
            "context": "Sample.Periodic",
            "format": "Raw",
            "measurand": "Current.Import",
            "phase": "L3",
            "location": null,
            "unit": "A"
          },
          {
            "value": "0.0",
            "context": "Sample.Periodic",
            "format": "Raw",
            "measurand": "Power.Active.Import",
            "phase": "L3",
            "location": null,
            "unit": "W"
          },
          {
            "value": "1400.77",
            "context": "Sample.Periodic",
            "format": "Raw",
            "measurand": "Energy.Active.Import.Register",
            "phase": null,
            "location": null,
            "unit": "Wh"
          },
          {
            "value": "7.21",
            "context": "Sample.Periodic",
            "format": "Raw",
            "measurand": "Current.Import",
            "phase": null,
            "location": null,
            "unit": "A"
          },
          {
            "value": "1400.77",
            "context": "Sample.Periodic",
            "format": "Raw",
            "measurand": "Power.Active.Import",
            "phase": null,
            "location": null,
            "unit": "W"
          }
        ]
      }
    ],
    "transaction_id": 1
}
```

### MeterValues Response
```
{}
```

### StartTransaction Request
The Charge Point informs the CSMS that a transaction has been started

```json
{
    "connector_id": 1,
    "id_tag": "ea068c10-1bfb-4128-ab88-de565bd5f02f",
    "meter_start": 0,
    "timestamp": "2022-01-01T08:00:00+00:00",
    "reservation_id": null
}

```

### StartTransaction Response
```json
{
    "transaction_id": 1,
    "id_tag_info": {
      "status": "Accepted",
      "parent_id_tag": "ea068c10-1bfb-4128-ab88-de565bd5f02f",
      "expiry_date": null
    }
}
```

### StopTransaction Request
The Charge Point informs the CSMS that a transaction has been stopped

```json
{
    "meter_stop": 2780,
    "timestamp": "2022-01-01T08:20:00+00:00",
    "transaction_id": 1,
    "reason": null,
    "id_tag": "ea068c10-1bfb-4128-ab88-de565bd5f02f",
    "transaction_data": null
}
```

### StopTransaction Response
```json
{
    "id_tag_info": {
      "status": "Accepted",
      "parent_id_tag": "ea068c10-1bfb-4128-ab88-de565bd5f02f",
      "expiry_date": null
    }
}
```