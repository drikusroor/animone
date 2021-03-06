import { createApp } from "vue";
import { createPinia } from "pinia";
import Antd from "ant-design-vue";
import App from "./App.vue";
import { animateFavicon } from "./helpers/favicon";


import "ant-design-vue/dist/antd.css";

createApp(App)
  .use(createPinia())
  .use(Antd)
  .mount("#app");

animateFavicon();