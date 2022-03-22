# Production installation

## Prerequisites

To run Annette Platform the following software should be installed:

- Apache Cassandra - NoSQL database providing high available storage to persist data.
- Elastic Search - full text search engine providing indexing of data stored in Cassandra
- Minio - AWS S3 compatible object storage to store files.
- PostgreSQL - relation database for Keycloak (identity provider) and Camunda (business process management system)
- Keycloak - identity management provider to authenticate users.

### Apache Cassandra

Apache Cassandra provides distributed, high available NoSQL database. Annette microservices use Cassandra to persist
their state. Annette Platform requires Apache Cassandra version 3.11 or higher. There is no requirement to create
keyspaces manually and init keyspace schemas. Annette Microservices will create keyspaces and tables automatically.

To download and install Apache Cassandra use the following [link](https://cassandra.apache.org/_/download.html). For
production installation it is recommended to enable password authentication (
see [Security Guide](https://cassandra.apache.org/doc/latest/cassandra/operating/security.html) in Cassandra
documentation).

As example of installation Cassandra cluster with 3 nodes (cas-01, cas-02, cas-03) on CentOS 7 you can use the following
steps:

1. Set firewall rules

```
firewall-cmd --permanent --add-port=7000/tcp
firewall-cmd --permanent --add-port=7001/tcp
firewall-cmd --permanent --add-port=7199/tcp
firewall-cmd --permanent --add-port=9042/tcp
firewall-cmd --permanent --add-port=9160/tcp
firewall-cmd --permanent --add-port=9142/tcp
firewall-cmd —reload
```

2. Add Cassandra repo keys `sudo rpm --import https://www.apache.org/dist/cassandra/KEYS`
3. Create Cassandra repo file `sudo vi /etc/yum.repos.d/cassandra.repo`

```
[cassandra]
name=Apache Cassandra
baseurl=https://www.apache.org/dist/cassandra/redhat/311x/
gpgcheck=1
repo_gpgcheck=1
gpgkey=https://www.apache.org/dist/cassandra/KEYS
```

4. Install Cassandra `sudo yum install -y cassandra`
5. Change Cassandra configuration file `sudo vi /etc/cassandra/conf/cassandra.yaml` to set cluster name and set
   Cassandra seed nodes:

```
cluster_name: 'Annette Cluster'
          - seeds: "cas-01, cas-02, cas-03"
listen_address: cas-01 # for cas-XX machine set cas-XX
rpc_address: cas-01 # for cas-XX machine set cas-XX
```

6. Change Cassandra JVM options `vi /etc/cassandra/conf/jvm.options`

```
-Xms12G
-Xmx12G
```

7. Create Cassandra service file `sudo vi /etc/systemd/system/cassandra.service`

```
[Unit]
Description=Cassandra
After=network.target

[Service]
PIDFile=/var/run/cassandra/cassandra.pid
User=cassandra
Group=cassandra
ExecStart=/usr/sbin/cassandra -f -p /var/run/cassandra/cassandra.pid
StandardOutput=journal
StandardError=journal
LimitNOFILE=100000
LimitMEMLOCK=infinity
LimitNPROC=32768
LimitAS=infinity
Restart=always

[Install]
WantedBy=multi-user.target
```

8. Start Cassandra daemon

```
sudo systemctl daemon-reload
sudo systemctl start cassandra
sudo systemctl enable cassandra
```

9. Check Cassandra status `nodetool status`

To enable Cassandra authentication perform the following steps:

1. Set Cassandra replication factor `cqlsh cas-01`

```
ALTER KEYSPACE system_auth WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };
```

2. Change Cassandra authenticator `sudo vi /etc/cassandra/conf/cassandra.yaml` on all nodes

```
authenticator: PasswordAuthenticator
```

3. Restart Cassandra `sudo systemctl restart cassandra` on all nodes
4. Set Cassandra password `cqlsh cas-01 -u cassandra -p cassandra`

```
ALTER USER cassandra WITH PASSWORD '<secret password>’;
```

5. Check Cassandra authentication `cqlsh cas-01 -u cassandra -p <secret password>`

### Elastic Search

Elastic Search is used to index data stored in Cassandra. Annette Platform requires Elastic Search version 7.8 or
higher. For secured Elastic Search it is recommended to
use [Open Distro for Elastic search](https://opendistro.github.io/) (version 1.9.0 or higher).

To download and install Open Distro for Elastic Search use the
following [link](https://opendistro.github.io/for-elasticsearch-docs/docs/install/). To secure installation
check [Security configuration
](https://opendistro.github.io/for-elasticsearch-docs/docs/security/configuration/).

As example of installation Open Distro for Elastic Search cluster with 3 nodes (es-01, es-02, es-03) on CentOS 7 you can
use the following steps:

1. Set firewall rules:

```
firewall-cmd --permanent --add-port=9200/tcp
firewall-cmd --permanent --add-port=9300/tcp
firewall-cmd —reload
```

2. Download Open Distro repo

```
sudo curl https://d3g5vo6xdbdb9a.cloudfront.net/yum/opendistroforelasticsearch-artifacts.repo -o /etc/yum.repos.d/opendistroforelasticsearch-artifacts.repo
```

3. Install Java 11 `sudo yum install java-11-openjdk-devel`

4. Install Open Distro

```
sudo yum install wget unzip
sudo yum list opendistroforelasticsearch --showduplicates
sudo yum install opendistroforelasticsearch-1.9.0
```

5. Change Elastic Search config `sudo vi /etc/elasticsearch/elasticsearch.yml`

```
cluster.name: AnnetteCluster7.8
node.name: \${HOSTNAME}
network.host: [ _ens192_, _local_ ]
bootstrap.memory_lock: true
discovery.seed_hosts: ["es-01, es-02, es-03"]
cluster.initial_master_nodes: ["es-01, es-02, es-03"]
```

6. Change ElasticSearch JVM options `sudo vi /etc/sysconfig/elasticsearch`

```
ES_JAVA_OPTS="-Xms10g -Xmx10g"
MAX_LOCKED_MEMORY=unlimited
```

7. Change ElasticSearch limits `sudo vi /etc/security/limits.conf`

```
elasticsearch soft memlock unlimited
elasticsearch hard memlock unlimited
```

8. Change `LimitMEMLOCK` in service file`sudo vi /usr/lib/systemd/system/elasticsearch.service`

```
LimitMEMLOCK=infinity
```

9. Restart ElasticSearch daemon

```
sudo systemctl daemon-reload
sudo systemctl start elasticsearch.service
sudo systemctl enable elasticsearch.service
```

10. Check Elastic Search

```
curl -XGET https://es-01:9200 -u admin:admin --insecure
curl -XGET "https://es-01:9200/_cat/nodes?v" -u admin:admin --insecure
curl -XGET "https://es-01:9200/_cat/plugins?v" -u admin:admin --insecure
```

11. Create admin password

```
cd /usr/share/elasticsearch/plugins/opendistro_security/tools
sudo sh hash.sh -p <secret password>
$2y$12\$C/543Qr4Y7Zy4Wsq5WvN9uw.WAbpvGghpiXvk9WexZgDfAGuG0OEC
```

12. Change admin password using result of previous
    command `sudo vi /usr/share/elasticsearch/plugins/opendistro_security/securityconfig/internal_users.yml`

13. Rebuild passwords database for Open Distro

```
sh securityadmin.sh -cd ../securityconfig/ -icl -nhnv -cacert /etc/elasticsearch/root-ca.pem -cert /etc/elasticsearch/kirk.pem -key /etc/elasticsearch/kirk-key.pem
```

### Minio

Minio is AWS S3 compatible object storage. Annette Platform uses Minio to store documents, images and other media
content.

For production installation
use [Distributed MinIO Quickstart Guide](https://docs.min.io/docs/distributed-minio-quickstart-guide.html)

### PostgreSQL

PostgreSQL is open source relation database management system. Annette Platform uses PostgreSQL for the following
services:

- Keycloak - open source Identity and Access Management System that provides user authentication using OpenID Connect
- Camunda - open source workflow and decision automation platform

Annette Platform requires PostgreSQL version 10 or higher.

For production installation use [PostgreSQL Download Page](https://www.postgresql.org/download/).

### Keycloak

Keycloak is open source Identity and Access Management System that provides user authentication using OpenID Connect.
Annette Platform requires Keycloak versions 12.0.1 - 16.1.1.

For production installation use [Getting Started Guide](https://www.keycloak.org/guides#getting-started).

## Configuration

### PostgreSQL databases configuration

You have to set up two databases:

* BPM Repository database
* Camunda database

#### BPM Repository database

To set up BPM Repository database perform the following steps:

1. Create user to access to database (replace <SECRET_PASSWORD> with password you want to use):

```sql
CREATE USER bpm_repository;
ALTER USER bpm_repository WITH ENCRYPTED password '<SECRET_PASSWORD>';
```

2. Create BPM Repository database (replace PREFIX_ with prefix you want to use):

```sql
CREATE DATABASE PREFIX_bpm_repository WITH ENCODING ='UTF8' OWNER = bpm_repository;
```

3. Execute [DDL script](https://github.com/annetteplatform/annette/blob/master/bpm/bpm-repository/sql/ddl.sql) to create
   table and indexes in database

#### Camunda database

To set up Camunda database perform the following steps:

1. Create user to access to database (replace <SECRET_PASSWORD> with password you want to use):

```sql
CREATE USER camunda;
ALTER USER camunda WITH ENCRYPTED password '<SECRET_PASSWORD>';
```

2. Create BPM Repository database (replace PREFIX_ with prefix you want to use):

```sql
CREATE DATABASE PREFIX_camunda WITH ENCODING ='UTF8' OWNER = camunda;
```

### Keycloak configuration

To configure Keycloak perform the following steps:

1. Create realm `AnnetteDemo`

![Create realm](./kc/kc01.png "Annette Demo")

2. Clear fields `X-Frame-Options` and `Content-Security-Policy` in `Security Defenses` tab

![](./kc/kc01a.png)

3. Create client `annette-console` with root URL to your application

![](./kc/kc02.png)
![](./kc/kc03.png)

4. (Optional) Remove unnecessary client scopes `roles` & `web-origins` to reduce size of JWT token

![](./kc/kc04.png)

5. Create mapper for person_id. This mapper will include user attribute person_id to JWT token attribute person_id. User
   attribute person_id links Keycloak user account to person in Annette Platform.

![](./kc/kc05.png)

6. Create new user. For Annette Demo create user Kristina Fisher with person_id P0001. This user has admin rights.

![](./kc/kc06.png)

7. Add user attribute person_id.

![](./kc/kc07.png)

8. Set password for new user

![](./kc/kc08.png)

## Kubernetes deployment

Annette Platform is intended to run Kubernetes environment. It has been tested on OKD (open source version of Red Hat
OpenShift, the well known Kubernetes distributive). To deploy in Kubernetes you have to prepare deployment scripts and
deploy them.

### Prepare deployment scripts

To prepare deployment scripts perform the following steps:

1. Prepare RBAC configuration (rbac.yml)
2. Prepare secrets settings (secret.sh)
3. Prepare config maps for Annette microservices and API gateway (config.yml)
4. Prepare backend and frontend deployment scripts (backend.yml & frontend.yml)
5. Prepare ingres (routes) settings (routes.yml)
6. Prepare ignition settings (demo-ignition.yml)

Templates of these scripts you can find in folder `deploy/k8s` of Annette Platform backend source code or in
GitHub [deploy/k8s](https://github.com/annetteplatform/annette/tree/master/deploy/k8s)

#### RBAC configuration (rbac.yml)

RBAC configuration provide rights to get, watch and list pods in Kubernetes namespace. It is required to service
discovery and to make Akka clusters.

To create RBAC configuration open template file `rbac.yml` and replace $K8S_NAMESPACE$ with Kubernetes namespace you
want to deploy Annette Platform in.

#### Secrets settings (secret.sh)

Secret settings are used to secure store logins and passwords to databases and services Annette Platform requires.

To create secret settings script open template file `rbac.yml` and replace `$...$` with their respective values.

There are the following secret settings:

* `elastic-secret` provides access to indexing service (Elastic Search or OpenDistro for Elastic Search)
* `cassandra-secret` provides access to Apache Cassandra database
* `play-secret` provides secret key for signing session cookies and CSRF tokens and built in encryption utilities (
  see [The Application Secret](https://www.playframework.com/documentation/2.8.x/ApplicationSecret))
* `minio-secret` provides access to Minio service
* `bpm-repository-secret` provides login & password to access PostgreSQL database for BPM repository microservice
* `camunda-client-secret` provides login & password to access Camunda BPM engine. These credentials should be set after
  deploy Camunda
* `camunda-secret` provides login & password to access PostgreSQL database for Camunda BPM engine

Replace `oc` with `kubectl` if you don't use OKD/OpenShift.

#### Config maps for Annette microservices and API gateway (config.yml)

Config maps are used to configure Annette Platform microservices and API gateways.

To create config maps open template file `config.yml` and set up environment variables with their respective values as
described below:

* `elastic-config` provides configuration to access Elastic Search:

    * INDEXING_URL - contains list of Elastic Search servers. For
      example, `https://es-01.domain.com,es-02.domain.com,es-03.domain.com`. Required.
    * INDEX_PREFIX - contains prefix for indexes created in Elastic Search. Don't forget to add a dash at the end. For
      example: `annette-`. Optional.
    * INDEXING_ALLOW_INSECURE - set true if you use sel signed certificate on your Elastic Search servers. Optional.

* `cassandra-config` provides configuration to access Apache Cassandra:

    * CASSANDRA_URL - contains list of Cassandra servers. For
      example, `cas-01.domain.com,cas-02.domain.com,cas-03.domain.com`. Required.
    * KEYSPACE_PREFIX - contains prefix for keyspaces created in Cassandra. Don't forget to add an underscore at the
      end. For example: `annette_`. Optional.
    * CASSANDRA_REPLICATION_FACTOR - replication factor used to create keyspaces. Optional.

* `cms-minio-config` provides configuration to access Minio object storage:

    * MINIO_URL - contains list of Cassandra servers. For example, `http://minio-01.domain.com:9000`. Required.
    * CMS_STORAGE_BUCKET_PREFIX - contains prefix for buckets created in Minio. Don't forget to add a dash at the end.
      For example: `annette-`. Optional.

* `bpm-repository-config` provides configuration to access PostgreSQL:

    * POSTGRES_SERVER - contains PostgreSQL server FDQN. For example, `pg-01.domain.com`. Required.
    * POSTGRES_PREFIX - contains prefix for database. Don't forget to add an underscore at the end. For
      example: `annette_`. Optional.

* `camunda-client-config` provides configuration to access Camunda BPM engine:

    * CAMUNDA_URL - contains camunda URL. For example, `http://camunda:8080/engine-rest/engine/default"`. Required,

* `camunda-config` provides configuration for Camunda BPM engine:

    * DB_DRIVER - contains database driver class. For example, `org.postgresql.Driver`. Required.
    * DB_URL - contains PostgreSQL URL for Camunda database. For
      example, `jdbc:postgresql://pg-01.domain.com:5432/annette_camunda`. Required.
    * WAIT_FOR - contains PostgreSQL server name and port. For example, `pg-01.domain.com:5432`. Required.

* `multi-instance-config` provides configuration for multi instance (clustered) microservice:
    * JAVA_OPTS - provide Java options that contain path to logback and application configuration files. Required. For
      example:
      ```
      -Dlogback.configurationFile=/opt/docker/conf/logback.k8s.xml-Dconfig.file=/opt/docker/conf/application.k8s.conf -Dlagom.circuit-breaker.default.enabled=off
      ``` 
    * REQUIRED_CONTACT_POINT_NR - number of microservice instances required to build cluster. Required.

* `single-instance-config` provides configuration for single instance microservice:
    * JAVA_OPTS- provide Java options that contain path to logback and application configuration files. Required. For
      example:
      ```
      -Dlogback.configurationFile=/opt/docker/conf/logback.k8s.xml -Dconfig.file=/opt/docker/conf/application.k8s.conf -Dlagom.circuit-breaker.default.enabled=off -Dlagom.cluster.bootstrap.enabled=false -Dakka.cluster.min-nr-of-members=1 -Dlagom.cluster.join-self=on
      ```
    * REQUIRED_CONTACT_POINT_NR - number of microservice instances required to build cluster. Required.

* `keycloak-config` provides Keycloak configuration for API gateway:
    * KEYCLOAK_REALM - name of Keycloak realm. For example: `AnnetteDemo`.
    * KEYCLOAK_URL - Keycloak URL. For example: `https://keycloak.domain.com/auth`.
    * KEYCLOAK_SSL_REQUIRED - indicator if SSL required for Keycloak. For example: `external`
    * KEYCLOAK_CLIENT - Keycloak client name. For example: `annette-console`
    * KEYCLOAK_PUBLIC_CLIENT indicator if client is public. For example: `true`

* `persons-k8s-config` provides example of configuration file for persons microservice that contains specific
  attributes.
    * application.k8s.conf - configuration file content.

#### Backend and frontend deployment scripts (backend.yml & frontend.yml)

Backend and frontend deployment scripts are used to deploy Annette Platform frontend, microservices and API gateways.

Usually you don't need to change files `backend.yml` & `frontend.yml`. But sometimes you can change image version or
metadata.

`frontend.yml` contains Kubernetes Deployment and Service for deployment Annette Platform frontend.

`backend.yml` contains Kubernetes Deployments and Services for deployment Annette Platform API gateway and
microservices:

* api-gateway - Annette Platform API gateway that is used authenticate and authorize incoming request and orchestrate
  microservices. It requires the following config maps and secrets:
    * multi-instance-config
    * keycloak-config
    * play-secret
    * cms-minio-config
    * minio-secret
    * camunda-client-config
    * camunda-client-secret

* application - application microservice that manage Annette applications, languages and translations. It requires the
  following config maps and secrets:
    * multi-instance-config
    * elastic-config
    * elastic-secret
    * cassandra-config
    * cassandra-secret
    * play-secret

* authorization - authorization microservice that control authorization roles and permission assignments to Annette
  principals. It requires the following config maps and secrets:
    * multi-instance-config
    * elastic-config
    * elastic-secret
    * cassandra-config
    * cassandra-secret
    * play-secret

* subscriptions - subscriptions microservice that allow users to subscribe to CMS blogs/spaces, etc. It requires the
  following config maps and secrets:
    * multi-instance-config
    * elastic-config
    * elastic-secret
    * cassandra-config
    * cassandra-secret
    * play-secret

* principal-groups - principal-groups microservice that stores groups of Annette Principals. It requires the following
  config maps and secrets:
    * multi-instance-config
    * elastic-config
    * elastic-secret
    * cassandra-config
    * cassandra-secret
    * play-secret

* persons - persons microservice that stores person's master data and their attributes. To configure person attributes
  specific application configuration file mounted using volumeMounts. It requires the following config maps and secrets:
    * multi-instance-config
    * elastic-config
    * elastic-secret
    * cassandra-config
    * cassandra-secret
    * play-secret
    * persons-k8s-config

* org-structure - org-structure microservice that stores and manage organizational structures and roles. To configure
  organizational unit and position attributes specific application configuration file mounted using volumeMounts. It
  requires the following config maps and secrets:
    * multi-instance-config
    * elastic-config
    * elastic-secret
    * cassandra-config
    * cassandra-secret
    * play-secret
    * org-structure-k8s-config

* cms - CMS microservice that manage CMS content: blogs, posts, spaces, pages, media content and documents. It requires
  the following config maps and secrets:
    * multi-instance-config
    * elastic-config
    * elastic-secret
    * cassandra-config
    * cassandra-secret
    * play-secret
    * cms-minio-config
    * minio-secret

* bpm-repository - BPM repository microservice that manage BPM models, data schemas and business processes. It requires
  the following config maps and secrets:
    * single-instance-config
    * bpm-repository-config
    * bpm-repository-secret
    * play-secret

* camunda - Camunda BPM engine microservice. It requires the following config maps and secrets:
    * camunda-config
    * camunda-secret

#### Routes settings (routes.yml)

An OKD routes exposes a service at a host name, such as annette-console.domain.com, so that external clients can reach
it by name.

To create routes open template file `routes.yml` and set up host names with their respective values as described below:

* annette-frontend links to Annette Platform frontend service (annette-frontend)
* annette-backend links to Annette Platform API gateway service (api-gateway)
* annette-camunda links to Camunda BPM engine service (camunda)

#### Ignition settings (demo-ignition.yml)

Template file `demo-ignition.yml` contains Kubernetes Job script that runs Annette Demo Ignition. Annette Demo Ignition
initializes the following data:

* authorization role and assignments
* person's master data and their attributes
* organizational structure

To prepare initialization Annette Platform according your requirements you need to perform the following steps:

1. Fork subproject `ignition/ignition-demo`
2. Change ignition configuration in `conf` folder according your requirements
3. Build docker image using command `sbt demo-ignition/docker:publishLocal`
4. Push image to your image repository
5. Change `demo-ignition.yml` to use your image

### Deployment

After deployment scripts preparation you can deploy Annette Platform to OKD/OpenShift by performing the following steps:

1. Create Kubernetes namespace (project)

```bash
oc new-project <project_name>
```

2. Set up RBAC

```bash
oc apply -f deploy/k8s/rbac.yml
```

3. Set up secrets settings

```bash
deploy/k8s/secret.sh
```

5. Set up config maps for Annette microservices and API gateway

```bash
oc apply -f deploy/k8s/config.yml
```

6. Deploy backend and frontend

```bash
oc apply -f deploy/k8s/backend.yml
oc apply -f deploy/k8s/frontend.yml
```

7. Set up routes

```bash
oc apply -f deploy/k8s/routes.yml
```

8. Setup Camunda login/password. You need open Camunda URL you defined in route `annette-camunda` and enter Camunda
   credentials you defined in secret `camunda-client-secret` in form appeared.

9. Perform initialization of Annette Platform by running ignition job

```bash
oc apply -f deploy/k8s/demo-ignition.yml
```
