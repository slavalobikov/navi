import React from 'react';
import cls from './Panel.module.css';
/*import {addMessage} from "../../../redux/state";*/


const Panel = (props) => {
let newMessageElement = React.createRef();
let addMessage = () => {
    let text = newMessageElement.current.value;
    props.addMessage(text);
    props.updateNewMessageText('');
   /* newMessageElement.current.value = '';*/

};

let onMessageChange = () => {

      let text = newMessageElement.current.value;
    // console.log(text);
      props.updateNewMessageText(text);
};
    return (
        <div className={cls.panel}>
            <textarea ref={newMessageElement} value={props.newMessageText} onChange={onMessageChange} />
            <button onClick={ addMessage }>Отправить</button>

        </div>

    );
};

export default Panel