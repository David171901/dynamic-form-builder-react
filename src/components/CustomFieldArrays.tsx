import React from 'react'
import { Field, ErrorMessage, FieldArray, useField } from "formik";
import { Fields } from "../interfaces/interfaces";
import styles from '../styles/styles.module.css'

interface Props {
  name: string;
  label: string;
  fields: Fields[];
  values: { [key: string]: any };
  [x: string]: any;
}

export const CustomFieldArrays = ({ label, ...props }: Props) => {
  return (
    <>
      <label className={styles.field__label}>
        {label}
      </label>
      <FieldArray {...props}>
        {({ push, remove }) => (
          <>
            {props.values[`${props.name}`].map(
              (_: { [key: string]: any }, index: number) => (
                <div key={index} className={styles.container__fields_array}>
                  {props.fields.map((input, indx) => (
                    <div key={`${props.name}${indx}`} style={{flexGrow: 1}}>
                      <label>{input.label}</label>
                      <Field
                        type="text"
                        className={styles.field_array__input}
                        name={`${props.name}[${index}].${input.name}`}
                        placeholder={`${input.placeholder}`}
                      />
                      <ErrorMessage
                        name={`${props.name}.${index}.${input.name}`}
                        component="span"
                      />
                    </div>
                  ))}
                  <div className={styles.container__button_remove}>
                    <button
                      type="button"
                      onClick={() => {
                        if (props.values[props.name].length > 1) remove(index)
                      }}
                      className={styles.button__remove_field}
                      disabled={props.values[props.name].length === 1}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              )
            )}
            <button
              className={styles.button__add_field}
              type="button"
              onClick={() =>
                push(
                  props.fields.reduce((acc: { [key: string]: any }, curr) => {
                    acc[curr.name] = "";
                    return acc;
                  }, {})
                )
              }
            >
              + Add new fields
            </button>
          </>
        )}
      </FieldArray>
    </>
  );
};
