import React from 'react';
import {addMessageCreator, updateNewMessageTextCreator} from "../../../redux/store";
import Panel from "./Panel";

const PanelContainer = (props) => {

    let newMessageText = props.store.getState().messagesPage.newMessageText;

let addMessage = (text) => {
    props.dispatch(addMessageCreator());
    props.dispatch(updateNewMessageTextCreator(text));
    props.dispatch(updateNewMessageTextCreator(''));
};

let onMessageChange = (text) => {

      props.dispatch(updateNewMessageTextCreator(text))
};

return <Panel updateNewMessageText={onMessageChange} addMessage={addMessage} newMessageText={newMessageText} />

};

export default PanelContainer;
