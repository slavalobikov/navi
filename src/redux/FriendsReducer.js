import {userAPI} from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT ='SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING ='TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS ='TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
   friends: [/*
       {id:1, name: 'DimaAMDa' , status:'zavod', folowed: true,
           imgs: 'https://sun9-24.userapi.com/c626321/v626321424/301e2/gHrxJ28_584.jpg' },
       {id:2, name: 'Palec18' , status:'prosloe', folowed: false,
           imgs:'https://sun9-50.userapi.com/c850120/v850120393/11c26f/dOJ__m_i5eQ.jpg' },
       {id:3, name: 'zavsze' , status:'ahahha', folowed: true,
           imgs: 'https://sun9-14.userapi.com/c851228/v851228802/cb5c6/E5KMH7GoMNA.jpg' }
    */],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],

};

const FriendsReducer = (state = initialState, action) => {

        switch (action.type) {
            case FOLLOW:

                return  {
                    ...state,
                    friends: state.friends.map(f => {
                        if (f.id === action.userID) {
                            return {...f, followed: true};
                        }
                        return f;
                    } )

                };

            case UNFOLLOW:

                return {
                    ...state,
                    friends: state.friends.map(f=> {
                        if (f.id === action.userID) {
                            return {...f, followed: false}

                        }
                        return f;
                    })
                };
            case SET_FRIENDS: {
                return {...state, friends: action.friends}
            }
            case SET_CURRENT_PAGE: {
                return {...state, currentPage: action.currentPage}
            }
            case SET_TOTAL_USERS_COUNT: {
                return {...state, totalUsersCount: action.count}
            }
            case TOGGLE_IS_FETCHING: {
                return {...state, isFetching: action.isFetching}
            }
            case TOGGLE_IS_FOLLOWING_PROGRESS: {
                return {...state,
                    followingInProgress:action.isFetching
                        ? [...state.followingInProgress, action.userID]
                        : state.followingInProgress.filter(id => id != action.userID)
                        /*? [...state.followingInProgress, action.userID]
                        : state.followingInProgress.filter(id => id != action.userID)*/
                }
            }
            default: return state;
        }

    /*    return state;*/
};

export const followActionCreator = (userID) => ({
        type: FOLLOW,
        userID
    });
export const unfollowActionCreator = (userID) => ( {
        type:UNFOLLOW,
        userID
    });
export const setFriendsAC = (friends) => ({
        type:SET_FRIENDS,
        friends
    });
export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const setUsersTotalCountAC = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    count:totalUsersCount
});
export const toggleIsFetchingAC = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching

});
export const toggleFollowingProgress = (isFetching, userID) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userID

});

export const getFriendsThunkCreator = (currentPage, pageSize) => {
   return (dispatch) => {
       dispatch(setCurrentPageAC(/*pageNumber*/ currentPage ));
    dispatch(toggleIsFetchingAC(true));

    userAPI.getFriends(currentPage , pageSize).then(data => {
        dispatch(toggleIsFetchingAC(false));
        dispatch(setFriendsAC(data.items));
        dispatch(setUsersTotalCountAC(data.totalCount));


    });

    }
}

export const unfollowThunkCreator = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true , userID));
        userAPI.deleteFriend(userID).then(resultCode => {
            if (resultCode == 0) {
                dispatch(unfollowActionCreator(userID))
            }
            dispatch(toggleFollowingProgress(false, userID))
        })

    }
};
export const followThunkCreator = (userID) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true , userID));
        userAPI.postFriend(userID).then(resultCode => {
            if (resultCode == 0) {
                dispatch(followActionCreator(userID))
            }
            dispatch(toggleFollowingProgress(false, userID))
        })

    }
};

export default FriendsReducer;