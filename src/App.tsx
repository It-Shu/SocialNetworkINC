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
import {state} from "./redux/state";

const App = () => {

  let message = state.dialogsPage.posts[0].message;
    let message2 = state.dialogsPage.posts[1].message;

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialog'} render={ () => <Dialogs state={message}/>}/>
                    <Route path={'/profile'} render={ () => <Profile state={props.state.profilePage}/>}/>
                    <Route path={'/music'} render={ () => <Music/>}/>
                    <Route path={'/news'} render={ () => <News/>}/>
                    <Route path={'/setting'} render={ () => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}



export default App;
