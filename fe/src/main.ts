import { createApp } from "vue";
import { createVueRouter } from "@/router";
import {createPinia} from "pinia";

import App from "@/App.vue";

const app = createApp(App);
app.use(createPinia());

const routerInstance = createVueRouter(); 
app.use(routerInstance);

const m = app.mount("#app");
