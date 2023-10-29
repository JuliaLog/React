import { stopSubmit } from "redux-form";
import { securityAPI } from "../API/api";


const SET_USER_DATA = 'samurai-network/auth/SET-USER-DATA';
const GET_CAPTCHA_URL_SUCCES = 'samurai-network/auth/GET-CAPTCHA-URL-SUCCES';


let initialState = {
  userId: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCES:
            return { 
                ...state, 
                ...action.payload
            }
        
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA , payload: {userId, email, login, isAuth} 
});
   
export const getCaptchaUrlSucces = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCES, payload: {captchaUrl} 
});

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            //succes, get auth data
            dispatch(getAuthUserData(null, null, null, false));
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
            dispatch(stopSubmit('login', {_error: message}));
        }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSucces(captchaUrl));
        
}

export const logout = (email, password, rememberMe) => async(dispatch) => {
    let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData(null, null, null, false));
        }   
}

export default authReducer;
