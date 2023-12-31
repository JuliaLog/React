import { profileAPI } from "../API/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const DELETE_POST = 'DELETE-POST';
const SAVE_PHOTO_SUCCES = 'SAVE-PHOTO-SUCCES';

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

    case SAVE_PHOTO_SUCCES: {
        return {...state, profile: {...state.profile, photos: action.photos}}
    }

    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST, newPostText });
export const  setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const  setStatus = (status) => ({ type: SET_STATUS, status });
export const  deletePost = (postId) => ({ type: DELETE_POST, postId });
export const  savePhotoSucces = (photos) => ({ type: SAVE_PHOTO_SUCCES, photos });

export const  getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
}
export const  getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
}
export const  updateStatus = (status) => async (dispatch) => {
   try {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    } 
   } catch(error) {
    //
   }
}
export const  savePhoto = (file) => async (dispatch) => {
   let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSucces(response.data.data.photos));
        } 
}
export const  saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId));
        } else {
            dispatch(stopSubmit('edit-profile', response.data.messages[0]));
            return Promise.reject(response.data.messages[0]);
        }
}

export default profileReducer;
