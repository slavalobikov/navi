import {connect} from "react-redux";
import {
    followActionCreator, followThunkCreator, getFriendsThunkCreator,
    setCurrentPageAC,
    setFriendsAC,
    setUsersTotalCountAC, toggleFollowingProgress, toggleIsFetchingAC,
    unfollowActionCreator, unfollowThunkCreator
} from "../../redux/FriendsReducer";
import FriendsAPIComponent from "./FriendsAPIComponent";



let mapStateToProps = (state) => {
    return {
        friends: state.FriendsPage.friends,
        pageSize: state.FriendsPage.pageSize,
        totalUsersCount: state.FriendsPage.totalUsersCount,
        currentPage: state.FriendsPage.currentPage,
        isFetching: state.FriendsPage.isFetching,
        followingInProgress: state.FriendsPage.followingInProgress,

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
       /* setFriends: (friends) => {
            dispatch(setFriendsAC(friends))
        },*/
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
       /* setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },*/
        /*toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },*/
        toggleFollowingProgress:(isFetching) => {
            dispatch(toggleFollowingProgress(isFetching))
        },
        getFriendsThunkCreator:(currentPage, pageSize) => {
            dispatch(getFriendsThunkCreator(currentPage, pageSize))
        },
        unfollowThunkCreator:(userID) => {
            dispatch(unfollowThunkCreator(userID))
        },
        followThunkCreator: (userID) => {
            dispatch(followThunkCreator(userID))
        }
    }
}

let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsAPIComponent);

export default FriendsContainer;
