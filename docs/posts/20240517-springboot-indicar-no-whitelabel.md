---
title: "Cómo indicar no usar Whitelabel en Spring Boot"
tags: ["java", "spring", "springboot", "howto"]
date: 2024-05-17T13:04:00-05:00
---

# Cómo indicar no usar Whitelabel en Spring Boot

<TagsLinks />

```mermaid
flowchart LR;

Properties --o SpringBootProyect --> Build --> Run
Params --o Build

```

- Por default, cuando ocurre algún error para abrir una página, se muestra la página Whitelabel.

![](20240517-SpringBoot-NoWhitelabel.png)

- Al correr el proyecto, se puede indicar que no se use:

```sh
mvn clean install

java -Dserver.error.whitelabel.enabled=false -jar target/hello-0.0.1.war
```

![](20240517-SpringBoot-NoWhitelabel-1.png)

- Alternativamente, se puede agregar la siguiente opción en `application.properties`:

```properties
server.error.whitelabel.enabled=false
```

- De ese modo, ya no es necesario indicar ese parámetro en el comando:

```sh
mvn clean install

java -jar target/hello-0.0.1.war
```

- Cuando ya no hay Whitelabel para mostrar los errores, estos se mostrarán en la consola.