---
date: 2024-04-24
title: "Usando un icono propio en socialLink"
tags: ["vitepress"]
---

# Usando un icono propio en socialLink

<TagsLinks />

- En `docs/.vitepress/config.mts`

```js
socialLinks: [
    { icon: 'github', link: 'https://github.com/akobashikawa/vitepress-akc-bitacora' },
]
```

- Hay iconos predefinidos: 
    - 'discord',
    - 'facebook',
    - 'github',
    - 'instagram',
    - 'linkedin',
    - 'mastodon',
    - 'npm',
    - 'slack',
    - 'twitter',
    - 'x',
    - 'youtube'

- Deseo agregar un link con un icono propio.

```js
const AKCStudioLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>54.Code</title><g id="_54.Code" data-name="54.Code"><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Z"/><polygon points="9.293 16.707 4.586 12 9.293 7.293 10.707 8.707 7.414 12 10.707 15.293 9.293 16.707"/><polygon points="14.707 16.707 13.293 15.293 16.586 12 13.293 8.707 14.707 7.293 19.414 12 14.707 16.707"/></g></svg>`;
//...
socialLinks: [
    { icon: 'github', link: 'https://github.com/akobashikawa/vitepress-akc-bitacora' },
    { icon: { svg: AKCStudioLogo }, link: 'https://akcstudio.com/' }
]
```

## Referencias

- [Default Theme Config | VitePress](https://vitepress.dev/reference/default-theme-config#sociallinks)