---
title: "Git Bash: stdout is not a tty"
tags: ["git", "bash", "troubleshooting"]
date: 2023-03-28
---

# 20230328: Git Bash: stdout is not a tty

<TagsLinks />

- Obtuve este mensaje en la consola git bash, al intentar guardar la salida de un programa node a un archivo.

```sh
$ node mssql-get-reservas.js  > reservas.json
stdout is not a tty
```

- La solución consiste en indicar usar node.exe:

```sh
$ node.exe mssql-get-reservas.js  > reservas.json
```

- Referencias: [stdout is not a tty](https://stackoverflow.com/a/62532536)