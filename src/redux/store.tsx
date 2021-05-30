import profileReducer, {addPostAC, ProfileType, updateNewPostTextAC} from "./profile-reducer";
import dialogsReducer, {sendMessageAC, updateNewMessageTextAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {followSuccess, setUsers, unfollowSuccess} from "./users-reducer";

/*

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    // dispatch: (action: ActionsTypes) => void
}
*/

/*

export let store: StoreType = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 3},
                {id: 2, message: 'It`s my first post.', likesCount: 14},
                {id: 3, message: 'Omg', likesCount: 19},
            ],
            newPostText: '',
            profile: null

        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Sergei'},
                {id: 2, name: 'Olenka'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'I Love you'},
                {id: 3, message: 'Soo mach'}
            ],

            newMessageText: '',

        },

        sidebar: {}
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("State change")
    },


    subscribe(observer) {
        this._callSubscriber = observer
    },

/!*
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()

    }*!/
}

*/
