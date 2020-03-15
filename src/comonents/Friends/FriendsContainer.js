import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";



let mapStateToProps = (state) => {
    return {
   friends: state.FriendsPage.friends
    }

};
let mapDispatchToProps = (dispatch) => {
    return {
/*        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextCreator(text))
        },
        addMessage: (text) => {
            dispatch(addMessageCreator());*/
        }
    }


let FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
