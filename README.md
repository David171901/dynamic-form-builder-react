# DynamicFormContainer

## Description
The DynamicFormContainer component is a container for dynamic forms that allows rendering and handling different forms with custom input fields. Below is the documentation for this component:

## Installation

```
npm i d-dynamic-form-builder-react
```

## Example
```

import { DynamicFormContainer, Form } from '../.';
import { InputProps } from '../dist/interfaces/interfaces';

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

1. <strong>formSchema (object)</strong><i>[required]</i>: An object that defines the structure of the form. Each property of the object represents a form, and its value is an array of InputProps objects that describe the input fields of the form.
2. <strong>formTitle (string)</strong><i>[required]</i>: The title of the form.
3. <strong>className (string)</strong><i>[optional]</i>
4. <strong>initialformdata (object)</strong><i>[optional]</i>
5. <strong>onSubmit (function)</strong><i>[optional]</i>

### formSchema (object)

| Property      | Type                                                              | Description                                                                                                              |
| ------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| type          | "text" \| "textarea" \| "email" \| "password" \| "radio-group" \| "select" \| "checkbox" \| "checkbox-group" \| "field-array" | The type of the input field.                                                                                             |
| name          | string                                                            | The name of the input field.                                                                                             |
| value         | string \| number \| boolean \| string[] \| DefaultJSON[]          | The value of the input field.                                                                                            |
| validations   | Validation[]                                                      | An array of validation rules for the input field.                                                                        |
| placeholder?  | string                                                            | (Optional) The placeholder text for the input field.                                                                     |
| typeValue?    | "string" \| "boolean" \| "array"                                  | (Optional) The type of the value property.                                                                               |
| label?        | string                                                            | (Optional) The label for the input field.                                                                                |
| options?      | Opt[]                                                             | (Optional) An array of options for select or radio-group input fields.                                                    |
| fields?       | Fields[]                                                          | (Optional) An array of fields for field-array input type. Each field is of type `Fields` which has properties similar to `InputProps`. |


<br>
<br>


| Interface | Properties | Description |
| --- | --- | --- |
| Opt | - `value`: string \| number<br>- `desc`: string | Represents an option.<br>- `value`: The value of the option.<br>- `desc`: The description of the option. |
| Fields | - `type`: "text"<br>- `name`: string<br>- `label`: string<br>- `placeholder?`: string | Represents a field.<br>- `type`: The type of the field.<br>- `name`: The name of the field.<br>- `label`: The label of the field.<br>- `placeholder?`: (Optional) The placeholder text for the field. |
| Validation | - `type`: "required" \| "isEmail" \| "minLength" \| "isTrue" \| "maxLength" \| "matches"<br>- `value?`: string \| number \| boolean \| RegExp<br>- `message`: string | Represents a validation rule for a field.<br>- `type`: The type of validation.<br>- `value?`: (Optional) The value for the validation.<br>- `message`: The validation error message. |
| DefaultJSON | `{ [key: string]: any }` | Represents a JSON object with any value types for its properties. |

<br>
