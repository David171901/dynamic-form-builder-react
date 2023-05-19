```

import { DynamicFormContainer, Form } from '../.';
import { InputProps } from '../dist/interfaces/interfaces';

const App = () => {

  const forms : { [x: string]: InputProps[] } = {
    login: [
      {
        type: "text",
        name: "name",
        label: "Full Name",
        placeholder: "Full Name",
        value: "",
        validations: [
          {
            type: "minLength",
            value: 3,
            message: "Min. 3 characters",
          },
          {
            type: "maxLength",
            value: 15,
            message: "Max. 15 characters",
          },
          {
            type: "required",
            message: "Full Name is required",
          },
        ],
      },
      {
        type: "textarea",
        name: "description",
        label: "Description",
        value: "",
        placeholder:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        validations: [
          {
            type: "required",
            message: "Description is required",
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
        type: "select",
        name: "rol",
        label: "Select an option: ",
        value: "",
        options: [
          {
            value: "admin",
            desc: "Admin",
          },
          {
            value: "user",
            desc: "User",
          },
          {
            value: "super-admin",
            desc: "Super Admin",
          },
        ],
        validations: [
          {
            type: "required",
            message: "Rol is required",
          },
        ],
      },
      {
        type: "radio-group",
        name: "gender",
        label: "Gender: ",
        value: "man",
        options: [
          {
            value: "man",
            desc: "Man",
          },
          {
            value: "woman",
            desc: "Woman",
          },
          {
            value: "other",
            desc: "Other",
          },
        ],
        validations: [
          {
            type: "required",
            message: "Gender is required",
          },
        ],
      },
        {
          type: "checkbox-group",
          name: "numbers",
          label: "Numbers: ",
          value: [],
          typeValue: "array",
          options: [
            {
              value: "one",
              desc: "One",
            },
            {
              value: "two",
              desc: "Two",
            },
            {
              value: "three",
              desc: "Three",
            },
            {
              value: "four",
              desc: "Four",
            },
          ],
          validations: [
            {
              type: "minLength",
              value: 2,
              message: "Select at least two options",
            },
          ],
        },
        {
          type: "password",
          name: "password",
          label: "Password",
          placeholder: "Password",
          value: "",
          validations: [
            {
              type: "required",
              message: "Password is required",
            },
          ],
        },
        {
          type: "checkbox",
          name: "terms",
          typeValue: "boolean",
          label: "Terms and Conditions",
          value: false,
          validations: [
            {
              type: "isTrue",
              message: "Accept the terms!",
            },
          ],
        },
        {
          type: "field-array",
          name: "items",
          typeValue: "array",
          label: "Items",
          value: [
            {
              title: "",
              desc: "",
            },
          ],
          validations: [],
          fields: [
            {
              type: "text",
              name: "title",
              label: "Title",
              placeholder: "Title",
            },
            {
              type: "text",
              name: "desc",
              label: "Description",
              placeholder: "Description",
            },
            {
              type: "text",
              name: "users",
              label: "Users",
              placeholder: "Username",
            },
          ],
        },
    ],
  };

  return (
    <>
      <DynamicFormContainer
        formSchema={forms}
        formTitle={"Formulario"}
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