import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";
import NavPageReducer from "./NavPageReducer";
import FriendsReducer from "./FriendsReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    NavPage: NavPageReducer,
    FriendsPage: FriendsReducer,
    auth: AuthReducer,

});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;