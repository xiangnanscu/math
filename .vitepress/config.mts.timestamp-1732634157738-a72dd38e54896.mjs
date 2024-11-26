// .vitepress/config.mts
import { defineConfig } from "file:///root/math/node_modules/vitepress/dist/node/index.js";
import { generateSidebar } from "file:///root/math/node_modules/.store/vitepress-sidebar@1.29.0/node_modules/vitepress-sidebar/dist/index.js";

// package.json
var version = "1.5.0";

// .vitepress/config.mts
import mathjax3 from "file:///root/math/node_modules/.store/markdown-it-mathjax3@4.3.2/node_modules/markdown-it-mathjax3/index.js";
var config_default = defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/math/" : "/",
  title: "\u6570\u5B66\u624B\u518C",
  markdown: {
    math: true,
    config(md) {
      md.use(mathjax3, {
        tex: { tags: "ams" }
      });
    }
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
        "data-cf-beacon": '{"token": "2595614415824c6c86cb58b36566cd3d"}'
      }
    ]
  ],
  themeConfig: {
    footer: {
      message: `version ${version}`
    },
    // logo: { src: "/vitepress-logo-mini.svg", width: 24, height: 24 },
    outline: {
      label: "\u9875\u9762\u5BFC\u822A"
    },
    docFooter: {
      prev: "\u4E0A\u4E00\u9875",
      next: "\u4E0B\u4E00\u9875"
    },
    editLink: {
      pattern: "https://github.com/xiangnanscu/math/edit/master/:path",
      text: "\u7F16\u8F91"
    },
    lastUpdated: {
      text: "\u66F4\u65B0\u4E8E",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short"
      }
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
      ...process.env.NODE_ENV === "production" ? { provider: "local" } : {}
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
      debugPrint: false
    })
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubXRzIiwgInBhY2thZ2UuanNvbiJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9yb290L21hdGgvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Jvb3QvbWF0aC8udml0ZXByZXNzL2NvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3Jvb3QvbWF0aC8udml0ZXByZXNzL2NvbmZpZy5tdHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZXByZXNzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZVNpZGViYXIgfSBmcm9tIFwidml0ZXByZXNzLXNpZGViYXJcIjtcbi8vIGltcG9ydCB7IGdlbmVyYXRlU2lkZWJhciB9IGZyb20gXCIuLi9zaWRlYmFyXCJcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tIFwiLi4vcGFja2FnZS5qc29uXCI7XG5pbXBvcnQgbWF0aGpheDMgZnJvbSBcIm1hcmtkb3duLWl0LW1hdGhqYXgzXCI7XG5cbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92aXRlcHJlc3MvYmxvYi9tYWluL2RvY3MvLnZpdGVwcmVzcy9jb25maWcvemgudHNcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGJhc2U6IHByb2Nlc3MuZW52LkdJVEhVQl9BQ1RJT05TID8gXCIvbWF0aC9cIiA6IFwiL1wiLFxuICB0aXRsZTogXCJcdTY1NzBcdTVCNjZcdTYyNEJcdTUxOENcIixcbiAgbWFya2Rvd246IHtcbiAgICBtYXRoOiB0cnVlLFxuICAgIGNvbmZpZyhtZCkge1xuICAgICAgbWQudXNlKG1hdGhqYXgzLCB7XG4gICAgICAgIHRleDogeyB0YWdzOiBcImFtc1wiIH0sXG5cbiAgICAgIH0pO1xuICAgIH0sXG4gIH0sXG4gIC8vIGRlc2NyaXB0aW9uOiBcIlx1NzUzMSBWaXRlIFx1NTQ4QyBWdWUgXHU5QTcxXHU1MkE4XHU3Njg0XHU5NzU5XHU2MDAxXHU3QUQ5XHU3MEI5XHU3NTFGXHU2MjEwXHU1NjY4XCIsXG4gIG1wYTogZmFsc2UsXG4gIGxhbmc6IFwiemgtSGFuc1wiLFxuICBjbGVhblVybHM6IHRydWUsXG4gIC8vIGxvY2FsZXM6IHtcbiAgLy8gICByb290OiB7XG4gIC8vICAgICBsYWJlbDogXCJFbmdsaXNoXCIsXG4gIC8vICAgICBsYW5nOiBcImVuXCIsXG4gIC8vICAgfSxcbiAgLy8gICB6aDogeyBsYWJlbDogXCJcdTdCODBcdTRGNTNcdTRFMkRcdTY1ODdcIiwgbGFuZzogXCJ6aFwiIH0sXG4gIC8vIH0sXG4gIGhlYWQ6IFtcbiAgICBbXG4gICAgICBcInNjcmlwdFwiLFxuICAgICAge1xuICAgICAgICBkZWZlcjogXCJcIixcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vc3RhdGljLmNsb3VkZmxhcmVpbnNpZ2h0cy5jb20vYmVhY29uLm1pbi5qc1wiLFxuICAgICAgICBcImRhdGEtY2YtYmVhY29uXCI6ICd7XCJ0b2tlblwiOiBcIjI1OTU2MTQ0MTU4MjRjNmM4NmNiNThiMzY1NjZjZDNkXCJ9JyxcbiAgICAgIH0sXG4gICAgXSxcbiAgXSxcbiAgdGhlbWVDb25maWc6IHtcbiAgICBmb290ZXI6IHtcbiAgICAgIG1lc3NhZ2U6IGB2ZXJzaW9uICR7dmVyc2lvbn1gLFxuICAgIH0sXG4gICAgLy8gbG9nbzogeyBzcmM6IFwiL3ZpdGVwcmVzcy1sb2dvLW1pbmkuc3ZnXCIsIHdpZHRoOiAyNCwgaGVpZ2h0OiAyNCB9LFxuICAgIG91dGxpbmU6IHtcbiAgICAgIGxhYmVsOiBcIlx1OTg3NVx1OTc2Mlx1NUJGQ1x1ODIyQVwiLFxuICAgIH0sXG4gICAgZG9jRm9vdGVyOiB7XG4gICAgICBwcmV2OiBcIlx1NEUwQVx1NEUwMFx1OTg3NVwiLFxuICAgICAgbmV4dDogXCJcdTRFMEJcdTRFMDBcdTk4NzVcIixcbiAgICB9LFxuICAgIGVkaXRMaW5rOiB7XG4gICAgICBwYXR0ZXJuOiBcImh0dHBzOi8vZ2l0aHViLmNvbS94aWFuZ25hbnNjdS9tYXRoL2VkaXQvbWFzdGVyLzpwYXRoXCIsXG4gICAgICB0ZXh0OiBcIlx1N0YxNlx1OEY5MVwiLFxuICAgIH0sXG4gICAgbGFzdFVwZGF0ZWQ6IHtcbiAgICAgIHRleHQ6IFwiXHU2NkY0XHU2NUIwXHU0RThFXCIsXG4gICAgICBmb3JtYXRPcHRpb25zOiB7XG4gICAgICAgIGRhdGVTdHlsZTogXCJzaG9ydFwiLFxuICAgICAgICB0aW1lU3R5bGU6IFwic2hvcnRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXG4gICAgbmF2OiBbXG4gICAgICAvLyB7IHRleHQ6IHZlcnNpb24sIGxpbms6IFwiXCIgfSxcbiAgICAgIC8vIHsgdGV4dDogXCJcdTc5M0FcdTRGOEJcIiwgbGluazogXCIvbWFya2Rvd24tZXhhbXBsZXNcIiB9LFxuICAgIF0sXG4gICAgLy8gaHR0cHM6Ly9kb2NzZWFyY2guYWxnb2xpYS5jb20vZG9jcy9Eb2NTZWFyY2gtdjNcbiAgICAvLyBodHRwczovL2Rhc2hib2FyZC5hbGdvbGlhLmNvbS9hcHBzL0RaT0s3UDlZSTAvZGFzaGJvYXJkXG4gICAgLy8gc2VhcmNoOiB7XG4gICAgLy8gICBwcm92aWRlcjogXCJhbGdvbGlhXCIsXG4gICAgLy8gICBvcHRpb25zOiB7XG4gICAgLy8gICAgIGFwcElkOiBcIkRaT0s3UDlZSTBcIixcbiAgICAvLyAgICAgYXBpS2V5OiBcIjUwMGUzYmM0MDUxZWIzNTQxZjJmZGU2MjI5ODM1NjhiXCIsXG4gICAgLy8gICAgIGluZGV4TmFtZTogXCJcdTY1NzBcdTVCNjZcdTYyNEJcdTUxOENcIixcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgICBzZWFyY2g6IHtcbiAgICAgIC4uLihwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8ge3Byb3ZpZGVyOiAnbG9jYWwnfSA6IHt9KSxcbiAgICB9LFxuICAgIC8vIHNvY2lhbExpbmtzOiBbeyBpY29uOiBcImdpdGh1YlwiLCBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS94aWFuZ25hbnNjdS9tYXRoXCIgfV0sXG4gICAgc2lkZWJhcjogZ2VuZXJhdGVTaWRlYmFyKHtcbiAgICAgIC8qXG4gICAgICAgKiBGb3IgZGV0YWlsZWQgaW5zdHJ1Y3Rpb25zLCBzZWUgdGhlIGxpbmtzIGJlbG93OlxuICAgICAgICogaHR0cHM6Ly92aXRlcHJlc3Mtc2lkZWJhci5qb295Mi5jb20vZ3VpZGUvYXBpXG4gICAgICAgKi9cbiAgICAgIC8vIHRpdGxlQ2FsbGJhY2s6ICh0aXRsZSk9PnRpdGxlLFxuICAgICAgZG9jdW1lbnRSb290UGF0aDogXCIvXCIsXG4gICAgICAvLyBzY2FuU3RhcnRQYXRoOiBudWxsLCAvLyB3aWxsIHRyaWdnZXIgdHMgZXJyb3JcbiAgICAgIC8vIHJlc29sdmVQYXRoOiBudWxsLCAvLyB3aWxsIHRyaWdnZXIgdHMgZXJyb3JcbiAgICAgIC8vIHVzZVRpdGxlRnJvbUZpbGVIZWFkaW5nOiB0cnVlLFxuICAgICAgdXNlVGl0bGVGcm9tRnJvbnRtYXR0ZXI6IHRydWUsXG4gICAgICBmcm9udG1hdHRlclRpdGxlRmllbGROYW1lOiBcInRpdGxlXCIsXG4gICAgICB1c2VGb2xkZXJUaXRsZUZyb21JbmRleEZpbGU6IGZhbHNlLFxuICAgICAgdXNlRm9sZGVyTGlua0Zyb21JbmRleEZpbGU6IGZhbHNlLFxuICAgICAgaHlwaGVuVG9TcGFjZTogdHJ1ZSxcbiAgICAgIHVuZGVyc2NvcmVUb1NwYWNlOiB0cnVlLFxuICAgICAgY2FwaXRhbGl6ZUZpcnN0OiBmYWxzZSxcbiAgICAgIGNhcGl0YWxpemVFYWNoV29yZHM6IGZhbHNlLFxuICAgICAgY29sbGFwc2VkOiB0cnVlLFxuICAgICAgY29sbGFwc2VEZXB0aDogMSxcbiAgICAgIHNvcnRNZW51c0J5TmFtZTogZmFsc2UsXG4gICAgICBzb3J0TWVudXNCeUZyb250bWF0dGVyT3JkZXI6IGZhbHNlLFxuICAgICAgc29ydE1lbnVzQnlGcm9udG1hdHRlckRhdGU6IGZhbHNlLFxuICAgICAgc29ydE1lbnVzT3JkZXJCeURlc2NlbmRpbmc6IGZhbHNlLFxuICAgICAgc29ydE1lbnVzT3JkZXJOdW1lcmljYWxseUZyb21UaXRsZTogdHJ1ZSxcbiAgICAgIHNvcnRNZW51c09yZGVyTnVtZXJpY2FsbHlGcm9tTGluazogZmFsc2UsXG4gICAgICBmcm9udG1hdHRlck9yZGVyRGVmYXVsdFZhbHVlOiAwLFxuICAgICAgbWFudWFsU29ydEZpbGVOYW1lQnlQcmlvcml0eTogW1wiZmlyc3QubWRcIiwgXCJzZWNvbmRcIiwgXCJ0aGlyZC5tZFwiXSxcbiAgICAgIHJlbW92ZVByZWZpeEFmdGVyT3JkZXJpbmc6IGZhbHNlLFxuICAgICAgcHJlZml4U2VwYXJhdG9yOiBcIi5cIixcbiAgICAgIGV4Y2x1ZGVGaWxlczogW1wiZmlyc3QubWRcIiwgXCJzZWNyZXQubWRcIl0sXG4gICAgICBleGNsdWRlRmlsZXNCeUZyb250bWF0dGVyRmllbGROYW1lOiBcImV4Y2x1ZGVcIixcbiAgICAgIGV4Y2x1ZGVGb2xkZXJzOiBbXCJzZWNyZXQtZm9sZGVyXCJdLFxuICAgICAgaW5jbHVkZURvdEZpbGVzOiBmYWxzZSxcbiAgICAgIGluY2x1ZGVSb290SW5kZXhGaWxlOiBmYWxzZSxcbiAgICAgIGluY2x1ZGVGb2xkZXJJbmRleEZpbGU6IGZhbHNlLFxuICAgICAgaW5jbHVkZUVtcHR5Rm9sZGVyOiBmYWxzZSxcbiAgICAgIC8vIHJvb3RHcm91cFRleHQ6IFwiXHU3NkVFXHU1RjU1XCIsXG4gICAgICAvLyByb290R3JvdXBMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS94aWFuZ25hbnNjdVwiLFxuICAgICAgcm9vdEdyb3VwQ29sbGFwc2VkOiBmYWxzZSxcbiAgICAgIGNvbnZlcnRTYW1lTmFtZVN1YkZpbGVUb0dyb3VwSW5kZXhQYWdlOiBmYWxzZSxcbiAgICAgIGZvbGRlckxpbmtOb3RJbmNsdWRlc0ZpbGVOYW1lOiBmYWxzZSxcbiAgICAgIGtlZXBNYXJrZG93blN5bnRheEZyb21UaXRsZTogZmFsc2UsXG4gICAgICBkZWJ1Z1ByaW50OiBmYWxzZSxcbiAgICB9KSxcbiAgfSxcbn0pO1xuIiwgIntcbiAgXCJ2ZXJzaW9uXCI6IFwiMS41LjBcIixcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiZ2xvYlwiOiBcIl4xMS4wLjBcIixcbiAgICBcImdyYXktbWF0dGVyXCI6IFwiXjQuMC4zXCIsXG4gICAgXCJtYXJrZG93bi1pdC1tYXRoamF4M1wiOiBcIl40LjMuMlwiLFxuICAgIFwidml0ZXByZXNzXCI6IFwiXjEuNS4wXCIsXG4gICAgXCJ2aXRlcHJlc3Mtc2lkZWJhclwiOiBcIl4xLjI5LjBcIlxuICB9LFxuICBcInNjcmlwdHNcIjoge1xuICAgIFwicHJlYlwiOiBcIm5wbSAtLW5vLWdpdC10YWctdmVyc2lvbiB2ZXJzaW9uIG1pbm9yXCIsXG4gICAgXCJiXCI6IFwibnBtIHJ1biBwdXNoXCIsXG4gICAgXCJjb21taXRcIjogXCJnaXQgYWRkIC4gJiYgZ2l0IGNvbW1pdCAtYW0gXCIsXG4gICAgXCJjXCI6IFwibnBtIHJ1biBjb21taXRcIixcbiAgICBcImdcIjogXCJucG0gcnVuIGNvbW1pdFwiLFxuICAgIFwicG9zdGdcIjogXCJucG0gcnVuIHBvc3RwdXNoXCIsXG4gICAgXCJwdXNoXCI6IFwibnBtIHJ1biBjb21taXRcIixcbiAgICBcIl9wdXNoXCI6IFwiZ2l0IHB1c2ggb3JpZ2luXCIsXG4gICAgXCJfcHVsbFwiOiBcImdpdCBwdWxsIG9yaWdpblwiLFxuICAgIFwicG9zdHB1c2hcIjogXCJ1bmFtZSAtcyB8IGdyZXAgLXEgRGFyd2luICYmIG5wbSBydW4gX3B1c2ggfHwgd2hpbGUgdHJ1ZTsgZG8gdGltZW91dCAxNSBucG0gcnVuIF9wdXNoICYmIGJyZWFrOyBkb25lXCIsXG4gICAgXCJwdWxsXCI6IFwidW5hbWUgLXMgfCBncmVwIC1xIERhcndpbiAmJiBucG0gcnVuIF9wdWxsIHx8IHdoaWxlIHRydWU7IGRvIHRpbWVvdXQgMTUgbnBtIHJ1biBfcHVsbCAmJiBicmVhazsgZG9uZVwiLFxuICAgIFwic3BsaXRcIjogXCJub2RlIHNwbGl0Lm1qc1wiLFxuICAgIFwicG9zdHNwbGl0XCI6IFwicHl0aG9uIGRpZmYucHlcIixcbiAgICBcImRpZmZcIjogXCJweXRob24gZGlmZi5weVwiLFxuICAgIFwiZGV2XCI6IFwidml0ZXByZXNzIGRldiAuXCIsXG4gICAgXCJidWlsZFwiOiBcIm5wbSBydW4gZG9jczpidWlsZFwiLFxuICAgIFwicHJldmlld1wiOiBcInZpdGVwcmVzcyBwcmV2aWV3IC5cIixcbiAgICBcImRvY3M6ZGV2XCI6IFwidml0ZXByZXNzIGRldiAuXCIsXG4gICAgXCJkb2NzOmJ1aWxkXCI6IFwiTk9ERV9PUFRJT05TPSctLW1heC1vbGQtc3BhY2Utc2l6ZT0zMDcyMDAnIHZpdGVwcmVzcyBidWlsZCAuXCIsXG4gICAgXCJkb2NzOnByZXZpZXdcIjogXCJ2aXRlcHJlc3MgcHJldmlldyAuXCJcbiAgfSxcbiAgXCJkZXBlbmRlbmNpZXNcIjoge1xuICAgIFwidnVlXCI6IFwiXjMuNS4xM1wiXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeU8sU0FBUyxvQkFBb0I7QUFDdFEsU0FBUyx1QkFBdUI7OztBQ0E5QixjQUFXOzs7QURHYixPQUFPLGNBQWM7QUFJckIsSUFBTyxpQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTSxRQUFRLElBQUksaUJBQWlCLFdBQVc7QUFBQSxFQUM5QyxPQUFPO0FBQUEsRUFDUCxVQUFVO0FBQUEsSUFDUixNQUFNO0FBQUEsSUFDTixPQUFPLElBQUk7QUFDVCxTQUFHLElBQUksVUFBVTtBQUFBLFFBQ2YsS0FBSyxFQUFFLE1BQU0sTUFBTTtBQUFBLE1BRXJCLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxLQUFLO0FBQUEsRUFDTCxNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFYLE1BQU07QUFBQSxJQUNKO0FBQUEsTUFDRTtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxRQUNQLEtBQUs7QUFBQSxRQUNMLGtCQUFrQjtBQUFBLE1BQ3BCO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNYLFFBQVE7QUFBQSxNQUNOLFNBQVMsV0FBVyxPQUFPO0FBQUEsSUFDN0I7QUFBQTtBQUFBLElBRUEsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxVQUFVO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsYUFBYTtBQUFBLE1BQ1gsTUFBTTtBQUFBLE1BQ04sZUFBZTtBQUFBLFFBQ2IsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUE7QUFBQSxJQUVBLEtBQUs7QUFBQTtBQUFBO0FBQUEsSUFHTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFXQSxRQUFRO0FBQUEsTUFDTixHQUFJLFFBQVEsSUFBSSxhQUFhLGVBQWUsRUFBQyxVQUFVLFFBQU8sSUFBSSxDQUFDO0FBQUEsSUFDckU7QUFBQTtBQUFBLElBRUEsU0FBUyxnQkFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNdkIsa0JBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFJbEIseUJBQXlCO0FBQUEsTUFDekIsMkJBQTJCO0FBQUEsTUFDM0IsNkJBQTZCO0FBQUEsTUFDN0IsNEJBQTRCO0FBQUEsTUFDNUIsZUFBZTtBQUFBLE1BQ2YsbUJBQW1CO0FBQUEsTUFDbkIsaUJBQWlCO0FBQUEsTUFDakIscUJBQXFCO0FBQUEsTUFDckIsV0FBVztBQUFBLE1BQ1gsZUFBZTtBQUFBLE1BQ2YsaUJBQWlCO0FBQUEsTUFDakIsNkJBQTZCO0FBQUEsTUFDN0IsNEJBQTRCO0FBQUEsTUFDNUIsNEJBQTRCO0FBQUEsTUFDNUIsb0NBQW9DO0FBQUEsTUFDcEMsbUNBQW1DO0FBQUEsTUFDbkMsOEJBQThCO0FBQUEsTUFDOUIsOEJBQThCLENBQUMsWUFBWSxVQUFVLFVBQVU7QUFBQSxNQUMvRCwyQkFBMkI7QUFBQSxNQUMzQixpQkFBaUI7QUFBQSxNQUNqQixjQUFjLENBQUMsWUFBWSxXQUFXO0FBQUEsTUFDdEMsb0NBQW9DO0FBQUEsTUFDcEMsZ0JBQWdCLENBQUMsZUFBZTtBQUFBLE1BQ2hDLGlCQUFpQjtBQUFBLE1BQ2pCLHNCQUFzQjtBQUFBLE1BQ3RCLHdCQUF3QjtBQUFBLE1BQ3hCLG9CQUFvQjtBQUFBO0FBQUE7QUFBQSxNQUdwQixvQkFBb0I7QUFBQSxNQUNwQix3Q0FBd0M7QUFBQSxNQUN4QywrQkFBK0I7QUFBQSxNQUMvQiw2QkFBNkI7QUFBQSxNQUM3QixZQUFZO0FBQUEsSUFDZCxDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
