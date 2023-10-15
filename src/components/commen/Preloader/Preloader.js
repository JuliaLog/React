import React from 'react';
import preloader from '../../../assets/images/loader.gif';

let PreLoader = (props) => {
    return <div style = { {backgroundColor: 'white'}}>
        <img src = {preLoader} /> 
    </div>
}

export default PreLoader;