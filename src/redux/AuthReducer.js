const SET_USERS_DATA = 'SET_USERS_DATA';
const SET_AVA_USER = 'SET_AVA_USER';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    ava:null
/*    isFetching: true*/

};

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS_DATA:
            return  {
                ...state,
                ...action.data, //**/
                isAuth: true
            };
        case SET_AVA_USER:
            return {
                ...state,
                ...action.ava
            }

    }
    return state;
};

export const setUserData = (id, email,login) => ({
    type: SET_USERS_DATA,
    data: {id, email, login}
});
export const setAvaUser = (ava) => ({
    type: SET_USERS_DATA,
    ava
});



export default AuthReducer;