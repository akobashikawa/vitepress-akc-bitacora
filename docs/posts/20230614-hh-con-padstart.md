---
title: "Cómo mostrar una hora con dos dígitos en javascript"
tags: ["javascript", "howto"]
date: 2023-06-14
---

# 20230614: Cómo mostrar una hora con dos dígitos usando padStart

<TagsLinks />

`padStart(n, c)`
	Permite anteceder una cadena del caracter c especificado hasta completar la longitud n especificada

```js
const now = new Date();
const hours = now.getHours();
const hh = hours.toString().padStart(2, '0')
```

## Referencia

- [String.prototype.padStart() - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)