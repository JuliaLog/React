const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
  dialogs: [
    {id: 1, name: 'Julia'},
    {id: 2, name: 'Roman'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Sveta'},
    {id: 5, name: 'Valeria'},
    {id: 6, name: 'Anna'}
  ],
  messages: [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'programmer'},
    {id: 3, message: 'React'}
  ]
};

const dialogsReducer = (state = initialState, action) => {
   
  switch(action.type) {
    case SEND_MESSAGE: 
        let body = action.newMessageBody;
            return {
            ...state,
            messages: [...state.messages, {id: 4, message: body}]
        };
    default:
      return state;
  }
};


export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });
  
export default dialogsReducer;