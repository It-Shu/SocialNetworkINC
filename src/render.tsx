import {addMessage, addPost, RootStateType} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}