---
title: "Cómo indicar el port para Spring Boot"
tags: ["java", "spring", "springboot", "howto"]
date: 2024-05-17T12:53:00-05:00
---

# Cómo indicar el port para Spring Boot

<TagsLinks />

```mermaid
flowchart LR;

Properties --o SpringBootProyect --> Build --> Run
Params --o Build

```

- Por default, port = 8080. Pero se puede indicar otro al correr el proyecto.

```sh
mvn clean install
java -Dserver.port=9090 -jar target/hello-0.0.1.war
```

- Alternativamente, se puede agregar la siguiente opción en `application.properties`:

```properties
server.port=9090
```

- De ese modo, ya no es necesario indicar ese parámetro en el comando:

```sh
mvn clean install

java -jar target/hello-0.0.1.war

```

- http://localhost:9090