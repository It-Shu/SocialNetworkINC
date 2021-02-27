import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./Dialogitem/Dialogitem";
import {
    ActionsTypes,
    DialogsType,
     StoreType,
} from "../../redux/store";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogs-reducer";

type DialogsPropsType = {
    store: StoreType
   // state: DialogsType
    // addMessage: (messageText: string) => void
    // newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    //  let messageRef = React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        /* if (messageRef.current) {
             props.addMessage(messageRef.current.value)
         }*/
        // props.dispatch(updateNewMessageTextActionCreator(messageRef.current.value))

        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageClick = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.store.dispatch(updateNewMessageTextCreator(body))
    }

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageText = state.newMessageText

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea className={s.textarea}
                // ref={messageRef}
                      value={newMessageText}
                      onChange={onNewMessageClick}/>
            <button className={s.button} onClick={addMessage}>Sent</button>
        </div>
    )
}