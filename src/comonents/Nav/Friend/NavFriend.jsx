import React from 'react';
import cls from './NavFriend.module.css';
import {NavLink} from "react-router-dom";



const NavFriend = (props) => {
    return (


                <div className={cls.frPage}>
                    <div><img src={props.imgs} alt="ava"/>{props.name}</div>
                </div>


    );
}

export default NavFriend;