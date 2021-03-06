import React from "react";

import * as axios from 'axios';

import Friends from "./Friends";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../API/api";

class FriendsAPIComponent extends React.Component {


    componentDidMount() {
        this.props.getFriendsThunkCreator(this.props.currentPage, this.props.pageSize);
        /*        this.props.toggleIsFetching(true);

            userAPI.getFriends(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
                this.props.setFriends(data.items);
                this.props.setTotalUsersCount(data.totalCount);


        });*/
    }

    onPageChanged = (pageNumber) => {
        this.props.getFriendsThunkCreator(pageNumber, this.props.pageSize);
        /* this.props.setCurrentPage(pageNumber);
         this.props.toggleIsFetching(true);
             userAPI.getFriends(pageNumber, this.props.pageSize).then(data => {
                 this.props.toggleIsFetching(false);
                 this.props.setFriends(data.items);

         })*/

    };

    render() {

debugger
        return <>
            {this.props.isFetching ? <Preloader/> : null}
        <Friends totalUsersCount={this.props.totalUsersCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        onPageChanged={this.onPageChanged}
                        folow={this.props.folow}
                        unfollow={this.props.unfollow}
                        friends={this.props.friends}
                        toggleFollowingProgress={this.props.toggleFollowingProgress}
                        followingInProgress={this.props.followingInProgress}
                        unfollowThunkCreator={this.props.unfollowThunkCreator}
                        followThunkCreator={this.props.followThunkCreator}
        />
        </>
    }
}

export default FriendsAPIComponent;
