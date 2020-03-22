import React from 'react'
import cls from "./Friends.module.css";
import userPhoto from './../../assets/imgs/User-icon.png'

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
                        <div><img className={cls.avaImg} src={f.photos.small != null ? f.photos.small : userPhoto}
                                  alt={f.name}/></div>
                        {f.name}
                        {f.folowed
                            ? <div>
                                <button onClick={() => {
                                    props.folow(f.id)
                                }}> Follow
                                </button>
                            </div>
                            : <div>
                                <button onClick={() => {
                                    props.unfollow(f.id)
                                }}> unFollow
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
