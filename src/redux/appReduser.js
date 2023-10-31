import { initialize, stopSubmit } from "redux-form";


const SET_INITIALIXED_SOCCESS = 'SET-INITIALIXED-SOCCESS';


let initialState = {
  initialized: false,
  globalError: null
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIXED_SOCCESS:
            return { 
                ...state, 
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSoccess = () => ({type: SET_INITIALIXED_SOCCESS});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());

    promise.then(() => {
        dispatch(initializedSoccess());
    });

   
}

export default authReducer;
