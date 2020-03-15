const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    DialogsData: [
        {
            id: '1',
            name: 'XBOCT',
            imgs: 'data:image/jpeg;base64,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'
        },
        {id: '2', name: 'ArtStyle', imgs: 'https://www.meme-arsenal.com/memes/0fed029143d9c2e6b6a8092174a6fe60.jpg'},
        {
            id: '3',
            name: 'Yana',
            imgs: 'data:image/jpeg;base64,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'
        },
        {id: '4', name: 'ZeroGravity', imgs: 'https://sun9-39.userapi.com/c840133/v840133033/b94c/81QwIrR2SpU.jpg'}
    ],
    messagesData: [
        {id: '1', text: 'Hi'},
        {id: '2', text: 'How are u'},
        {id: '3', text: 'My name is Gorec'}
    ],
    newMessageText: ''

};

const MessagesReducer = (state = initialState, action) => {

    /*
            /!*switch (action.type) {
                case ADD_MESSAGE :
                    let newMessage = {
                        id: 4,
                        text: state.newMessageText
                    };
                    state.messagesData.push(newMessage);
                   /!* this._callSubscriber(this._state);*!/
                    break;
                case UPDATE_NEW_MESSAGE_TEXT  :
                    state.newMessageText = action.newText;
                    /!*this._callSubscriber(this._state);*!/

            }*!/

            if (action.type === ADD_MESSAGE) {
                let newMessage = {
                    id: '4',
                    text: state.newMessageText
                };
                let stateCopy = {...state};
                stateCopy.messagesData.push(newMessage);
                debugger
                stateCopy.newMessageText='';
                debugger
                return stateCopy;

               /!* return {
                    ...state,
                    messagesData: [...state.messagesData, newMessage],
                    // messagesData.push(newMessage);
                    newMessageText: '',
                }*!/
            } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
                // let stateCopy = {...state};
                // stateCopy.newMessageText = action.newText;
                // return stateCopy;
                return {
                    ...state,
                    newMessageText: action.newText,
                }
            } else {
                return state
            }

        };
    */

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                text:state.newMessageText
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
                newMessageText: ''
            };

            // let messagesData = [...state.messagesData];
            // stateCopy.messagesData.push(newMessage);
            // stateCopy.newMessageText="";
        case UPDATE_NEW_MESSAGE_TEXT:

            return {
                ...state,
                newMessageText: action.newText
            };

        default: return state;
    }

};
export const addMessageCreator = () => ({

        type: ADD_MESSAGE

});
export const updateNewMessageTextCreator = (newText) => ({

        type: UPDATE_NEW_MESSAGE_TEXT,
        newText
});

export default MessagesReducer;