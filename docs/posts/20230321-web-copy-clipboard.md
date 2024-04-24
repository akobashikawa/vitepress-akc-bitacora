---
tags: ["javascript"]
date: 2023-03-21
---

# 20230321: Copy to Cipboard para web

<TagsLinks />

- Para enviar al clipboard un texto seleccionado en el navegador

```js
try {
  //...
  await navigator.clipboard.writeText(text);
  //...
} catch (err) {
  //...
}
```