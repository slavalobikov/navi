import React from "react";
import cls from './Friends.module.css'
import * as axios from 'axios';
import userPhoto from './../../assets/imgs/User-icon.png'

class Friends extends React.Component {

  /*  constructor(props) {
        super(props);*/
  componentDidMount() {

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setFriends(response.data.items);
                this.props.setTotalUsersCount(response.data.setTotalUsersCount);

            });

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setFriends(response.data.items);
        })};

    render() {

        let pagesCount = Math.ceil (this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i=1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div className={cls.background}>
            <div className={cls.number}>
                { pages.map( p => {
                  return  <span className={this.props.currentPage === p && cls.item} onClick={ () => this.onPageChanged(p) }>{p}</span>
                },
                ) }
                {/*<span>1</span>
                <span className={cls.item}>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>*/}
            </div>

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
