import {defineStore} from 'pinia'
import {StoreType} from "@/app/stores";
import {UserModel} from "@/domain/user/userModel";
import * as userData from "@/data/userData";


export interface State {
    _currentUser: UserModel|undefined;
}

export const useUserStore = defineStore(StoreType.user, {
    state: (): State => ({
        _currentUser: undefined,
    }),
    getters: {
        hasCurrentUser: (state) => !!state._currentUser,
        currentUser: (state) => state._currentUser,
    },
    actions: {
        async setCurrentUser(id: string) {
            this._currentUser = await userData.fetchUser(id);
        },
    }
});


