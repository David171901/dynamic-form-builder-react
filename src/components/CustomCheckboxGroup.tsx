import React from 'react'
import { ErrorMessage, Field, useField } from "formik"
import styles from '../styles/styles.module.css'

type Opt = { value: string | number; desc: string };

interface Props {
  options: Opt[];
  name: string;
  label: string;
  [x: string]: any;
}

export const CustomCheckboxGroup = ({ label, options, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <div>
        <label className={styles.field__label}>
          {label}
        </label>
        {options.map((opt) => (
          <div className={styles.container__checkbox} key={opt.value}>
            <label className={styles.checkbox__label}>
              <Field
                {...field}
                {...props}
                type="checkbox"
                name={props.name}
                value={opt.value}
                className={styles.checkbox__input}
              />
              {opt.desc}
            </label>
          </div>
        ))}
        <ErrorMessage
          name={props.name}
          component="span"
          className={styles.field__error}
        />
      </div>
    </>
  );
};
