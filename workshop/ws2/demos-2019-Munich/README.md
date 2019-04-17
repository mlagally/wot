# WoT Workshop, June 3-5th, Siemens Munich
## W3C Web of Things Interoperability Demos



# Participating companies

| Company | Things/Devices/System/Tools | Infrastructure requirements, e.g. open ports, power sockets, Wifi | Comments |
|---------|--------|-------|-------|
| Oracle  | IoT Cloud Service | Wifi | Application t.b.d. |
| Siemens  | Industry Automation | Wifi / Lan | Application t.b.d. |
|  Siemens | Building Automation | Wifi / Lan | Application t.b.d. |
| TU Munich | robots, sensors, lights | LAN, 1 Power plug | |
| Intel | OCF endpoints, bridge, gateway, Smart home, Solar power management system (t.b.d.), Object recognition via AI, Speech output, Camera | Wifi/LAN, 1 Power plug | |
| Fujitsu | Cloud platform, gateway, sensors, Smart Home in Japan | Wifi, Power | |
| Panasonic | Smart home lab Osaka | Wifi, ? Power  | |
| Hitachi | node-red based tool for orchestration scenario - Application t.b.d. | Wifi, Power | |

# Scenarios

The following scenarios demonstrate the interoperability of devices across different manufactuers.

## Home integration scenarios

Scenario: Automatically turn off devices when user leaves the room  

### Description:
An environment sensor is capable of identifying when a room is empty by measuring the oxygen level.
When the "room empty" condition is detected
the room is cleaned by a vacuum cleaner, lights are turned off, window blinds are closed and a surveillance camera is turned on.

### Device interactions

environment sensor - cloud service  
...

## Industrial integration scenarios

Scenario: Automatically alert and protect citizens when a chemical plant has an accident

### Description
An environment sensor is capable of measuring air quality by measuring the oxygen level.
When a low oxygen condition is detected by the Oracle IoT-Cloud Service Asset Monitoring application,
connected devices take the appropriate action to protect and alert citizens,
such as draining a tank in the factory, turning off all air-conditioners, flash alert and warning lights,
pubish alert messages and make voice announcements.

### Device interactions

environment sensor - cloud service  
...

## Orchestrator combining a couple of endpoint devices
e.g. motion sensor triggering a light, orchestration could come from a different company
Brown field integration/describing an existing closed source device (e.g. Philips Hue, OCF, ...)

## Energy management in a smart building/smart city
Load sheding / load management: Solar Panel with a battery and a variable load (e.g. a light or a fan) - 
lower the light when certain conditions apply, e.g. bad weather.
Perhaps also have a connected power meter.
Consider simulated systems and physical devices.


## Additional Scenarios: 

### Enterprise integration scenarios
Ex: Access control and security system

### Transportation scenarios
Ex: Fleet management
Ex: Shipping and inventory control (supply chain management)



# Logistics

### TDs:
Please place all TDs into the TDs directory. 

### Tools:
Please place all tools into the tools directory. 


### Cloud:
* Oracle IoT Cloud Service Instance  
  Like in the previous plug fests there is an instance of the Oracle IoT Cloud Service available for interoperability tests.  
  It is shared among all plug fest participants, so please coordinate with Michael.Lagally@oracle.com if you have questions.  
  The management console is available at:
  \<t.b.d.\>  

  The instance is using the same password, as previously communicated to individual companies. Please let Michael.Lagally@oracle.com know if you require access.
  
* Oracle Digital Twin Simulator  
  There is an instance of the Oracle Digital Twin Simulator for plug fest participants. It hosts several simulations, such as a HVAC, Pump, Truck, Connected Car. Instances of simulated devices can be provided for plug fest participants on request.  
  Please let Michael.Lagally@oracle.com know if you require a simulated device instance.  
  The login page is at: \<t.b.d.\>
  

### Google Hangout:
   - Used to video stream remote devices such as Festo Live or Panasonic Lab
   - \<t.b.d.\>

# Documentation
- Links to additional information relevant for the demo.
* 
