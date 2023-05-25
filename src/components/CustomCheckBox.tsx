import React from 'react';
import { ErrorMessage, useField } from 'formik';
import styles from '../styles/styles.module.css';

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
        <div className={styles.checkbox_container}>
          <label className={styles.checkbox_label}>
            <input
              type="checkbox"
              {...field}
              {...props}
              className={styles.checkbox_input}
              checked={field.value}
            />
            {props.label}
          </label>
        </div>

        <ErrorMessage
          name={props.name}
          component="span"
          className={styles.error_field}
        />
      </div>
    </>
  );
};
