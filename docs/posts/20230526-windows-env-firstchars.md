---
title: "Cómo obtener los primeros n caracteres de una variable de entorno en Windows"
tags: ["windows", "console", "tips", "howto"]
date: 2023-05-26
---

# 20230526: Cómo obtener los primeros n caracteres de una variable de entorno en Windows

<TagsLinks />

- Empleando el sufijo `:~0,n`
- Ejemplos:
	- Cambiarse al drive correspondiente a JENKINS_HOME:
		- `if exist %JENKINS_HOME% %JENKINS_HOME:~0,2%`
	- Copiar el archivo:
		- `if exist %JENKINS_HOME%\workspace\myproject\target\MyProject-0.0.1-SNAPSHOT.war copy %JENKINS_HOME%\workspace\myproject\target\MyProject-0.0.1-SNAPSHOT.war`
- Referencia: [Extract first character from a string](https://stackoverflow.com/a/36874146)