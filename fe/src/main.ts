import { createApp } from "vue";
import { createVueRouter } from "@/router";

import App from "@/App.vue";
import {createStores} from "@/app/stores";
import { useUserStore } from "./domain/user/useUser";

const app = createApp(App);

createStores(app);

const routerInstance = createVueRouter(); 

app.use(routerInstance);

app.mount("#app");

useUserStore().setCurrentUser('luis-id');
