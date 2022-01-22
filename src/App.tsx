import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ContainerLogin from "./components/Login/ContainerLogin";


/*type AppType = {
    state: RootStateType
    addPost: (postText: string) => void
    addMessage: (messageText: string) => void
    updateNewPostText: (newText: string) => void
}*/

/*type AppType = {
    store: ReducersStoreType
    state: RootStateType
    // addPost: (postText: string) => void
    //  addMessage: (messageText: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}*/

const App/*: React.FC<AppType> */ = (/*props*/) => {
    //  const store = props.store.getState();

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialog'}
                           render={() => <DialogsContainer
                               // store={props.store}
                               // state={props.store. getState().dialogsPage}
                               // addMessage={props.store.addMessage.bind(props.store)}
                               /* newMessageText={props.store.getState().dialogsPage.newMessageText}*/
                               // dispatch={props.store.dispatch.bind(props.store)}
                           />}/>
                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer
                               // store={props.store}
                               // profilePage={props.store.getState().profilePage}
                               // addPost={props.store.addPost.bind(props.store)}
                               //  dispatch={props.store.dispatch.bind(props.store)}
                               // updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                           />}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/setting'} render={() => <Settings/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <ContainerLogin/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
