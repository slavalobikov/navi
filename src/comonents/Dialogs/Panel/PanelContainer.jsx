import React from 'react';
import {addMessageCreator, updateNewMessageTextCreator} from "../../../redux/MessagesReducer";
import Panel from "./Panel";
import {connect} from "react-redux";

/*const PanelContainer = (props) => {
           /!* let newMessageText = props.store.getState().messagesPage.newMessageText;*!/

            let addMessage = (text) => {
                props.dispatch(addMessageCreator());
                props.dispatch(updateNewMessageTextCreator(text));
                props.dispatch(updateNewMessageTextCreator(''));
            };

            let onMessageChange = (text) => {

                props.dispatch(updateNewMessageTextCreator(text))
            };

            return <Panel updateNewMessageText={onMessageChange} addMessage={addMessage}
                          newMessageText={props.store.getState().messagesPage.newMessageText}/>


};  Контейнерная компанента до конекта (45)*/  /*КОМЕНТАРИЙ ( тут была контейнерная функция, которая создалась в контенте сама) 45)*/

let mapStateToProps = (state) => {

    return {
        newMessageText: state.messagesPage.newMessageText
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (newText) => {
            dispatch(updateNewMessageTextCreator(newText))
        },
        addMessage: () => {
            dispatch(addMessageCreator());


        }
    }
};

let PanelContainer = connect(mapStateToProps, mapDispatchToProps)(Panel);

export default PanelContainer;
