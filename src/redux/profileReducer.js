import { profileAPI } from "../API/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 10 },
    { id: 2, message: "Its my first post", likesCount: 20 },
  ],
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
    };
}
   
    case SET_STATUS:{
        return {
          ...state,
          status: action.status,
    };
}
    case SET_USER_PROFILE: {
        return {...state, profile: action.profile}
    }

    case DELETE_POST: {
        return {...state, posts: state.posts.filter(p => p.id != action.postId)}
    }

    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST, newPostText });
export const  setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const  setStatus = (status) => ({ type: SET_STATUS, status });
export const  deletePost = (postId) => ({ type: DELETE_POST, postId });
export const  getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
                dispatch(setUserProfile(response.data));
               });
}
export const  getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
                dispatch(setStatus(response.data));
               });
}
export const  updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }        
        });
}


export default profileReducer;
