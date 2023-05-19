import React from 'react'
import { Form as FormFormik, Formik } from "formik"
import { getInputs } from "../utils"
import { FormContext } from "./DynamicFormContainer"
import { useContext } from "react"
import styles from '../styles/styles.module.css'
import { Layout } from './Layout'
import { CustomSelect } from './CustomSelect'
import { CustomRadioGroup } from './CustomRadioGroup'
import { CustomCheckboxGroup } from './CustomCheckboxGroup'
import { CustomCheckBox } from './CustomCheckBox'
import { CustomFieldArrays } from './CustomFieldArrays'
import { CustomTextarea } from './CustomTextarea'
import { CustomTextInput } from './CustomInput'

export const Form = () => {

  const { formSchema, setvalues, formTitle, className, onSubmit: callback, initialformdata } = useContext(FormContext)
  const { initialValues, inputs, validationSchema } = getInputs("login", formSchema, initialformdata);

  return (
    <Layout title={formTitle} className={className}>
      <Formik
        {...{ initialValues, validationSchema }}
        onSubmit={(values) => {
          if(callback) callback(values)
          setvalues(values);
        }}
      >
        {({ values }) => (
          <FormFormik noValidate>
            {inputs.map(({ name, type, ...props }) => {
              switch (type) {
                case "select":
                  return (
                    <CustomSelect
                      key={name}
                      label={props.label!}
                      name={name}
                      options={props.options!}
                    />
                  );

                case "radio-group":
                  return (
                    <CustomRadioGroup
                      label={props.label!}
                      name={name}
                      options={props.options!}
                      key={name}
                    />
                  );

                case "checkbox-group":
                  return (
                    <CustomCheckboxGroup
                      label={props.label!}
                      name={name}
                      options={props.options!}
                      key={name}
                    />
                  );

                case "checkbox":
                  return (
                    <CustomCheckBox
                      label={props.label!}
                      key={name}
                      name={name}
                    />
                  );

                case "field-array":
                  return (
                    <CustomFieldArrays
                      label={props.label!}
                      key={name}
                      name={name}
                      fields={props.fields!}
                      values={values}
                    />
                  );

                case "textarea":
                  return (
                    <CustomTextarea
                      label={props.label!}
                      key={name}
                      name={name}
                      placeholder={props.placeholder}
                      type={type}
                    />
                  );

                default:
                  return (
                    <CustomTextInput
                      label={props.label!}
                      key={name}
                      name={name}
                      placeholder={props.placeholder}
                      type={type}
                    />
                  );
              }
            })}
            <button
              className={styles.button__send}
              type="submit"
              style={{background: "#2980B9"}}
            >
              SEND
            </button>
          </FormFormik>
        )}
      </Formik>
    </Layout>
  );
};
