import {connect} from "react-redux";
/*import Friends from "./FriendsC";*/
import {
    followActionCreator,
    setCurrentPageAC,
    setFriendsAC,
    setUsersTotalCountAC,
    unfollowActionCreator
} from "../../redux/FriendsReducer";
import Friends from "./Friends";

let mapStateToProps = (state) => {
    return {
        friends: state.FriendsPage.friends,
        pageSize: state.FriendsPage.pageSize,
        totalUsersCount: state.FriendsPage.totalUsersCount,
        currentPage: state.FriendsPage.currentPage,


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
        /*        updateNewMessageText: (text) => {
                    dispatch(updateNewMessageTextCreator(text))
                },
                addMessage: (text) => {
                    dispatch(addMessageCreator());*/
    }
}


let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
