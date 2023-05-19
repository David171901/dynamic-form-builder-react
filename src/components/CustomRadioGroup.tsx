import React from 'react'
import { useField, ErrorMessage } from "formik"
import styles from '../styles/styles.module.css'

type Opt = { value: string | number; desc: string };

interface Props {
  options: Opt[];
  name: string;
  label: string;
  [x: string]: any;
}

export const CustomRadioGroup = ({ label, options, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <div>
        <label className={styles.field__label}>
          {label}
        </label>
        {options.map((opt) => (
            <div key={opt.value} className={styles.container__checkbox}>
                <label className={styles.checkbox__label}>
                    <input
                    {...field}
                    {...props}
                    type="radio"
                    checked={opt.value === field.value}
                    value={opt.value}
                    className={styles.checkbox__input}
                    />
                    {opt.desc}
                </label>
            </div>
        ))}
        <ErrorMessage name={props.name} component="span" className={styles.field__error} />
      </div>
    </>
  );
};
