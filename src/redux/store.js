import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 10},
        {id: 2, message: 'Its my first post', likesCount: 20}
      ],
      newPostText: "programmer.com",
      
    },
    dialogsPage: {
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
      ],
      newMessageBody: ' ',
    },
    sidebar: {

    }
    
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _callSubscriber() {

  },
 
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

  }
}


export default store;
window.store = store;
