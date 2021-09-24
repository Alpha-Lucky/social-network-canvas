import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Checked, Input } from '../../common/FormControls/FormControls';
import { maxLengthCreating, required } from '../../common/validation/validation';

let maxLength10 = maxLengthCreating(10) 


const LoginForm = (props) => {
    
    return  <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="login" name={'login'} component={Input} validate={[required, maxLength10]} />
            </div>
            <div>
                <Field placeholder="password" name={'password'} component={Input} validate={[required, maxLength10]}  />
            </div>
            <div>
                <Field component={Checked} name={'rememberMe'} type={"checkbox"} />
            </div>
            <div>
                <button className="submit">login</button>
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