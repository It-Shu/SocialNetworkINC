import {ChangeEvent} from "react";
import {Message} from "./Message";
import {DialogItem} from "../Dialogitem/Dialogitem";
import {ActionsTypes, RootStateType} from "../../../redux/store";
import {sendMessageCreator, updateNewMessageTextCreator} from "../../../redux/dialogs-reducer";
import {ReducersStoreType} from "../../../redux/redux-store";
import {Dialogs, DialogsPropsType} from "../Dialogs";
import {connect} from "react-redux";


/*type DialogsContainerPropsType = {
    store: ReducersStoreType
   // state: DialogsType
    // addMessage: (messageText: string) => void
    // newMessageText: string
        // dispatch: (action: ActionsTypes) => void

}*/

/*export const DialogsContainer = (/!*props: DialogsContainerPropsType*!/) => {

    //  let messageRef = React.createRef<HTMLTextAreaElement>();

    /!*const addMessage = () => {
        /!* if (messageRef.current) {
             props.addMessage(messageRef.current.value)
         }*!/
        // props.dispatch(updateNewMessageTextActionCreator(messageRef.current.value))

        props.store.dispatch(sendMessageCreator())
    }*!/

    /!*const onNewMessageClick = (body: string) => {
        // let body = e.currentTarget.value
        props.store.dispatch(updateNewMessageTextCreator(body))
    }*!/

   // let state = props.store.getState().dialogsPage

    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState().dialogsPage
                const addMessage = () => {
                    store.dispatch(sendMessageCreator())
                }
                const onNewMessageClick = (body: string) => {
                    store.dispatch(updateNewMessageTextCreator(body))
                }
                return <Dialogs
                   // store={props.store}
                    updateNewMessageBody={onNewMessageClick}
                    sendMessage={addMessage}
                    dialogsPage={state}
                />
            }
        }




    </StoreContext.Consumer>

}*/


const mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageTextCreator(body))

        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);