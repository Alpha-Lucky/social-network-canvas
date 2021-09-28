import React from 'react';
import styles from './login.module.css'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { loginThunk } from '../../../redux/authReducer';
import { Checked, createField, Input } from '../../common/FormControls/FormControls';
import { required } from '../../common/validation/validation';



const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        {createField("login", "email", Input, [required], { type: "text" })}
        {createField("password", "password", Input, [required], { type: "password" })}
        {props.error && <div className={styles.formError}>
            <span>{props.error}</span>
        </div>}
        <div>
            <Field component={Checked} name='rememberMe' type="checkbox" />
        </div>
        <div>
            <button className="submit">login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) { return <Redirect to={"/profile"} /> }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth
    })
}

export default connect(mapStateToProps, { loginThunk })(Login)