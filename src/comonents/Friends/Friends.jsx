import React from 'react'
import cls from "./Friends.module.css";
import userPhoto from './../../assets/imgs/User-icon.png'
import {NavLink} from "react-router-dom";
import * as axios from 'axios';
import {userAPI} from "../../API/api";

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
                                <button disabled={props.followingInProgress.some(id => id == f.id)} onClick={() => {
                                    props.unfollowThunkCreator(f.id);
/*                                    props.toggleFollowingProgress(true , f.id);
                                    userAPI.deleteFriend(f.id).then(resultCode => {
                                        if (resultCode == 0) {
                                            props.unfollow(f.id)
                                        }
                                        props.toggleFollowingProgress(false, f.id)
                                    })*/

                                }}> unFollow
                                </button>

                            </div>
                            : <div>
                                <button disabled={props.followingInProgress.some(id => id == f.id)} onClick={() => {
                                    props.followThunkCreator(f.id);
/*
                                    props.toggleFollowingProgress(true , f.id)
                                    userAPI.postFriend(f.id).then(resultCode => {
                                            if (resultCode == 0) {
                                                props.folow(f.id);
                                            }
                                            props.toggleFollowingProgress(false, f.id)
                                        });
*/

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
