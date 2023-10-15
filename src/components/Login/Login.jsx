import React from 'react';
import { Field } from 'redux-form';
import reduxForm from 'redux-form';
import { Input } from '../commen/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import style from './../commen/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} 
                validate={[required]}
                component = {Input} />
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} 
                type={'password'}
                validate={[required]}
                component = {Input} />
            </div>
            <div>
                <Field component ={Input} name={'rememberMe'} placeholder={'checkbox'} /> remember me
            </div>
            { props.error && <div className={style.formSammaryError}>
                {props.error}
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