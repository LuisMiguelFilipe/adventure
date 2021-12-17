// import {InjectionKey} from 'vue'
// import {createStore as baseCreateStore, useStore as baseUseStore, type Store} from 'vuex';
// import {questModule, type QuestState as QuestState} from "@/store/questModule";
// import { type App } from "vue";
//
// const isProduction = process.env.NODE_ENV === 'production';
// console.log(process.env.NODE_ENV);
//
// export interface RootState {
//     quest: QuestState
// }
//
// // define injection key
// const storeKey: InjectionKey<Store<RootState>> = Symbol();
//
// let store: Store<RootState>;
//
// export const registerStore = (app: App) => {
//    
//    
//     store = baseCreateStore<RootState>({
//         strict: !isProduction,
//         modules: {
//             quest: questModule,
//         },
//     });
//     app.use(store);
// } 
//
// export const useStore = () => {
//     const s = baseUseStore(storeKey);
//     return s;
// }
