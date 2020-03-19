import React from "react";
import cls from './Friends.module.css'
import * as axios from 'axios';
import userPhoto from './../../assets/imgs/User-icon.png'

class Friends extends React.Component {

    constructor(props) {
        super(props);

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setFriends(response.data.items);

            })


    }



    render() {
        return <div className={cls.background}>

            {
                this.props.friends.map(f => <div className={cls.user} key={f.id}>
                        <div>
                            <div><img className={cls.avaImg} src={f.photos.small != null ? f.photos.small : userPhoto}
                                      alt={f.name}/></div>
                            {f.name}
                            {f.folowed
                                ? <div>
                                    <button onClick={() => {
                                        this.props.folow(f.id)
                                    }}> Follow
                                    </button>
                                </div>
                                : <div>
                                    <button onClick={() => {
                                        this.props.unfollow(f.id)
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
}
export default Friends
