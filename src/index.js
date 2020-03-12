
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from "./redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/ReduxStore";
import {addPost, updateNewMessageText, updateNewPostText} from "./redux/store";
import {addMessage} from "./redux/store";



let rerenderEntireTree = (state) => {

    ReactDOM.render(<App /*state={store.getState()}*/ state={state}
                                                      store={store}
                         dispatch={store.dispatch.bind(store)}
                         /*addMessage={store.addMessage.bind(store)}
                         updateNewMessageText={store.updateNewMessageText.bind(store)}*/
                         /*addPost={store.addPost.bind(store)}
                         updateNewPostText={store.updateNewPostText.bind(store)}*/

        /*DialogsData={DialogsData}
                         messagesData={messagesData}
                         postData={postData}*/ />, document.getElementById('root'));
};





rerenderEntireTree(store.getState());

store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
