import React from 'react';
import './App.css';
import Header from "./comonents/Header/Header";
import Nav from "./comonents/Nav/Nav";
import MyPost from "./comonents/Posts/MyPost";
import Dialogs from "./comonents/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./comonents/News/News";
import Music from "./comonents/Music/Music";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wraper ">
                <Header/>
                <Nav imgs={props.state.NavPage.sidebar} name={props.state.NavPage.sidebar} />
                <div className='app-wraper-content'>
                    <Route path="/Profile" render={() => <MyPost postData={props.state.profilePage.postData}
                                                                 dispatch={props.dispatch}
                                                                 newPostText={props.state.profilePage.newPostText}
                                                                 store={props.store}

                                                               /* addPost={props.addPost}
                                                                updateNewPostText={props.updateNewPostText}*/ />}/>
                    <Route path="/Dialogs" render={() => <Dialogs DialogsData={props.state.messagesPage.DialogsData}
                                                                  messagesData={props.state.messagesPage.messagesData}
                                                                  /*addMessage={props.addMessage}*/
                                                                  newMessageText={props.state.messagesPage.newMessageText}
                                                                 /* updateNewMessageText={props.updateNewMessageText}*/
                                                                  dispatch={props.dispatch}
                                                                  store={props.store}
                    />}/>

                    <Route path="/News" component={News}/>
                    <Route path="/Music" component={Music}/>
                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;
