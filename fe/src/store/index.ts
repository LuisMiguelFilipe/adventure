import {InjectionKey} from 'vue'
import {createStore as baseCreateStore, useStore as baseUseStore, type Store} from 'vuex';
import {questModule, type StoreState as QuestStoreState} from "@/store/questModule";
import { type App } from "vue";

const isProduction = process.env.NODE_ENV === 'production';
console.log(process.env.NODE_ENV);

interface StoreState {
    quests: QuestStoreState
}

// define injection key
const storeKey: InjectionKey<Store<StoreState>> = Symbol();

let store: Store<StoreState>;

export const registerStore = (app: App) => {
    store = baseCreateStore<StoreState>({
        strict: !isProduction,
        modules: {
            quest: questModule,
        },
    });
    app.use(store);
} 

export const useStore = () => {
    return baseUseStore(storeKey);
}
