const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
   friends: [
       {id:1, name: 'DimaAMDa' , status:'zavod', folowed: true,
           imgs: 'https://sun9-24.userapi.com/c626321/v626321424/301e2/gHrxJ28_584.jpg' },
       {id:2, name: 'Palec18' , status:'prosloe', folowed: false,
           imgs:'https://sun9-50.userapi.com/c850120/v850120393/11c26f/dOJ__m_i5eQ.jpg' },
       {id:3, name: 'zavsze' , status:'ahahha', folowed: true,
           imgs: 'https://sun9-14.userapi.com/c851228/v851228802/cb5c6/E5KMH7GoMNA.jpg' }
    ]
};

const FriendsReducer = (state = initialState, action) => {

        switch (action.type) {
            case FOLLOW:
                return  {
                    ...state,
                    friends: state.friends.map(f => {
                        if (f.id === action.userID) {

                            return {...f, folowed: false};

                        }
                        return f;
                    } )

                };

            case UNFOLLOW:
                debugger
                return {
                    ...state,
                    friends: state.friends.map(f=> {
                        if (f.id === action.userID) {
                            return {...f, folowed: true}

                        }
                        return f;
                    })
                };



            default: return state;
        }
        return state;
};

export const followActionCreator = (userID) => (
    {
        type: FOLLOW,
        userID
    }
);

export const unfollowActionCreator = (userID) => (
    {
        type:UNFOLLOW,
        userID
    }
);


export default FriendsReducer;