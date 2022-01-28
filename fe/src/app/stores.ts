import type {App} from "vue";
import { createPinia } from 'pinia';

export const pinia = createPinia();

export const createStores = (app: App) => {
    app.use(pinia);
}

export enum StoreType {
    'questInfo' = 'questInfo',
    'quests' = 'quests',
    'user' = 'user',
}
