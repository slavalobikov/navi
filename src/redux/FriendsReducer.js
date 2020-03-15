const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
   friends: [
       {id:1, name: 'Dima' , status:'zavod', folowed: true },
       {id:1, name: 'Art' , status:'prosloe', folowed: false },
       {id:1, name: 'Lesha' , status:'ahahha', folowed: true }
    ]
};

const FriendsReducer = (state = initialState, action) => {

        switch (action.type) {
            case FOLLOW:

            case UNFOLLOW:

            default: return state;
        }
        return state;
};

export default FriendsReducer;