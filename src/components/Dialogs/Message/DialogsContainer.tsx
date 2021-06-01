import {DialogsType} from "../../../redux/dialogs-reducer";
import {sendMessageAC, updateNewMessageTextAC} from "../../../redux/dialogs-reducer";
import {Dialogs} from "../Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
    dialogsPage: DialogsType
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageTextAC(body))

        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);



















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


