import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import MessagesReducer from "./MessagesReducer";
import NavPageReducer from "./NavPageReducer";

let reducers = combineReducers({
    profilePage: ProfileReducer,
    messagesPage: MessagesReducer,
    NavPage: NavPageReducer
});

let store = createStore(reducers);

export default store;