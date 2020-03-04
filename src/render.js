import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
/*import * as serviceWorker from './serviceWorker';*/
/*import state from './redux/state';*/
import {addPost, updateNewMessageText, updateNewPostText} from "./redux/state";
import {addMessage} from "./redux/state";



export let rerenderEntireTree = (state) => {

    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         addMessage={addMessage}
                         updateNewMessageText={updateNewMessageText}
                         updateNewPostText={updateNewPostText}
        /*DialogsData={DialogsData}
                         messagesData={messagesData}
                         postData={postData}*/ />, document.getElementById('root'));
};


