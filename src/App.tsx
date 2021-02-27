import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom"
import {ActionsTypes, RootStateType, StoreType} from "./redux/store";
import {StoreReducersType} from "./redux/redux-store";


/*type AppType = {
    state: RootStateType
    addPost: (postText: string) => void
    addMessage: (messageText: string) => void
    updateNewPostText: (newText: string) => void
}*/
type AppType = {
    store: StoreReducersType
    state: RootStateType
    // addPost: (postText: string) => void
    //  addMessage: (messageText: string) => void
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppType> = (props) => {
    //  const store = props.store.getState();

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialog'}
                           render={() => <Dialogs store={props.store}
                                                  // state={props.store.getState().dialogsPage}
                               // addMessage={props.store.addMessage.bind(props.store)}
                               /* newMessageText={props.store.getState().dialogsPage.newMessageText}*/
                                                  dispatch={props.store.dispatch.bind(props.store)}
                           />}/>
                    <Route path={'/profile'}
                           render={() => <Profile profilePage={props.store.getState().profilePage}
                               // addPost={props.store.addPost.bind(props.store)}
                                                  dispatch={props.store.dispatch.bind(props.store)}
                               // updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                           />}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/setting'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
