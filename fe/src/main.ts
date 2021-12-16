import { createApp } from "vue";
import { createVueRouter } from "@/router";
import { registerStore } from "@/store";

import App from "@/App.vue";

const routerInstance = createVueRouter();

const app = createApp(App);

registerStore(app);

app.use(routerInstance);

app.mount("#app");
