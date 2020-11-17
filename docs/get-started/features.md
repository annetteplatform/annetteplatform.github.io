
# Features

## Core features

Annette platform is enterprise-wide platform. It can be used to build any number applications based on set API Gateways and microservices.

![Annette Layers](./ewp.png "Annette Layers")

Annette platform contains the next layers:
* Frontend Layer contains frontend applications. For example, there could be Blogs & Business Communication application to provide staff with information related their duty, Finance application to manage financial tasks, Logistic application to perform logistics operation etc. Frontend Layer communicates to API Gateway Layer.
* API Gateway Layer responsible for processing requests comings from frontend applications or external systems. API gateways perform authentication and authorization and orchestrate microservices.
* Microservice Layer contains set of microservices that provides core functionality of applications  build on Annette Platform. Each microservice has single responsibility and can communicate to:
  * others microservices (synchronous by calling microservice API or asynchronous by using Apache Kafka)
  * Persistence Layer to store data and files
  * Integration Layer to exchange data with external information systems
* Persistence Layer stores data  in SQL/NoSQL DBs and store files in object storage
* Integration Layer performs communication with external information systems (SAP ERP, S/4HANA, MES, IoT Gateways, etc.)

### Cluster architecture & scalability

Annette platform has cluster architecture and provides scalability capabilities by design. It is designed to run in Kubernetes environment.

<img class="theme-default-content" src="./clustering.png" data-zoom-src="./clustering.png" alt="Cluster architecture" />

![Annette cluster architecture](./clustering.png "Cluster architecture")

Annette platform layers that can be clustered:
* Microservice Layer 
* Persistence Layer (Cassandra, ElasicSearch, Minio)

Annette platform layers that can be ran in multiple instances:
* API Gateway Layer (as API Gateways are stateless, they can run in multiple instances without clustering)
* Microservice Layer 
* Persistence Layer (Cassandra, ElasicSearch, Minio)

### External & internal authentication

Annette platform provides internal and external authentication for API Gateways.
API Gateways can use both authentication methods at same time.

**Internal Authentication**

Security keys for basic authentication stored in Basic Authenticator Configuration  
![Internal Authentication](./internal_auth.png )

**External Authentication using Keycloak**

Keycloak can have own user database or can be integrated with external providers:
* Kerberos (Active Directory)
* LDAP
* SAML 2.0
* OpenID Connect 2.0
* Social providers (Google, Facebook, Twitter, Microsoft etc.)

![External Authentication](./external_auth.png )


### External & internal authorization

Annette platform provides internal and external authorization for API Gateways.
API Gateway can use either internal authorization or external authorization.

**Internal authorization**

Internal authorization uses permission assignment to principals stored in local configuration file.

This authorization method is useful for simple cases.

![Internal authorization](./internal_authz.png )

**External authorization**

External authorization calls to authorization service that store permission-principal assignments in distributed database (Cassandra).

This authorization method is useful for complex enterprise-wide authorization system.

![External authorization](./external_authz.png )

### Principals

Principal is the subject can be authorized to perform operations in Annette platform. Principal can be direct (references to person or technical account) or indirect (indirectly references to zero or more direct principals).

Direct principals:
* Person
* Technical account 

Indirect principals:
* Anonymous user
* Authenticated user
* Organizational position
* Organizational role
* Employee of a particular organizational unit (direct organizational unit)
* Employee of a particular organizational unit or its subunits (descendant organizational unit)
* Employee of a particular organization
* Chief of organizational unit 

**Principal derivation**

During authentication process the authenticator derives direct principal (person or technical account). Then it can derive indirect principals related to direct principal using Organizational Structure Service.
 
![Principal derivation](./principal_derivation.png)

### Elastic Search integration

Annette platform has embedded integration with ElasticSearch to implement full-text search in platform microservices with the following capabilities:

* Creation of data structure schemas for searching by microservice entities
* Create documents based on specified data structures
* Perform full text search 



## Application service

## Authorization service

## Persons service

## Organizational structure service

## Attribute services


