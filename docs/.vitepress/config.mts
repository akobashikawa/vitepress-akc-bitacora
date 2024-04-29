import { defineConfig, createContentLoader } from 'vitepress';

import fs from "fs";
import path from "path";

import { withMermaid } from "vitepress-plugin-mermaid";

const AKCStudioLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>54.Code</title><g id="_54.Code" data-name="54.Code"><path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Z"/><polygon points="9.293 16.707 4.586 12 9.293 7.293 10.707 8.707 7.414 12 10.707 15.293 9.293 16.707"/><polygon points="14.707 16.707 13.293 15.293 16.586 12 13.293 8.707 14.707 7.293 19.414 12 14.707 16.707"/></g></svg>`;

// https://vitepress.dev/reference/site-config
export default withMermaid({
  lang: 'es-ES',
  title: "AKC Bitácora",
  description: "Lo que aprendí hoy",
  lastUpdated: true,
  ignoreDeadLinks: true,

  transformHtml: (code, id, {pageData}) => {
    // console.log({code, id, pageData});
  },

  transformPageData: (pageData, { siteConfig }) => {
    // console.log(pageData);
    // console.log(siteConfig.pages);
    // const tags = pageData.frontmatter.tags || [];
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/assets/notes-svgrepo-com.svg',

    lastUpdated: {
      text: 'Última actualización',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },

    docFooter: {
      prev: 'Anterior',
      next: 'Siguiente'
    },

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'Acerca', link: '/about' },
    ],

    sidebar: [
      getSideBar('posts', 'Posts', true, true),
    ],

    outline: {
      label: 'En esta página'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/akobashikawa/vitepress-akc-bitacora' },
      { icon: { svg: AKCStudioLogo }, link: 'https://akcstudio.com/' }
    ]
  },

  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/favicons/apple-touch-icon.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/assets/favicons/site.webmanifest" }],
    ['link', { rel: "mask-icon", href: "/assets/favicons/safari-pinned-tab.svg", color: "#5bbad5" }],
    ['link', { rel: "shortcut icon", href: "/assets/favicons/favicon.ico" }],
    ['meta', { name: "msapplication-TileColor", content: "#5bbad5" }],
    ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml" }],
    ['meta', { name: "theme-color", content: "#ffffff" }],

    [
      'script',
      {
        async: 'true',
        src: 'https://www.googletagmanager.com/gtag/js?id=G-V13H3VTPBL',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-V13H3VTPBL');",
    ],
    [
      'script',
      {},
      "(function(h,o,t,j,a,r){ h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)}; h._hjSettings={hjid:3791609,hjsv:6}; a=o.getElementsByTagName('head')[0]; r=o.createElement('script');r.async=1; r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv; a.appendChild(r); })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');",
    ],
  ],

  vite: {
    plugins: [
      //...
    ],
  },

  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },
});

function getSideBar(folder, title, desc, collapsed) {
  const extension = [".md"];

  let files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      (item) =>
        item.toLowerCase() != "index.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    );

  if (desc) {
    files = files.reverse();
  }

  const items = files.map(item => {
    const text = item.slice(0, -3);
    const link = `/${folder}/${text}`;
    return { text, link };
  });

  const link = `/${folder}/`;

  return { text: title, link, collapsed, items};
}