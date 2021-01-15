
type MessageType = {
    id: number
    message: string
}


type DialogType = {

    id: number
    name: string
}

type PostType = {

    id: number
    message: string
    likesCount: number
}

type ProfileType = {
    posts: Array<PostType>
}

type DialogsType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

type SidebarType = {

}

type RootStateType = {
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

    sidebar: {

    }
}