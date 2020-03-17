import PanelPost from "./PanelPost";
/*import {addMessageCreator, updateNewMessageTextCreator} from "../../../../redux/MessagesReducer";*/

import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/ProfileReducer";




/*const PanelPostContainer = (props) => {
    /!*let state = props.store.getState();*!/
    let newPostText = props.store.getState().profilePage.newPostText;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
        props.store.dispatch(updateNewPostTextActionCreator(''));
    };

    let onChange = (text) => {

        props.store.dispatch(updateNewPostTextActionCreator(text));
    };

    return (
        <PanelPost updateNewPostText={ onChange } addPost={addPost} newPostText={newPostText} />
    );
};*/

let mapStateToProps = (state) => {
    return {
       newPostText: state.profilePage.newPostText
    };
};
let mapDispatchToProps = (dispatch) => {

    return {
        updateNewPostText:(newText) => {
            dispatch(updateNewPostTextActionCreator(newText))
        },
        addPost:() => {
           dispatch(addPostActionCreator())
        }
    }

};

let PanelPostContainer = connect(mapStateToProps, mapDispatchToProps)(PanelPost);

export default PanelPostContainer