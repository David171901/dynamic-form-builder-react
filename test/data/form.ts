import { InputProps } from '../../src/interfaces/interfaces';

export const form: { [x: string]: InputProps[] } = {
  login: [
    {
      type: 'text',
      name: 'name',
      label: 'Full Name',
      placeholder: 'Full Name',
      value: '',
      validations: [
        {
          type: 'required',
          message: 'Full Name is required',
        },
      ],
    },
    {
      type: 'email',
      name: 'email',
      label: 'E-mail',
      placeholder: 'E-mail',
      value: '',
      validations: [
        {
          type: 'required',
          message: 'Email is required',
        },
        {
          type: 'isEmail',
          message: 'Email no valid',
        },
      ],
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: '*******',
      value: '',
      validations: [
        {
          type: 'required',
          message: 'Password is required',
        },
      ],
    },
  ],
};
