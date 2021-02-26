import {ActionsTypes, MessageType, RootStateType} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const SEND_MESSAGE = "SEND-MESSAGE"

const dialogsReducer = (state: RootStateType, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.dialogsPage.newMessageText = action.body;
            return state
        }

        case SEND_MESSAGE: {
            let body = state.dialogsPage.newMessageText;
            const newMessage: MessageType = {
                id: new Date().getTime(),
                message: body
            }
            state.dialogsPage.newMessageText = '';
            state.dialogsPage.messages.push(newMessage)
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