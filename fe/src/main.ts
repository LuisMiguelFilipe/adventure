import { createApp } from "vue";
import { createVueRouter } from "@/router";
import { createStores } from "@/store/stores";

import App from "@/App.vue";

const routerInstance = createVueRouter();
debugger;

const app = createApp(App);

createStores(app);

app.use(routerInstance);

app.mount("#app");
