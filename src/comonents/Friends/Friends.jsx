import React from 'react'
import cls from "./Friends.module.css";
import userPhoto from './../../assets/imgs/User-icon.png'
import {NavLink} from "react-router-dom";
import * as axios from 'axios';

let Friends = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={cls.background}>
        <div>
            {pages.map(p => {
                return <span key={props.id} className={props.currentPage === p ? cls.item : " "}
                             onClick={() => {
                                 props.onPageChanged(p);
                             }

                             }>{p}</span>
            })}

        </div>

        {
            props.friends.map(f => <div className={cls.user} key={f.id}>
                    <div>
                        <div>
                            <NavLink to={'/profile/' + f.id}>
                                <img className={cls.avaImg} src={f.photos.small != null ? f.photos.small : userPhoto}
                                     alt={f.name}/>
                            </NavLink>
                        </div>
                        {f.name}
                        {f.followed
                            ? <div>
                                <button onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${f.id}`,
                                        {
                                            withCredentials:true,
                                            headers:{
                                                "API-KEY":"be820c73-af0b-4ffa-9553-5bd0d04425d6"}
                                        }).then(response => {
                                        /*if (response.data.resultCode == 0)*/
                                        debugger
                                        props.unfollow(f.id)
                                        /*     props.folow(f.id);*/


                                    })

                                }}> unFollow
                                </button>

                            </div>
                            : <div>
                                <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${f.id}`,
                                        {},
                                        {withCredentials:true,
                                            headers:{
                                                "API-KEY":"be820c73-af0b-4ffa-9553-5bd0d04425d6"}
                                        }
                                    )
                                        .then(response => {

                                            /*if (response.data.resultCode == 0)*/
                                            debugger
                                            props.folow(f.id);
                                            /*props.unfollow(f.id)*/

                                        });

                                }}> Follow
                                </button>
                            </div>}

                    </div>

                    Привет {f.name}
                </div>
            )
        }
    </div>


};

export default Friends;
