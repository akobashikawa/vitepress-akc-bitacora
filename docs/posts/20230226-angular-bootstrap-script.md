---
date: 2023/02/26
title: Cómo usar el script de Bootstrap en Angular
tags: ["javascript", "angular", "bootstrap"]
---
Cómo usar el script de Bootstrap en Angular
-

# 20230226: Cómo usar el script de Bootstrap en Angular

<TagsLinks />

- Declarar el **script de bootstrap** en alguna parte. Por ejemplo en `index.html`
	- El script de bootstrap es el que viene por default. Por ejemplo [https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js](https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js)
- La clave es declarar la variable bootstrap en el componente donde se requiere usar el script.

```ts
//...
declare var bootstrap: any;
//...
ngOnInit() {
	this.myModal = new bootstrap.Modal('#myModal', { });
	//...
}
```