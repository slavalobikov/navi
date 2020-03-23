import React from 'react';
import MyPost from "./MyPost";
import * as axios from "axios";
import {connect} from "react-redux";
import {setFriendsProfile} from "../../redux/ProfileReducer";
import {withRouter} from "react-router-dom";



class MyPostContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
            .then(response => {
                this.props.setFriendsProfile(response.data);

            })
    }

    render() {
        debugger
        return (
            <div >

               <MyPost {...this.props} profile={this.props.profile} />

            </div>
        );
    }
    }


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithURLDataContainerComponent = withRouter(MyPostContainer);

export default connect (mapStateToProps, { setFriendsProfile }) (WithURLDataContainerComponent);


