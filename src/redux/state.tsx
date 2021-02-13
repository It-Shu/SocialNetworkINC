import {rerenderEntireTree} from "../render";

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
}

type SidebarType = {}

export type RootStateType = {
    profilePage: ProfileType
    dialogsPage: DialogsType
    sidebar: SidebarType
}


export let state: RootStateType = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 3},
            {id: 2, message: 'It`s my first post.', likesCount: 14},
            {id: 3, message: 'Omg', likesCount: 19},
        ],
        newPostText: 'It_KAmaSUtrA'

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
}


export const addPost = () => {
    const newPost: PostType = {id: new Date().getTime(), message: state.profilePage.newPostText, likesCount: 19}

    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = '';

    rerenderEntireTree(state)

}

export const addMessage = (messageText: string) => {
    const newMessage: MessageType = {id: new Date().getTime(), message: messageText}
    state.dialogsPage.messages.push(newMessage)

    rerenderEntireTree(state)
}

export const updateNewPostText = (newText: string) => {


    state.profilePage.newPostText = newText;

    rerenderEntireTree(state)

}