import {ProfileType} from "./profile-reducer";
import { SidebarType } from "./sidebar-reducer";
import {AppStateType} from "./redux-store";

// const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE"


export type RootStateType = {
    profilePage: ProfileType
    dialogsPage: DialogsType
    sidebar: SidebarType
    // auth: AppStateType
}

type MessageType = {
    id: number
    message: string

}

export type DialogType = {
    id: number
    name: string
}

export type DialogsType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
}

let initialState: DialogsType = {
    dialogs: [
        {id: 1, name: 'Sergei'},
        {id: 2, name: 'Olenka'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'I Love you'},
        {id: 3, message: 'Soo mach'}
    ],
}

const dialogsReducer = (state = initialState, action: DialogActionsType) => {
    switch (action.type) {
        // case UPDATE_NEW_MESSAGE_TEXT: {
        //    return  {
        //         ...state,
        //         newMessageText: action.body
        //     }
        // }

        case SEND_MESSAGE: {
            let body = action.newMessageText
            return {
                ...state,
                messages: [...state.messages, {
                    id: new Date().getTime(),
                    message: body
                }],
            }

            /*const newMessage: MessageType = {
                id: new Date().getTime(),
                message: body
            }*/
            // newState.messages.push(newMessage)
        }
        default:
            return state

    }
}

// export const updateNewMessageTextAC = (body: string) => ({
//     type: UPDATE_NEW_MESSAGE_TEXT,
//     body
// }) as const

export const sendMessageAC = (newMessageText: string) => ({
    type: SEND_MESSAGE, newMessageText
}) as const


type DialogActionsType = | ReturnType<typeof sendMessageAC>

    export default dialogsReducer;