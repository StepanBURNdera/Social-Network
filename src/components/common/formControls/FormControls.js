import React from 'react'
import style from './FormControl.module.css'

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.error && meta.touched;
    return(
        <div className={style.formControl + " " + (hasError ? style.error:"")}>
            <div>
                {props.children}
            </div>
            {hasError && <span className={style.error}>{meta.error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input}{...restProps}/></FormControl>
};