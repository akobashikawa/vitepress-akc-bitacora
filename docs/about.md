<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/akobashikawa.png',
    name: 'Antonio Kobashikawa',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/akobashikawa' },
      { icon: 'twitter', link: 'https://twitter.com/rulokoba' }
    ]
  },
]
</script>

# Acerca de este sitio

## Gente

<VPTeamMembers size="small" :members="members" />

- **Antonio Kobashikawa Carrasco (Rulo)**
  - Desarrollo web: Frontend, Backend, Devops.
  - AKC Studio es como mi digital garden.

## Qué se usa

### Frontend

- [VitePress](https://vitepress.dev/)
  - Framework de documentación, basado en Vue.
- [Vue.js - The Progressive JavaScript Framework | Vue.js](https://vuejs.org/)
  - Framework general para javascript en el frontend.

### Devops

- [GitHub](https://github.com/)
  - Hosting de repositorios git. Aloja a [vitepress-akc-bitacora](https://github.com/akobashikawa/vitepress-akc-bitacora)
- [Scale & Ship Faster with a Composable Web Architecture | Netlify](https://www.netlify.com/)
  - Hosting del site estático
- [Visual Studio Code](https://code.visualstudio.com/)
  - IDE para desarrollar html, css, js, java, etc

## Recursos gráficos

- [Notes Vector SVG Icon (4) - SVG Repo](https://www.svgrepo.com/svg/14796/notes)
[Favicon Generator for perfect icons on all browsers](https://realfavicongenerator.net/)