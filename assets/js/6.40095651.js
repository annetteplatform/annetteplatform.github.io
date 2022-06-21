(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{323:function(t,e,a){t.exports=a.p+"assets/img/kc01.1b9c33d1.png"},324:function(t,e,a){t.exports=a.p+"assets/img/kc01a.f58cb142.png"},325:function(t,e,a){t.exports=a.p+"assets/img/kc02.737875d0.png"},326:function(t,e,a){t.exports=a.p+"assets/img/kc03.94bfa263.png"},327:function(t,e,a){t.exports=a.p+"assets/img/kc04.791e26b0.png"},328:function(t,e,a){t.exports=a.p+"assets/img/kc05.1f920a9e.png"},329:function(t,e,a){t.exports=a.p+"assets/img/kc06.5f857702.png"},330:function(t,e,a){t.exports=a.p+"assets/img/kc07.687aa180.png"},331:function(t,e,a){t.exports=a.p+"assets/img/kc08.d2f51dda.png"},487:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"development-installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#development-installation"}},[t._v("#")]),t._v(" Development installation")]),t._v(" "),s("p",[t._v("You can perform development installation of Annette Platform for development or evaluation purposes. DO NOT use\ndevelopment installation in production.")]),t._v(" "),s("p",[t._v("Before install Annette Platform and its prerequisites you have to install the following development tools:")]),t._v(" "),s("ol",[s("li",[t._v("Java Development Kit (JDK). JDK is used to build Annette Platform backend. It is recommended to use JDK 11 or 15. To\ninstall JDK use installation instructions on "),s("a",{attrs:{href:"https://www.oracle.com/java/technologies/downloads/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Oracle JDK"),s("OutboundLink")],1),t._v("\nor "),s("a",{attrs:{href:"https://jdk.java.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Open JDK"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("Scala Build Tool (SBT). SBT is used to build Scala applications. To install SBT use installation instructions\non "),s("a",{attrs:{href:"https://www.scala-sbt.org/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SBT website"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Node JS. Node JS is used to build Annette Platform frontend. It is recommended to use version 14.17.0. To install\nNode JS go "),s("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node JS website"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("Quasar Framework. Quasar Framework is framework to create nice web and mobile applications. To install use\ncommand "),s("code",[t._v("yarn global add @quasar/cli")]),t._v(" or "),s("code",[t._v("npm i -g @quasar/cli")]),t._v(".")]),t._v(" "),s("li",[t._v("Docker. To run Annette Platform prerequisites such as databases and identity management provider you need "),s("code",[t._v("docker")]),t._v(".\nTo install Docker visit "),s("a",{attrs:{href:"https://www.docker.com/get-started/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker website"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("p",[t._v("To run Annette Platform the following software should be installed:")]),t._v(" "),s("ul",[s("li",[t._v("Apache Cassandra - NoSQL database providing high available storage to persist data.")]),t._v(" "),s("li",[t._v("Elastic Search - full text search engine providing indexing of data stored in Cassandra")]),t._v(" "),s("li",[t._v("Minio - AWS S3 compatible object storage to store files.")]),t._v(" "),s("li",[t._v("PostgreSQL - relation database for Keycloak (identity provider) and Camunda (business process management system)")]),t._v(" "),s("li",[t._v("Keycloak - identity management provider to authenticate users.")])]),t._v(" "),s("p",[t._v("To install prerequisites in docker perform the following steps:")]),t._v(" "),s("ol",[s("li",[t._v("Clone "),s("a",{attrs:{href:"https://github.com/annetteplatform/annette",target:"_blank",rel:"noopener noreferrer"}},[t._v("Annette Platform repository"),s("OutboundLink")],1),t._v(" using\ncommand "),s("code",[t._v("git clone https://github.com/annetteplatform/annette.git")])]),t._v(" "),s("li",[t._v("Change directory to "),s("code",[t._v("annette/deploy/docker-local")]),t._v(" using command "),s("code",[t._v("cd annette/deploy/docker-local")]),t._v(".")]),t._v(" "),s("li",[t._v("Run deployment script "),s("code",[t._v("./deploy.sh")]),t._v(".")])]),t._v(" "),s("p",[t._v("After deployment the following applications will be available:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://localhost:3090",target:"_blank",rel:"noopener noreferrer"}},[t._v("Camunda"),s("OutboundLink")],1),t._v(". Login - camunda, password - camunda.")]),t._v(" "),s("li",[t._v("Apache Cassandra on port 9042. No authentication is required.")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://localhost:3080",target:"_blank",rel:"noopener noreferrer"}},[t._v("Keycloak"),s("OutboundLink")],1),t._v(". Login - admin, password - admin. It is requires configuration steps to be\nperformed (see below).")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://localhost:9002",target:"_blank",rel:"noopener noreferrer"}},[t._v("Minio"),s("OutboundLink")],1),t._v(" with default access-key-id - minioadmin and secret-access-key - minioadmin.")]),t._v(" "),s("li",[t._v("PostgreSQL on port 5432. The following databases are created:\n"),s("ul",[s("li",[s("code",[t._v("postgres")]),t._v(", login - "),s("code",[t._v("postgres")]),t._v(", password - "),s("code",[t._v("password")])]),t._v(" "),s("li",[s("code",[t._v("keycloak")]),t._v(", login - "),s("code",[t._v("keycloak")]),t._v(", password - "),s("code",[t._v("keycloak")])]),t._v(" "),s("li",[s("code",[t._v("camunda")]),t._v(", login - "),s("code",[t._v("camunda")]),t._v(", password - "),s("code",[t._v("camunda")])]),t._v(" "),s("li",[s("code",[t._v("dev_bpm_repository")]),t._v(", login - "),s("code",[t._v("bpm_repository")]),t._v(", password - "),s("code",[t._v("bpm_repository")])])])]),t._v(" "),s("li",[t._v("Open Distro for Elastic Search on port 9200. Login - admin, password - admin.")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://localhost:5601",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kibana"),s("OutboundLink")],1),t._v(". Login - admin, password - admin.")])]),t._v(" "),s("h2",{attrs:{id:"keycloak-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keycloak-configuration"}},[t._v("#")]),t._v(" Keycloak Configuration")]),t._v(" "),s("p",[t._v("To configure Keycloak perform the following steps:")]),t._v(" "),s("ol",[s("li",[t._v("Create realm "),s("code",[t._v("AnnetteDemo")])])]),t._v(" "),s("p",[s("img",{attrs:{src:a(323),alt:"Create realm",title:"Annette Demo"}})]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Clear fields "),s("code",[t._v("X-Frame-Options")]),t._v(" and "),s("code",[t._v("Content-Security-Policy")]),t._v(" in "),s("code",[t._v("Security Defenses")]),t._v(" tab")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(324),alt:""}})]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Create client "),s("code",[t._v("annette-console")]),t._v(" with root URL to your application")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(325),alt:""}}),t._v(" "),s("img",{attrs:{src:a(326),alt:""}})]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("(Optional) Remove unnecessary client scopes "),s("code",[t._v("roles")]),t._v(" & "),s("code",[t._v("web-origins")]),t._v(" to reduce size of JWT token")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(327),alt:""}})]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("Create mapper for person_id. This mapper will include user attribute person_id to JWT token attribute person_id. User\nattribute person_id links Keycloak user account to person in Annette Platform.")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(328),alt:""}})]),t._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[t._v("Create new user. For Annette Demo create user Kristina Fisher with person_id P0001. This user has admin rights.")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(329),alt:""}})]),t._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[t._v("Add user attribute person_id.")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(330),alt:""}})]),t._v(" "),s("ol",{attrs:{start:"8"}},[s("li",[t._v("Set password for new user")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(331),alt:""}})]),t._v(" "),s("h2",{attrs:{id:"start-backend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-backend"}},[t._v("#")]),t._v(" Start backend")]),t._v(" "),s("p",[t._v("To run Anette Platform backend perform the following steps:")]),t._v(" "),s("ol",[s("li",[t._v("Clone "),s("a",{attrs:{href:"https://github.com/annetteplatform/annette",target:"_blank",rel:"noopener noreferrer"}},[t._v("Annette Platform repository"),s("OutboundLink")],1),t._v(" using\ncommand "),s("code",[t._v("git clone https://github.com/annetteplatform/annette.git")])]),t._v(" "),s("li",[t._v("Change directory to "),s("code",[t._v("annette")]),t._v(" using command "),s("code",[t._v("cd annette")]),t._v(".")]),t._v(" "),s("li",[t._v("Build source code using command "),s("code",[t._v("sbt compile")]),t._v(".")]),t._v(" "),s("li",[t._v("Run Annette Platform backend using the following script:")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env bash")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("INDEX_PREFIX")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dev-"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("INDEXING_ALLOW_INSECURE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("KEYSPACE_PREFIX")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dev_"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("POSTGRES_PREFIX")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dev_"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CMS_STORAGE_BUCKET_PREFIX")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dev-"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MINIO_PREFIX")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dev_"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("KEYCLOAK_CLIENT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"annette-console"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("KEYCLOAK_REALM")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AnnetteDemo"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("KEYCLOAK_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:3080/auth"')]),t._v("\nsbt -Dsbt.supershell"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false -Dconfig.resource"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"application.dev.conf"')]),t._v(" runAll\n")])])]),s("p",[t._v("After that Annette Platform backend will be available at "),s("code",[t._v("localhost:9000")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"start-frontend"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-frontend"}},[t._v("#")]),t._v(" Start frontend")]),t._v(" "),s("p",[t._v("To run Anette Platform frontend perform the following steps:")]),t._v(" "),s("ol",[s("li",[t._v("Clone "),s("a",{attrs:{href:"https://github.com/annetteplatform/annette-front",target:"_blank",rel:"noopener noreferrer"}},[t._v("Annette Platform Frontend repository"),s("OutboundLink")],1),t._v(" using\ncommand "),s("code",[t._v("git clone https://github.com/annetteplatform/annette-front.git")])]),t._v(" "),s("li",[t._v("Change directory to "),s("code",[t._v("annette-front")]),t._v(" using command "),s("code",[t._v("cd annette-front")]),t._v(".")]),t._v(" "),s("li",[t._v("Install frontend dependencies using command "),s("code",[t._v("yarn install")]),t._v(" or "),s("code",[t._v("npm install")]),t._v(".")]),t._v(" "),s("li",[t._v("Run Annette Platform frontend using the following script:")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env bash")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("KEYCLOAK_CONFIG")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("realm"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("AnnetteDemo"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("url"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("http://localhost:3080/auth/"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("clientId"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("annette-console"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("API_TARGET")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://localhost:9000/\nquasar dev\n")])])]),s("p",[t._v("After that Annette Platform frontend will be available at "),s("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("localhost:8080"),s("OutboundLink")],1),t._v(" For authentication use\nlogin "),s("code",[t._v("kristina.fisher")]),t._v(" and password you set on step 8 during Keycloak configuration.")])])}),[],!1,null,null,null);e.default=n.exports}}]);