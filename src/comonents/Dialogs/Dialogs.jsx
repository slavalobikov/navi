import React from 'react';
import cls from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Panel from "./Panel/Panel";

/*
const DialogItem = (props) => {
    return <div className={cls.dialog + ' ' + cls.active}>
        <NavLink to={"/Dialogs/" + props.id}>{props.user}</NavLink>
    </div>
};
*/

/*
const Message = (props) => {
    return <div className="message">{props.text}</div>
};
*/

const Dialogs = (props) => {

/*     let DialogsData = [
         {id:'1', name: 'XBOCT'},
         {id:'2', name: 'ArtStyle'},
         {id:'3', name: 'Yana'},
         {id:'4', name: 'ZeroGravity'}
     ];*/  /*Вынесли в index js (before redux )*/

/*     let messagesData = [
         {id:'1', text: 'Hi'},
         {id:'2', text: 'How are u'},
         {id:'3', text: 'My name is Gorec'}
     ];*/  /*Вынесли в index js (before redux )*/

    let dialogsElements = props.DialogsData.map ( d => <DialogItem user={d.name} id={d.id} ava={d.imgs}/> );
    let messagesElements = props.messagesData.map( m => <Message text={m.text} />);


    return (
        <div>
        <div className={cls.dialogs}>
            <div className={cls.dialogsItems}>
            {/*   <DialogItem user={DialogsData[0].name} id={DialogsData[0].id} />
               <DialogItem user={DialogsData[1].name} id={DialogsData[1].id} />
               <DialogItem user={DialogsData[2].name} id={DialogsData[2].id} />
               <DialogItem user={DialogsData[3].name} id={DialogsData[3].id} />*/}
               { dialogsElements }
            </div>
            <div> {messagesElements} </div>

        </div>
        <Panel addMessage={props.addMessage}
               newMessageText={props.newMessageText}
               updateNewMessageText={props.updateNewMessageText}/>
            </div>

    );
}

export default Dialogs