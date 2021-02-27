import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
/*import {addMessage, addPost, RootStateType, updateNewPostText} from "./redux/state";*/
import ReactDOM from "react-dom";
import App from "./App";
import {RootStateType} from "./redux/store";

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store}
                 state={store.getState()}
                // addPost={store.addPost.bind(store)}
                // addMessage={store.addMessage.bind(store)}
                //updateNewPostText={store.updateNewPostText.bind(store)}
                 dispatch={store.dispatch.bind(store)}
            />

        </React.StrictMode>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
