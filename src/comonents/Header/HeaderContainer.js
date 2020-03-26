import React from 'react';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/AuthReducer";
import {setAvaUser} from "../../redux/AuthReducer";






 class HeaderContainer extends React.Component {


     componentDidMount() {

         axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
             withCredentials: true
         })
             .then(response => {
                    if (response.data.resultCode === 0) {
                        /*this.props.setUserData(response.data.data)*/
                        let {id, email, login} = response.data.data; /**/
                        this.props.setUserData(id, email, login);
                        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
                            .then(response => {
                                this.props.setAvaUser(response.data.photos.small);
                            })
                    }

             })

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


export default connect( mapStateToProps,{setUserData,
                                         setAvaUser}  )(HeaderContainer);