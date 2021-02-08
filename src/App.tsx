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
import {RootStateType} from "./redux/state";


type AppType = {
    state: RootStateType
}

const App = (props: AppType) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialog'} render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                    <Route path={'/profile'} render={() => <Profile state={props.state.profilePage}/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/setting'} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
