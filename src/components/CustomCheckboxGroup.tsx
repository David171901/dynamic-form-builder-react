import React from 'react';
import { ErrorMessage, Field, useField } from 'formik';
import styles from '../styles/styles.module.css';

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
        <label className={styles.label_field}>{label}</label>
        {options.map(opt => (
          <div className={styles.checkbox_container} key={opt.value}>
            <label className={styles.checkbox_label}>
              <Field
                {...field}
                {...props}
                type="checkbox"
                name={props.name}
                value={opt.value}
                className={styles.checkbox_input}
              />
              {opt.desc}
            </label>
          </div>
        ))}
        <ErrorMessage
          name={props.name}
          component="span"
          className={styles.error_field}
        />
      </div>
    </>
  );
};
