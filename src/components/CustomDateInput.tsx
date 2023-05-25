import React from "react";
import styles from "../styles/styles.module.css";
import { ErrorMessage, useField } from "formik";

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  [x: string]: any;
}

export const CustomDatePicker = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <>
      <div>
        <label className={styles.field__label}>{label}</label>
        <input
          type="date"
          {...field}
          {...props}
          className={styles.input_date}
        />
        <ErrorMessage
          name={props.name}
          component="span"
          className={styles.field__error}
        />
      </div>
    </>
  );
};
