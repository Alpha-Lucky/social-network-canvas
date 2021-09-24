import React from "react"
import style from './formControls.module.css'

const FormControl = ({ input, meta, child, ...props }) => {

    let hasError = meta.touched && meta.error

    return (
        <div>
            <div className={style.formControl + " " + (hasError ? style.error : " ")}>
                {props.children}
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
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

export default Textarea