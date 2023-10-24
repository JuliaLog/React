
import React from "react";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withSuspense = (Component) => {
        
    }
   
    return (props) => {
        return <Suspense fallback = {<Preloader />}> 
        <Component {...props} /></Suspense>  
    }