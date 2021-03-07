import {ActionsTypes, DialogsType, MessageType} from "./store";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE"

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

    newMessageText: '',

}

const dialogsReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.body;
            return state
        }

        case SEND_MESSAGE: {
            let body = state.newMessageText;
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: body
            }
            state.newMessageText = '';
            state.messages.push(newMessage)
            return state
        }
        default:
            return state

    }
}

export const updateNewMessageTextCreator = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    body: body
}) as const

export const sendMessageCreator = () => ({type: SEND_MESSAGE}) as const



    export default dialogsReducer;