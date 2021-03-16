import {createStore, combineReducers} from "redux"
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
// import {ActionsTypes, RootStateType} from "./store";
import {usersReducer} from "./users-reducer";

/*export type ReducersStoreType = {
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}*/

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
})
export type AppStateType = ReturnType<typeof rootReducer>

const store = createStore(rootReducer);


export default store;