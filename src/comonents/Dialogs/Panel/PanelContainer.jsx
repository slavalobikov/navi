import {addMessageCreator, updateNewMessageTextCreator} from "../../../redux/MessagesReducer";
import Panel from "./Panel";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import React from "react";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";
import {compose} from "redux";

/*const PanelContainer = (props) => {
           /!* let newMessageText = props.store.getState().messagesPage.newMessageText;*!/

            let addMessage = (text) => {
                props.dispatch(addMessageCreator());
                props.dispatch(updateNewMessageTextCreator(text));
                props.dispatch(updateNewMessageTextCreator(''));
            };

            let onMessageChange = (text) => {

                props.dispatch(updateNewMessageTextCreator(text))
            };

            return <Panel updateNewMessageText={onMessageChange} addMessage={addMessage}
                          newMessageText={props.store.getState().messagesPage.newMessageText}/>


};  Контейнерная компанента до конекта (45)*/  /*КОМЕНТАРИЙ ( тут была контейнерная функция, которая создалась в контенте сама) 45)*/

let mapStateToProps = (state) => {

    return {
        newMessageText: state.messagesPage.newMessageText,
/*        isAuth: state.auth.isAuth,*/
    };
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (newText) => {
            dispatch(updateNewMessageTextCreator(newText))
        },
        addMessage: () => {
            dispatch(addMessageCreator());


        }
    }
};
let mapStateToPropsRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};


/*let AuthRedirectComponent = withAuthRedirect(Panel); /!* HOC что бы редиректить в логин *!/
AuthRedirectComponent = connect(mapStateToPropsRedirect)(AuthRedirectComponent);

let PanelContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default PanelContainer;*/

export default compose(

    connect(mapStateToPropsRedirect),
    withAuthRedirect
)(Panel)