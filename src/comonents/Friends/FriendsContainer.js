
import {connect} from "react-redux";
/*import Friends from "./FriendsC";*/
import {followActionCreator, setFriendsAC, unfollowActionCreator} from "../../redux/FriendsReducer";
import Friends from "./Friends";

let mapStateToProps = (state) => {
    return {
   friends: state.FriendsPage.friends
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
        }
/*        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextCreator(text))
        },
        addMessage: (text) => {
            dispatch(addMessageCreator());*/
        }
    }


let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
