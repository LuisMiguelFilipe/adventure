import { createApp } from "vue";
import { createVueRouter } from "@/router";
import { createStores } from "@/store/stores";

import App from "@/App.vue";


const app = createApp(App);

createStores(app);

const routerInstance = createVueRouter(); 
app.use(routerInstance);

const m = app.mount("#app");
