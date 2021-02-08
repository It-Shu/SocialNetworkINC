import React from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./Dialogitem/Dialogitem";
import {DialogsType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsType
    addMessage: (messageText: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {

    let messageRef = React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        debugger;
        if (messageRef.current) {
            props.addMessage(messageRef.current.value)
            alert(messageRef)
        }
    }

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <textarea className={s.textarea} ref={messageRef}/>
            <button className={s.button} onClick={ addMessage }>Sent</button>
        </div>
    )
}