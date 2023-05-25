import React from "react";
import styles from "../styles/styles.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage, FieldProps  } from "formik";
import { getFormattedDate } from "../utils/tools";

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  [x: string]: any;
}

export const CustomDatePicker = ({ label, ...props }: Props) => {
  return (
    <>
      <div>
        <label className={styles.field__label}>{label}</label>
        <Field name={props.name}>
          {({ form, field }: FieldProps) => {
            const { setFieldValue } = form;
            const { value } = field;
            return (
              <DatePicker
                id={props.name}
                {...field}
                {...props}
                selected={value}
                onChange={(val) => setFieldValue(props.name, val)}
                className={styles.input_date}
                value={getFormattedDate()}
              />
            );
          }}
        </Field>
        <ErrorMessage
          name={props.name}
          component="span"
          className={styles.field__error}
        />
      </div>
    </>
  );
};
