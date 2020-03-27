import React from 'react';
import cls from './Dialogs.module.css';

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Panel from "./Panel/Panel";
import PanelContainer from "./Panel/PanelContainer";


const Dialogs = (props) => {


    let dialogsElements = props.DialogsData.map ( d => <DialogItem user={d.name} id={d.id} key={d.id} ava={d.imgs} /> );
    let messagesElements = props.messagesData.map( m => <Message key={m.id} text={m.text} />);



    return (
        <div>
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
               { dialogsElements }
            </div>
            <div> {messagesElements} </div>

        </div>
        <PanelContainer dispatch={props.dispatch}
               newMessageText={props.newMessageText}
                        store={props.store}
/>
            </div>

    );
}

export default Dialogs