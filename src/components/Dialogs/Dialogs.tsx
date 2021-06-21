import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./Dialogitem/Dialogitem";
import {DialogsType} from "../../redux/dialogs-reducer";
import {Redirect} from "react-router-dom";
import {reduxForm, InjectedFormProps, Field} from "redux-form";

export type DialogsPropsType = {
    // store: ReducersStoreType
    // state: DialogsType
    // addMessage: (messageText: string) => void
    // newMessageText: string
    // dispatch: (action: ActionsTypes) => void
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageText: string) => void
    dialogsPage: DialogsType
    isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {

    //  let messageRef = React.createRef<HTMLTextAreaElement>();

    // const addMessage = () => {
    //     /* if (messageRef.current) {
    //          props.addMessage(messageRef.current.value)
    //      }*/
    //     // props.dispatch(updateNewMessageTextActionCreator(messageRef.current.value))
    //    // props.sendMessage();
    //     // props.store.dispatch(sendMessageCreator())
    // }
    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageText);
    }
    // const onNewMessageClick = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     let body = e.currentTarget.value
    //     props.updateNewMessageBody(body)
    //     // props.store.dispatch(updateNewMessageTextCreator(body))
    // }

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
   // let newMessageText = state.newMessageText

    // if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
            {/* <textarea className={s.textarea}
                      value={newMessageText}
                      onChange={onNewMessageClick}/>
            <button className={s.button} onClick={addMessage}>Sent</button>*/}
        </div>
    )
}

const AddMessageForm: React.FC<InjectedFormProps<DialogsType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageText' placeholder='Enter your message'/>
            </div>
            <div>
                <button>Sent</button>
            </div>
        </form>
    )
}


const AddMessageReduxForm = reduxForm<DialogsType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)