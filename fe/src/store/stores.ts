import type {App} from "vue";
import { createPinia } from 'pinia';

export const pinia = createPinia();

export const createStores = (app: App) => {
    app.use(pinia);
}
