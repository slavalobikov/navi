import React from 'react';
import cls from './Panel.module.css';
import {addMessageCreator, updateNewMessageTextCreator} from "../../../redux/store";
/*import {addMessage} from "../../../redux/state";*/


const Panel = (props) => {

    let addMessage = () => {
        props.addMessage();
    };
    let onMessageChange = (e) => {
        let newText = e.target.value;
        props.updateNewMessageText(newText);
    };

    return (
        <div className={cls.panel}>
            <textarea value={props.newMessageText} onChange={onMessageChange}/>
            <button onClick={addMessage}>Отправить</button>
        </div>
    );
};

export default Panel
