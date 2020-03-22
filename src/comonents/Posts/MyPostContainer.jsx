import React from 'react';
import MyPost from "./MyPost";
import * as axios from "axios";
import {connect} from "react-redux";
import {setFriendsProfile} from "../../redux/ProfileReducer";



class MyPostContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect (mapStateToProps, { setFriendsProfile }) (MyPostContainer);


