import { createApp } from "vue";
import { createVueRouter } from "@/router";
import App from "./App.vue";

const routerInstance = createVueRouter();

createApp(App).mount("#app");
