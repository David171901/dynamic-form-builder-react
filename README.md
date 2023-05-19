# Dynamic Form Component using JSON and Formik

## Description
This custom React component is designed to provide additional functionality to our application by offering a dynamic form creation feature. It utilizes a JSON object as the initial value and leverages the Formik library for form management.

## Features

- **Dynamic Form Generation:** The component dynamically generates a form based on the provided JSON object, allowing for flexible and customizable forms.

- **Form Validation:** It supports form validation using Formik's validation schema, ensuring data integrity and error handling.

- **Form Submission:** The component handles form submission and provides an interface to perform actions or send data to a server.

## Installation
To use this dynamic form component in your React project, follow these steps:

1. Install the package via npm or yarn by running the following command:

npm install dynamic-form-builder-react

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
            {JSON.stringify(values)}
          </>
        )}
      </DynamicFormContainer>
    </>
  );
};

```


## Props
1. formSchema (object): The initial form values represented as a JSON object.
2. formTitle (string) 
3. className (string) [optional]
4. initialformdata (object) [optional]
5. onSubmit (function) [optional]

action (function): A callback function invoked when the form is submitted. It receives the form values as an argument.
className (string)
title (string)