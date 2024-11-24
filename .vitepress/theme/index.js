// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import MyLayout from "./MyLayout.vue";
import "./latex.css";
import { useData, useRoute } from "vitepress";
import { toRefs } from "vue";

export default {
  extends: DefaultTheme,
  // 使用注入插槽的包装组件覆盖 Layout
  Layout: MyLayout,
  setup() {
    // Get frontmatter and route
    const { frontmatter } = toRefs(useData());
    const route = useRoute();
  },
};
