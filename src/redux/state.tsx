import profileReducer, {addPostActionCreator, updateNewPostTextActionCreator} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageTextCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export type MessageType = {
    id: number
    message: string

}


export type DialogType = {

    id: number
    name: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageText: string
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfileType
    dialogsPage: DialogsType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    // addPost: () => void
    // addMessage: (messageText: string) => void
    //updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}


export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof updateNewMessageTextCreator>
    | ReturnType<typeof sendMessageCreator>

export let store: StoreType = {
    _state: {

        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 3},
                {id: 2, message: 'It`s my first post.', likesCount: 14},
                {id: 3, message: 'Omg', likesCount: 19},
            ],
            newPostText: ''

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

    /* addPost() {
         const newPost: PostType = {
             id: new Date().getTime(),
             message: this._state.profilePage.newPostText,
             likesCount: 0
         }
         this._state.profilePage.posts.push(newPost)
         this._state.profilePage.newPostText = '';
         this._callSubscriber()
     },*/

    /* addMessage(messageText: string) {
         const newMessage: MessageType = {
             id: new Date().getTime(),
             message: messageText
         }
         this._state.dialogsPage.messages.push(newMessage)
         //this._state.dialogsPage.newMessageText = '';
         this._callSubscriber()
     },*/

    /*updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber()
    },*/

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state = profileReducer(this._state, action)
         this._state = dialogsReducer(this._state, action)
        this._state.sidebar = sidebarReducer(this._state, action)

        this._callSubscriber()
/*
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: new Date().getTime(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber()

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.body;
            this._callSubscriber()
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageText;
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: body
            }
            this._state.dialogsPage.newMessageText = '';
            this._state.dialogsPage.messages.push(newMessage)
            this._callSubscriber()
        }*/
    }
}



/*let rerenderEntireTree = () => {
    console.log("State change")
}*/

/*export let state: RootStateType = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 3},
            {id: 2, message: 'It`s my first post.', likesCount: 14},
            {id: 3, message: 'Omg', likesCount: 19},
        ],
        newPostText: ''

    },

    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'I Love you'},
            {id: 3, message: 'Soo mach'}
        ],

        dialogs: [
            {id: 1, name: 'Sergei'},
            {id: 2, name: 'Olenka'}
        ],
    },

    sidebar: {}
}*/


/*export const addPost = () => {
    const newPost: PostType = {id: new Date().getTime(), message: state.profilePage.newPostText, likesCount: 0}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = '';
    rerenderEntireTree()

}*/

/*export const addMessage = (messageText: string) => {
    const newMessage: MessageType = {id: new Date().getTime(), message: messageText}
    state.dialogsPage.messages.push(newMessage)
    rerenderEntireTree()
}*/


/*export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree()
}*/

/*
export const subscribe = (observer: () => void) => { // pattern
    rerenderEntireTree = observer
}*/
