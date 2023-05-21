import React from 'react'
import { useField } from "formik";
import styles from '../styles/styles.module.css'

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  [x: string]: any;
}
export const CustomColorInput = ({ label, ...props }: Props) => {
  const [field] = useField(props);

  return (
    <div>
      <label className={styles.field__label}>{label}</label>
      <input  className={styles.color} {...field} {...props} type="color" />
    </div>
  );
};
