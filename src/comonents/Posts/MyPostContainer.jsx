import React from 'react';
import MyPost from "./MyPost";
import * as axios from "axios";
import {connect} from "react-redux";
import {FriendThunkCreator, setFriendsProfile} from "../../redux/ProfileReducer";
import {Redirect, withRouter} from "react-router-dom";
import {userAPI} from "../../API/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



class MyPostContainer extends React.Component {



    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = 2;
        }
        this.props.FriendThunkCreator(userID);
           /* userAPI.getProfile(userID).then(data => {
                this.props.setFriendsProfile(data);
            })*/
    }

    render() {
        /*if (this.props.isAuth == false) {
            return <Redirect to={'/Login'} />
        }*/
        return (
            <div >

               <MyPost {...this.props} profile={this.props.profile}
                                       />

            </div>
        );
    }
    }






let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
/*    isAuth: state.auth.isAuth,*/
});

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

/*let AuthRedirectComponent = withAuthRedirect((MyPostContainer))

AuthRedirectComponent = connect(mapStateToPropsRedirect)(AuthRedirectComponent); /!* HOC ЧТо бы редирект на логин*!/

let WithURLDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect (mapStateToProps, { setFriendsProfile, FriendThunkCreator }) (WithURLDataContainerComponent);*/
/*РЕфакторинг снизу(Логику можно понять 70)*/
export default compose(
    connect (mapStateToProps, { setFriendsProfile, FriendThunkCreator }),
    withRouter,
    connect(mapStateToPropsRedirect),
  /*  withAuthRedirect*/
)(MyPostContainer)



