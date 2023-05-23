import React from 'react'
import { ErrorMessage, useField } from "formik"
import styles from '../styles/styles.module.css'

interface Props {
  label: string;
  name: string;
  [x: string]: any;
}

export const CustomCheckBox = (props: Props) => {
  const [field] = useField(props);

  return (
    <>
      <div>
        <div className={styles.container__checkbox}>
          <label className={styles.checkbox__label}>
            <input
              type="checkbox"
              {...field}
              {...props}
              className={styles.checkbox__input}
              checked={field.value}
            />
            {props.label}
          </label>
        </div>

        <ErrorMessage
          name={props.name}
          component="span"
          className={styles.field__error}
        />
      </div>
    </>
  );
};
