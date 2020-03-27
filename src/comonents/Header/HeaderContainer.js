import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {authThunk, setUserData} from "../../redux/AuthReducer";
import {setAvaUser} from "../../redux/AuthReducer";
import {userAPI} from "../../API/api";






 class HeaderContainer extends React.Component {


     componentDidMount() {
         debugger
            this.props.authThunk()

          /*  userAPI.getAuth().then(data => {
                    if (data.resultCode === 0) {
                        /!*this.props.setUserData(response.data.data)*!/
                        let {id, email, login} = data.data;
                        this.props.setUserData(id, email, login);
                            userAPI.getProfile(id).then(small => {
                                this.props.setAvaUser(small);
                            })
                    }

             })
*/
     };



    render() {

        return (
            <Header  {...this.props}/>
        );
    }


}




let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    ava: state.auth.ava

});


export default connect( mapStateToProps,{setUserData, setAvaUser, authThunk}  )(HeaderContainer);