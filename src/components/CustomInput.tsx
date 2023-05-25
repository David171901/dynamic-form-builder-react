import React from 'react';
import { ErrorMessage, useField } from 'formik';
import styles from '../styles/styles.module.css';

interface Props {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  [x: string]: any;
}

export const CustomTextInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <div>
        <label className={styles.label_field}>{label}</label>
        <input className={styles.input_field} {...field} {...props} />
        <ErrorMessage
          name={props.name}
          component="span"
          className={styles.error_field}
        />
      </div>
    </>
  );
};
