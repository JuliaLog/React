import React from 'react';
import { Field } from 'redux-form';
import reduxForm from 'redux-form';
import { Input, createField } from '../commen/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import style from './../commen/FormsControls/FormsControls.module.css';

const LoginForm = (handleSubmit, error) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)} 
            {createField('Password', 'password', [required], Input, {type: 'password'})} 
            {createField(null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')} 
            { error && <div className={style.formSammaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
  })(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to = {'/profile'}/>
    }

    return <div>
       <h1>LOGIN</h1>
       <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (props) => {
    isAuth: state.auth.isAuth;
}

export default connect(mapStateToProps, {login, }) (Login);