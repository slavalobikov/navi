import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/store";
import PanelPost from "./PanelPost";



const PanelPostContainer = (props) => {
    /*let state = props.store.getState();*/
    let newPostText = props.store.getState().profilePage.newPostText;

    let addPost = () => {
        let text = newPostText;
        props.store.dispatch(addPostActionCreator());
        props.store.dispatch(updateNewPostTextActionCreator(text));
        props.store.dispatch(updateNewPostTextActionCreator(''));
    };

    let onChange = (text) => {

        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <PanelPost updateNewPostText={ onChange } addPost={addPost} newPostText={newPostText} />
    );
};

export default PanelPostContainer