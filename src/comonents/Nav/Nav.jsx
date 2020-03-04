import React from 'react';
import cls from './Nav.module.css';
import {NavLink} from "react-router-dom";
import NavFriend from "./Friend/NavFriend";
import Message from "../Dialogs/Message/Message";


const Nav = (props) => {

    let NavFriendsElement = props.imgs.map( nf => <NavFriend  imgs={nf.frAva} name={nf.frName} />);

    return (
        <nav className={cls.item}>
            <div><NavLink to="/Profile">Profile</NavLink></div>
            <div><NavLink to="/Dialogs">Messages</NavLink></div>
            <div><NavLink to="/News">News</NavLink></div>
            <div><NavLink to="/Music">Musics</NavLink></div>
            <div className={cls.fr}>Best Friends
                <div className={cls.navFriends}> { NavFriendsElement }</div>
            </div>
            {/*<div className={cls.fr}>Friends*/}
              {/*  <div className={cls.frPage}>
                    <div><img src="https://sun9-69.userapi.com/c639118/v639118199/43f4d/jISX1DsQ3Gg.jpg" alt=""/>Name</div>
                    <div><img src="https://sun9-69.userapi.com/c639118/v639118199/43f4d/jISX1DsQ3Gg.jpg" alt=""/>Name</div>
                    <div><img src="https://sun9-69.userapi.com/c639118/v639118199/43f4d/jISX1DsQ3Gg.jpg" alt=""/>Name</div>*/}
                 {/*   <div>a</div>
                    <div>b</div>
                    <div>c</div>
                    <div>d</div>
                    <div>e</div>*/}
                {/*</div>*/}
            {/*</div>*/}
        </nav>
    );
}

export default Nav;