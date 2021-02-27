import {createStore, combineReducers} from "redux"
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {ActionsTypes, RootStateType} from "./store";

export type ReducersStoreType = {
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

const store = createStore(reducers);


export default store;