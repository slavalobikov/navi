import React from 'react';
import cls from './Nav.module.css';
import {NavLink} from "react-router-dom";
import NavFriend from "./Friend/NavFriend";
import Message from "../Dialogs/Message/Message";


const Nav = (props) => {

    let NavFriendsElement = props.imgs.map( nf => <NavFriend key={nf.id} imgs={nf.frAva} name={nf.frName} />);

    return (
        <nav className={cls.item}>
            <div><NavLink to="/Profile">Profile</NavLink></div>



            <div><NavLink to="/Dialogs">Messages</NavLink></div>
            <div><NavLink to="/News">News</NavLink></div>
            <div><NavLink to="/Music">Musics</NavLink></div>
            <div><NavLink to="/Friends">Friends</NavLink></div>
            <div className={cls.fr}>Best Friends
                <div className={cls.navFriends}> { NavFriendsElement }</div>
            </div>

        </nav>
    );
}

export default Nav;