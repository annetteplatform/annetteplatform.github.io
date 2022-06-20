

# Introduction

Annette Platform is a platform to build distributed, scalable, enterprise-wide business applications. It is designed to be highly available. 
Annette Platform is “cloud-native” as it has been designed scale out in large, distributed environments,
and works well inside containers. It uses in-memory calculation and non-blocking processing 
technologies to provide high performance. Annette Platform has been build on microservice architecture. 
Each microservice runs multiple instances that form a cluster to provide load balancing and scaling.

Annette Platform Community Edition (Annette CE) is open source version of Annette Platform Enterprise Edition 
(Annette EE). Annette CE contains the base functionality and key features of Annette EE. Since it has no 
backward compatibility restrictions, some of the Annette Platform features could be implemented in a more 
advanced way. 

Annette Platform is backed by [IP Lobachev](https://lobachev.biz/), [AmberLabs](https://amberlabs.ru/) and
[ArtNet](https://artnet.tech/), software companies that develop business applications using the platform 
and provide commercial support.

## Key Features

Annette platform provides set of microservices and libraries that helps to build enterprise wide digital ecosystem.
This ecosystem can contain a number of applications that share commonly used data and have seamless integration. 
This helps Annette users to communicate, collaborate and make them more productive. 

### Business key features

* High performance that provides quick response and high user satisfaction (customers, employees, business partners)
* High scalability that allows you to optimize costs and scale computing resources in accordance with the needs
* Low time-to-market due to rapid development and implementation of new services
* Low total cost of ownership
* A unified ecosystem that combines various applications on the Annette platform into a single business environment 
  through Single Sign On and shared data.
* Powerful authorization system implements a fine-grained role based access control (RBAC) and allows flexible permission
  assignment expressed with business terms such as organizational hierarchy and employee business roles.
* A unified person repository that stores all users, employees, partners, contacts etc. in single repository and share 
  it between Annette applications
* An organizational repository that stores organizations data with their respective organizational structures, hierarchies, 
  units, positions, business roles and manager-subordinate relationships     
* Multilanguage and localization support allows to use Annette platform in multinational corporations.  
* Flexible attribute system that allows creating custom attributes, assigning them to various business entities such as person, 
  organization unit, organizational position etc. and provides powerful full text search capabilities.  


### Technical key features

* High performance provided by implementation of [Reactive Manifesto](https://www.reactivemanifesto.org/) principles.
* High scalability provided by [Akka](https://akka.io/) clustering technologies and [Kubernetes](https://kubernetes.io/) 
  production-grade container orchestration.  
* Cloud native allows deploying Annette applications in on-premise, private cloud or public cloud environments. 
* Enterprise-wide platform
* Extendable architecture based on microservices
* Support of unlimited number frontend applications
* Support of unlimited number API Gateways for serving frontend applications and external integration services
* Distributed cluster architecture of microservices and API Gateways
* External & internal authentication
* External & internal authorization
* Embedded Elastic Search integration


## Usage in production

Annette is stable and mature platform. It is battle tested in large environments with hundreds of concurrent users. 
There are number of applications that has been developed using it, such as:
* TELE2 Logistics System for SAP ERP on HANA — user friendly interface for performing logistics operations (material 
  procurements, movements and consumption) in SAP HANA (approx. 700 users);
* Smart City IoT System for EMERCOM of Tyumen Region  - City environment monitoring system for EMERCOM of Tyumen Region
* MIMC Application Processing System — system for registration and expert evaluation applications to Moscow International 
  Medical Cluster (approx. 100 users);
* Construction Project Management System for Moscow Construction Department — system to manage construction projects in 
  Moscow (more than 10000 users);
* Construction Worker’s Safety Control System for Moscow Construction Department — IoT hardware and software solution, 
  based on LoRaWAN technologies, to control worker’s presence, location and safety on construction sites 
  (more than 3000 users);
* Eldorado MVideo Enterprise Portal (EM Life) — enterprise collaboration and communication system integrated with 
  SAP HCM, SAP BW and others corporate information systems at one of Russian largest retailer MVideo Eldorado 
  (approx. 30000 users). EMLife won Russian Intranet Award in nomination Intranet of the Year and international silver 
  award Intranet 2020     

