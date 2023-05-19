import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DynamicFormContainer, Form } from '../.';
import { InputProps } from '../dist/interfaces/interfaces';

const Example2 = () => {
  const forms: { [x: string]: InputProps[] } = {
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

  const initialformdata = {
    name: 'John Doe',
    email: 'john.doe@email.com',
    password: '123456789',
  };

  return (
    <>
      <DynamicFormContainer
        formSchema={forms}
        formTitle={'Formulario'}
        initialformdata={initialformdata}
        onSubmit={async values => {
            function getValues() {
              console.log(values);
            }
            setTimeout(getValues, 2000);
        }}
        className='container mx-auto'
      >
        {({values}) => (
          <>
            <Form />
          </>
        )}
      </DynamicFormContainer>
    </>
  );
};

ReactDOM.render(<Example2 />, document.getElementById('root'));