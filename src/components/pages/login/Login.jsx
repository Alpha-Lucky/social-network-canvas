import React from 'react';
import styles from './login.module.css'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { loginThunk } from '../../../redux/authReducer';
import { Checked, Input } from '../../common/FormControls/FormControls';
import { maxLengthCreating, required } from '../../common/validation/validation';

let maxLength30 = maxLengthCreating(30) 


const LoginForm = (props) => {
    return  <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="login" name="email" component={Input} validate={[required, maxLength30]} />
            </div>
            <div>
                <Field placeholder="password" name="password" component={Input} type="password"  validate={[required, maxLength30]}  />
            </div>
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
        props.loginThunk(formData.email, formData.password, formData.rememberMe )
    }

    if(props.isAuth){return <Redirect to={"/profile"} />}

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

export default connect(mapStateToProps, {loginThunk}) (Login)