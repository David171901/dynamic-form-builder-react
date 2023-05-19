import React from 'react'
import { ErrorMessage, useField } from "formik"
import styles from '../styles/styles.module.css'

interface Props {
    options: Opt[]
    label: string;
    name: string;
    [x: string]: any
}

type Opt = { value: string | number, desc: string }

export const CustomSelect = ({ label, ...props }: Props) => {
    const [field] = useField(props)

    return (
        <>
            <div>
                <label className={styles.field__label}>{label}</label>
                <select {...field} {...props} className={styles.field__input}>
                    <option value="">--- Select ---</option>
                    {
                        props.options.map(({ desc, value }) => (
                            <option
                                value={value}
                                key={value}
                            >{desc}</option>
                        ))
                    }
                </select>
                <ErrorMessage name={props.name} component="span" className={styles.field__error} />
            </div>
        </>
    )
}
