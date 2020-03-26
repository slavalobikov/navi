import React from "react";

import * as axios from 'axios';

import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";

class FriendsAPIComponent extends React.Component {


    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {
                withCredentials:true
            })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setFriends(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            /*this.props.setTotalUsersCount(response.data.setTotalUsersCount);*/

        });

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
            {
                withCredentials: true
            })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setFriends(response.data.items);
        })
    };

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
        <Friends totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        folow={this.props.folow}
                        unfollow={this.props.unfollow}
                        friends={this.props.friends}

        />
        </>
    }
}

export default FriendsAPIComponent;
