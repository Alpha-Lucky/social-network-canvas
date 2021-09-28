import React from "react"
import { Field } from "redux-form"
import style from './formControls.module.css'

const FormControl = ({ input, meta: {touched, error}, ...props }) => {

    let hasError = touched && error

    return (
        <div>
            <div className={style.formControl + " " + (hasError ? style.error : " ")}>
                {props.children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>
    )
}

const Textarea = (props) => {
    const { input, meta, children, ...restProps } = props
    return <FormControl {...props}><textarea className={style.textariaProfile} {...input} {...restProps} /></FormControl>

}

export const Input = (props) => {
    const { input, meta, children, ...restProps } = props
    return <FormControl {...props}><input className={style.textariaProfile} {...input} {...restProps} /></FormControl>
}

export const Checked = (props) => {
    const { input, meta, children, ...restProps } = props
    return <FormControl {...props}><input className={style.checked} {...input} {...restProps} /><span>remember me</span> </FormControl>
}

export const createField = (placeholder, name, component, validate, props={}, text="") => (<div><Field placeholder={placeholder} 
    name={name}
    component={component}
    validate={validate}
    {...props}
    />
    </div>)


export default Textarea