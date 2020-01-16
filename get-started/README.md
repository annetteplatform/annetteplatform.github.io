

# Introduction

## Annette Platform

Annette is a platform to build high performance, scalable, cloud-ready business application. It is based on microservice architecture. Each component of the platform represents one or more microservices. Microservices are loosely coupled. Each microservice do one thing and do it well.  Microservices are orchestrated by API Gateway. API Gateway are responsible for processing requests comings from frontend applications or external systems. During processing request API Gateway performs:
 * authentication and authorization tasks,
 * calls one or more microservices,
 * aggregates data received from microservices,
 * forms response to the request. 

To provide scalability and high performance API Gateway could be started in multiple instances distributed on nodes across network. Due to stateless nature of API Gateway any request could be processed by any instance.

Microservices could work in clustered mode. In clustered mode microservice runs multiple instances distributed on one or more nodes across network. Each instance of microservice discovers other instances in the network and forms cluster using gossip protocol. After this microservice gets in ready state and can serve client requests. In cluster mode load is balanced between instances. If new instances started or existing instance goes down the cluster automatically rebalanced without interruption.  


## Annette Axon

> An **axon** or nerve fiber, is a long, slender projection of a nerve cell, or neuron, in vertebrates, that typically conducts electrical impulses known as action potentials, away from the nerve cell body. The function of the axon is to transmit information to different neurons, muscles, and glands.
>
> [*Wikipedia*](https://en.wikipedia.org/wiki/Axon)

Annette Axon is the business process management system integrated with project management system. It is built on Annette platform and provide all its capabilities such as high availability, performance and scalability.
Annette Axon helps companies to define, execute and control non-project and project business processes. 
It implements the following functionality:

* flexible business processes based on BPM engine (Camunda BPM)
* organizational structure of one or more companies and project team structures
* project system with Gantt diagram representation of WBS (work breakdown structure)

