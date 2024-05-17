---
date: 2024-05-17T12:29:00-05:00
title: "Cómo crear un proyecto Spring Boot"
tags: ["java", "spring", "springboot", "howto"]
---

# Cómo crear un proyecto Spring Boot

<TagsLinks />

```mermaid
flowchart LR;

SpringInitializr --> SpringBootProyect --> Build --> Run

```

- Se puede usar el formulario Spring Initializr:
	- [Spring Initializr](https://start.spring.io/) Spring Boot
	- [Spring Initializr](https://start200.spring.io/) Spring Boot 2
- Allí se puede elegir por ejemplo que se usará
	- Project: Maven
	- Language: Java
	- Spring Boot: 3.2.5
	- Dependencies
		- Spring Boot DevTools
		- Spring Web
		- Thymeleaf
	- Metadata
		- Group: com.akcstudio
		- Artifact: hello
		- Name: hello
		- Description: Hello Java Maven
		- Package name: com.akcstudio.hello
		- Packaging: war
		- Java: 17
- Un botón permite descargar un zip con el scaffold para empezar.

## Build y ejecución

```sh
mvn clean install

java -jar target/hello-0.0.1.war
```

- http://localhost:8080