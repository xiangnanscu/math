import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";
// import { generateSidebar } from "../sidebar"
import { version } from "../package.json";
import mathjax3 from "markdown-it-mathjax3";

// https://vitepress.dev/reference/site-config
// https://github.com/vuejs/vitepress/blob/main/docs/.vitepress/config/zh.ts
export default defineConfig({
  outDir: 'docs' ,
  base: process.env.GITHUB_ACTIONS ? "/math/" : "/",
  title: "数学手册",
  markdown: {
    math: true,
    config(md) {
      md.use(mathjax3, {
        tex: { tags: "ams" },

      });
    },
  },
  // description: "由 Vite 和 Vue 驱动的静态站点生成器",
  mpa: false,
  lang: "zh-Hans",
  cleanUrls: true,
  // locales: {
  //   root: {
  //     label: "English",
  //     lang: "en",
  //   },
  //   zh: { label: "简体中文", lang: "zh" },
  // },
  head: [
    [
      "script",
      {
        defer: "",
        src: "https://static.cloudflareinsights.com/beacon.min.js",
        "data-cf-beacon": '{"token": "2595614415824c6c86cb58b36566cd3d"}',
      },
    ],
  ],
  themeConfig: {
    footer: {
      message: `version ${version}`,
    },
    // logo: { src: "/vitepress-logo-mini.svg", width: 24, height: 24 },
    outline: {
      label: "页面导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    editLink: {
      pattern: "https://github.com/xiangnanscu/math/edit/master/:path",
      text: "编辑",
    },
    lastUpdated: {
      text: "更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: version, link: "" },
      // { text: "示例", link: "/markdown-examples" },
    ],
    // https://docsearch.algolia.com/docs/DocSearch-v3
    // https://dashboard.algolia.com/apps/DZOK7P9YI0/dashboard
    // search: {
    //   provider: "algolia",
    //   options: {
    //     appId: "DZOK7P9YI0",
    //     apiKey: "500e3bc4051eb3541f2fde622983568b",
    //     indexName: "数学手册",
    //   },
    // },
    search: {
      provider: process.env.NODE_ENV === 'production'?'local':'',
      // options: {
      //   detailedView: false,
      //   disableQueryPersistence: true,
      //   // _render: (src, env, md) => {
      //   //   console.log('Available fields:', src, env, md)
      //   //   return src
      //   // },
      //   miniSearch: {
      //     // https://lucaong.github.io/minisearch/types/MiniSearch.Options.html
      //     options: {
      //       // extractField: (document) => {
      //       //   return document.title
      //       // }
      //     },
      //     searchOptions: {
      //       fuzzy: false,
      //       // maxFuzzy:2,
      //       fields: ['title']
      //     },
      //   },
      // },
    },
    // socialLinks: [{ icon: "github", link: "https://github.com/xiangnanscu/math" }],
    sidebar: generateSidebar({
      /*
       * For detailed instructions, see the links below:
       * https://vitepress-sidebar.jooy2.com/guide/api
       */
      // titleCallback: (title)=>title,
      documentRootPath: "/",
      // scanStartPath: null, // will trigger ts error
      // resolvePath: null, // will trigger ts error
      // useTitleFromFileHeading: true,
      useTitleFromFrontmatter: true,
      frontmatterTitleFieldName: "title",
      useFolderTitleFromIndexFile: false,
      useFolderLinkFromIndexFile: false,
      hyphenToSpace: true,
      underscoreToSpace: true,
      capitalizeFirst: false,
      capitalizeEachWords: false,
      collapsed: true,
      collapseDepth: 1,
      sortMenusByName: false,
      sortMenusByFrontmatterOrder: false,
      sortMenusByFrontmatterDate: false,
      sortMenusOrderByDescending: false,
      sortMenusOrderNumericallyFromTitle: true,
      sortMenusOrderNumericallyFromLink: false,
      frontmatterOrderDefaultValue: 0,
      manualSortFileNameByPriority: ["first.md", "second", "third.md"],
      removePrefixAfterOrdering: false,
      prefixSeparator: ".",
      excludeFiles: ["first.md", "secret.md"],
      excludeFilesByFrontmatterFieldName: "exclude",
      excludeFolders: ["secret-folder"],
      includeDotFiles: false,
      includeRootIndexFile: false,
      includeFolderIndexFile: false,
      includeEmptyFolder: false,
      // rootGroupText: "目录",
      // rootGroupLink: "https://github.com/xiangnanscu",
      rootGroupCollapsed: false,
      convertSameNameSubFileToGroupIndexPage: false,
      folderLinkNotIncludesFileName: false,
      keepMarkdownSyntaxFromTitle: false,
      debugPrint: false,
    }),
  },
});
