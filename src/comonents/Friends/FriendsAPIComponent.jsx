import React from "react";
import cls from './Friends.module.css'
import * as axios from 'axios';

import Friends from "./Friends";

class FriendsAPIComponent extends React.Component {


    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setFriends(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            /*this.props.setTotalUsersCount(response.data.setTotalUsersCount);*/

        });

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setFriends(response.data.items);
        })
    };

    render() {


        return <Friends  totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         folow={this.props.folow}
                         unfollow={this.props.unfollow}
                            friends={this.props.friends}/>
    }
}
export default FriendsAPIComponent;
