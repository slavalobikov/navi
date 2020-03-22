import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";
import NavPageReducer from "./NavPageReducer";
import FriendsReducer from "./FriendsReducer";


let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    NavPage: NavPageReducer,
    FriendsPage: FriendsReducer,

});

let store = createStore(reducers);

window.store = store;

export default store;