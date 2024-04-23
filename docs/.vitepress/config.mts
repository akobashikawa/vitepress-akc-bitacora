import { defineConfig, createContentLoader } from 'vitepress';

import fs from "fs";
import path from "path";

import { withMermaid } from "vitepress-plugin-mermaid";

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
      { icon: 'github', link: 'https://github.com/akobashikawa/vitepress-akc-bitacora' }
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