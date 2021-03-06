import {profileAPI, userAPI} from "../API/api";
import {followActionCreator, toggleFollowingProgress} from "./FriendsReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_FRIENDS_PROFILE = 'SET_FRIENDS_PROFILET';
const SET_USER_STATUS = 'SET_USER_STATUS';
const CHANGE_STATUS = 'CHANGE_STATUS';

let initialState = {
    postData: [
        {
            id: 1,
            text: 'Ты бы ничего не смог без меня!',
            imgs: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnfAu1_zV1W2aEoFBEuwQjvoa0j7INnP-63UmqUeXrI2eAvTiB',
            likeCounts: 1334
        },
        {
            id: 2,
            text: 'Спасибо за эмоции, было топ!',
            imgs: 'https://svirtus.cdnvideo.ru/67gtOb1Xc9umy4zXJyRAP7-aLUM=/0x0:542x541/800x0/filters:quality(100)/https://hb.bizmrg.com/cybersportru-media/21/214456a651274bb1680eae0059a4a450.jpg?m=e48d94598cead114221dada48880e212',
            likeCounts: 15786
        },
        {
            id: 3,
            text: 'Это все твои лунные факты!',
            imgs: 'data:image/jpeg;base64,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',
            likeCounts: 1289,
        }
    ],
    newPostText: 'Напиши что-либо',
    profile: null,
    userStatus: 'GO GO'


};

const ProfileReducer = (state = initialState, action) => {



        switch (action.type) {
            case ADD_POST : {
                let newPost = {
                    id: 4,
                    text: state.newPostText,
                    imgs: 'https://svirtus.cdnvideo.ru/u-STFrqbm8weFIsMOI2D1O3ssSw=/0x0:200x200/200x200/filters:quality(100)/https://hb.bizmrg.com/esports-core-media/1a/1a93d8c0d3f74739720c28e3c9849051.png?m=02845029a29cec1a38d58d32810eb54f',
                    likeCounts: 0,
                };
               /* let stateCopy = {...state}
                stateCopy.postData = [...state.postData];
                stateCopy.postData.push(newPost);
                stateCopy.newPostText = '';
                return stateCopy;*/
                return {

                    ...state,
                    postData: [...state.postData, newPost],
                    newPostText: ''
                };


                /*state.postData.push(newPost);*/
            }

            case UPDATE_NEW_POST_TEXT :

                return {
                    ...state,
                    newPostText: action.newText

                };
            case SET_FRIENDS_PROFILE:
                return {
                    ...state,
                    profile:action.profile
                };
            case SET_USER_STATUS:
                return {
                    ...state,
                    userStatus: action.status
                };



            default: return state;


        }

/*    return state;*/
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};
export const setFriendsProfile = (profile) => {
    return {
        type: SET_FRIENDS_PROFILE,
        profile
    }
};
export const setUserStatus = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
};

export const FriendThunkCreator = (userID) => {

    return (dispatch) => {
        userAPI.getProfile(userID).then(data => {
            dispatch(setFriendsProfile(data));
        }
        )}
};
export const UserStatusThunkCreator = (userID) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userID).then(response => {
            dispatch(setUserStatus(response));
        }
        )}
};

export const ChangeStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.ChangeStatus(status).then(response => {
            if (response.data === 0) {
                debugger
                dispatch(setUserStatus(status));
            }

        }
        )}
};




export default ProfileReducer;