
import './index.css';
import * as serviceWorker from './serviceWorker';

import state, {subscribe} from "./redux/store";
/*import state from './redux/state';
import {addPost} from "./redux/state";
import {addMessage} from "./redux/state";*/

/*
let DialogsData = [
    {id:'1', name: 'XBOCT'},
    {id:'2', name: 'ArtStyle'},
    {id:'3', name: 'Yana'},
    {id:'4', name: 'ZeroGravity'}
];

let messagesData = [
    {id:'1', text: 'Hi'},
    {id:'2', text: 'How are u'},
    {id:'3', text: 'My name is Gorec'}
];

let postData = [
    {id: '1', text: 'Ты ничего бы не смог без меня!', imgs:'https://gamepedia.cursecdn.com/dota2_gamepedia/7/7f/ArtStyle.jpg' , likeCounts: '20' },
    {id: '2', text: 'Было топ, спасибо за эмоции', imgs:'https://svirtus.cdnvideo.ru/1curTl4HhDeZhkpcTU5MyOK8hKM=/0x0:327x327/200x200/filters:quality(100)/https://hb.bizmrg.com/esports-core-media/b7/b72150c6301704818231406ecb66bfd5.jpg?m=fc0447665b6498567651879444f5957e' , likeCounts: '2584' }
];
*/
/*addPost('Hi',);
debugger;*/
/*
export let rerenderEntireTree = () => {
    ReactDOM.render(<App state={state}
                         addPost={addPost}
                         addMessage={addMessage}
        /!*DialogsData={DialogsData}
                         messagesData={messagesData}
                         postData={postData}*!/ />, document.getElementById('root'));
};
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/ReduxStore";
import {addPost, updateNewMessageText, updateNewPostText} from "./redux/store";
import {addMessage} from "./redux/store";



let rerenderEntireTree = (state) => {

    ReactDOM.render(<App state={store.getState()}
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
