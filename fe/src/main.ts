import { createApp } from "vue";
import { createVueRouter } from "@/router";
import App from "./App.vue";

const routerInstance = createVueRouter();

const app = createApp(App);

app.use(routerInstance);

app.mount("#app");
