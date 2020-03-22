import {connect} from "react-redux";

import {
    followActionCreator,
    setCurrentPageAC,
    setFriendsAC,
    setUsersTotalCountAC, toggleIsFetchingAC,
    unfollowActionCreator
} from "../../redux/FriendsReducer";
import FriendsAPIComponent from "./FriendsAPIComponent";

let mapStateToProps = (state) => {
    return {
        friends: state.FriendsPage.friends,
        pageSize: state.FriendsPage.pageSize,
        totalUsersCount: state.FriendsPage.totalUsersCount,
        currentPage: state.FriendsPage.currentPage,
        isFetching: state.FriendsPage.isFetching,


    }

};
let mapDispatchToProps = (dispatch) => {
    return {
        folow: (userID) => {
            dispatch(followActionCreator(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowActionCreator(userID))
        },
        setFriends: (friends) => {
            dispatch(setFriendsAC(friends))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        }
        /*        updateNewMessageText: (text) => {
                    dispatch(updateNewMessageTextCreator(text))
                },
                addMessage: (text) => {
                    dispatch(addMessageCreator());*/
    }
}


let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsAPIComponent);

export default FriendsContainer;
