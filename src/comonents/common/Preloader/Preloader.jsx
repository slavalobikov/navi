import React from 'react';
import Preloaderimg from './../../../assets/imgs/Preloader.gif';
import cls from './Preloader.module.css'

let Preloader = (props) => {
    return <div className={cls.item}>
        <img src={Preloaderimg} alt=""/>    </div>
};

export default Preloader;