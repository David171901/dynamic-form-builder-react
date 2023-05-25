# Component for dynamic forms with React + Formik

- [Description](#enlace-1)
- [Installation](#enlace-2)
- [Example](#enlace-3)
- [Props](#enlace-3)
- [Inputs](#enlace-4)
  - [h1 h2 h3 h4 h5 h6](#enlace-4-1)
  - [text](#enlace-4-2)
  - [password](#enlace-4-3)
  - [textarea](#enlace-4-4)
  - [color](#enlace-4-5)
  - [radio-group](#enlace-4-6)
  - [select](#enlace-4-7)
  - [checkbox](#enlace-4-8)
  - [date](#enlace-4-9)
  - [checkbox-group](#enlace-4-10)

## Description
The Dynamic "d-dynamic-form-builder-react" is a container for dynamic forms that allows rendering and handling different forms with custom input fields.

## Installation

```
npm i d-dynamic-form-builder-react
```

## Example
### Typescript
```
import { DynamicFormContainer, Form } from 'd-dynamic-form-builder-react';
import { InputProps } from 'd-dynamic-form-builder-react/dist/interfaces/interfaces';

const App = () => {

  const forms: { [x: string]: InputProps[] } = {
    login: [
      {
        type: "text",
        name: "name",
        label: "Full Name",
        placeholder: "Full Name",
        value: "",
        validations: [
          {
            type: "required",
            message: "Full Name is required",
          },
        ],
      },
      {
        type: "email",
        name: "email",
        label: "E-mail",
        placeholder: "E-mail",
        value: "",
        validations: [
          {
            type: "required",
            message: "Email is required",
          },
          {
            type: "isEmail",
            message: "Email no valid",
          },
        ],
      },
      {
        type: "password",
        name: "password",
        label: "Password",
        placeholder: "*******",
        value: "",
        validations: [
          {
            type: "required",
            message: "Password is required",
          },
        ],
      },
    ],
  };

  return (
    <>
      <DynamicFormContainer
        formSchema={forms}
        formTitle={"Form"}
      >
        {(values) => (
          <>
            <Form />
          </>
        )}
      </DynamicFormContainer>
    </>
  );
};
```

## Props

1. formSchema (array) [required]: An array of objects that define the form fields. Each object should have the following properties:
- type (string): The type of the field. Valid types are text, number, select, and checkbox.
- name (string): The name of the field.
- value (string | number | boolean | string[] | DefaultJSON[]): The initial value for the field.
- validations (array): An array of validation rules for the field.
- placeholder (string): The placeholder text for the field.
- typeValue (string | boolean | array | date): The type of the field value.
- label (string): The label for the field.
- options (array): An array of options for the select field.
- fields (array): An array of nested form fields.
2. formTitle (string) [required]: The title of the form.
3. className (string) [optional]: The CSS class name for the form container.
4. onSubmit (function) [optional]: A function that is called when the form is submitted. The function will receive an object with the form data as the only argument.
5. initialformdata (object) [optional] The initial values for the form fields.

| Property      | Type                                                              | Description                                                                                                              |
| ------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| type          | "text" \| "textarea" \| "email" \| "password" \| "radio-group" \| "select" \| "checkbox" \| "checkbox-group" \| "field-array" | The type of the input field.                                                                                             |
| name          | string                                                            | The name of the input field.                                                                                             |
| value         | string \| number \| boolean \| string[] \| DefaultJSON[]          | The value of the input field.                                                                                            |
| validations   | Validation[]                                                      | (Optional) An array of validation rules for the input field.                                                                        |
| placeholder?  | string                                                            | (Optional) The placeholder text for the input field.                                                                     |
| typeValue?    | "string" \| "boolean" \| "array"                                  | (Optional) The type of the value property.                                                                               |
| label?        | string                                                            | (Optional) The label for the input field.                                                                                |
| options?      | Opt[]                                                             | (Optional) An array of options for select or radio-group input fields.                                                    |
| fields?       | Fields[]                                                          | (Optional) An array of fields for field-array input type. Each field is of type `Fields` which has properties similar to `InputProps`. |

<br>

| Interface | Properties | Description |
| --- | --- | --- |
| Opt | - `value`: string \| number<br>- `desc`: string | Represents an option.<br>- `value`: The value of the option.<br>- `desc`: The description of the option. |
| Fields | - `type`: "text"<br>- `name`: string<br>- `label`: string<br>- `placeholder?`: string | Represents a field.<br>- `type`: The type of the field.<br>- `name`: The name of the field.<br>- `label`: The label of the field.<br>- `placeholder?`: (Optional) The placeholder text for the field. |
| Validation | - `type`: "required" \| "isEmail" \| "minLength" \| "isTrue" \| "maxLength" \| "matches" \| "isUrl" \| "maxDate" \| "minDate"<br>- `value?`: string \| number \| boolean \| RegExp \| Date<br>- `message`: string | Represents a validation rule for a field.<br>- `type`: The type of validation.<br>- `value?`: (Optional) The value for the validation.<br>- `message`: The validation error message. |
| DefaultJSON | `{ [key: string]: any }` | Represents a JSON object with any value types for its properties. |

<br>

### h1 h2 h3 h4 h5 h6
- type (required): The type of the heading. Possible values: "h1", "h2", "h3", "h4", "h5", "h6"
- name (required): The name of the heading.
- value (required): The value of the heading.

### text
- type (required): The type of the input field.
  Value: "text"
- name (required): The name of the input field.
- value (required): The default value of the input field.
- label (optional): The label for the input field.
- placeholder (optional): The placeholder text for the input field.
- validations (optional): An array of validation rules for the input field.
  Possible validation types: isEmail, isUrl, minLength, maxLength, matches, required

### password
- type (required): The type of the input field.
  Value: "password"
- name (required): The name of the input field.
- value (required): The default value of the input field.
- label (optional): The label for the input field.
- validations (optional): An array of validation rules for the input field.
  Possible validation types: minLength, maxLength, matches, required
  
### textarea
- type (required): The type of the input field.
  Value: "textarea"
- name (required): The name of the input field.
- value (required): The default value of the input field.
- label (optional): The label for the input field.
- validations (optional): An array of validation rules for the input field.
  Possible validation types: minLength, maxLength, required

### color
- type (required): The type of the input field.
  Value: "color"
- name (required): The name of the input field.
- value (required): The default value of the input field. ("#000000") Important!
- label (optional): The label for the input field.

### radio-group
- type (required): The type of the input field.
  Value: "radio-group"
- name (required): The name of the input field.
- value (required): The default selected value of the radio group.
- options (required): An array of options for the radio group input field. Each option should have a value and desc.

### select 
- type (required): The type of the input field.
  Value: "select"
- name (required): The name of the input field.
- value (required): The default selected value of the select field.
- label (optional): The label for the input field.
- options (required): An array of options for the select input field. Each option should have a value and desc.
- validations (optional): An array of validation rules for the input field.
  Possible validation types: required, minLength, maxLength

### checkbox
- type (required): The type of the input field.
  Value: "checkbox"
- name (required): The name of the input field.
- typeValue (optional): The type of the value property.
- value (required): The default selected value of the radio group.
  Possible values: True, False
- label (optional): The label for the input field.
- value (required): The default value of the checkbox.
- validations (optional): An array of validation rules for the input field.
  Possible validation types: isTrue

### date
- type (required): The type of the input field.
  Value: "date"
- name (required): The name of the input field.
- label (optional): The label for the input field.
- value (required): The default value of the date field.
- typeValue (optional): The type of the value property.
- validations (optional): An array of validation rules for the input field.
- Possible validation types: maxDate, minDate, required

### checkbox-group
- type (required): The type of the input field.
  Value: "checkbox-group"
- name (required): The name of the input field.
- label (optional): The label for the input field.
- value (required): The default value of the checkbox group, represented as an array.
- typeValue (optional): The type of the value property.
- options (required): An array of options for the checkbox group input field. Each option should have a value and desc.
- validations (optional): An array of validation rules for the input field.
  Possible validation types: minLength, maxLength, required