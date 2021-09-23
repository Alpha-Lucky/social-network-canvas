import React from 'react';
import { Field, reduxForm } from 'redux-form';



const LoginForm = (props) => {
    
    return  <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="login" name={'login'} component={'input'} />
            </div>
            <div>
                <Field placeholder="password" name={'password'} component={'input'}  />
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={"checkbox"} />
                <span>remember me</span>
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}


export default Login