import React from 'react';
import { createContext, useState } from 'react';
import {
  DefaultJSON,
  FormContextProps,
  FormHandlers,
  InputProps,
} from '../interfaces/interfaces';

export const FormContext = createContext({} as FormContextProps);
const { Provider } = FormContext;

export interface Props {
  children: (args: FormHandlers) => JSX.Element;
  formSchema: { [x: string]: InputProps[] };
  formTitle: string;
  className?: string;
  initialformdata?: DefaultJSON;
  onSubmit?: (values: DefaultJSON) => void;
}

export const DynamicFormContainer = ({
  children,
  formSchema,
  className,
  formTitle,
  initialformdata,
  onSubmit,
}: Props) => {
  const [values, setvalues] = useState<DefaultJSON>({});

  return (
    <Provider
      value={{
        formSchema,
        formTitle,
        setvalues,
        values,
        className,
        initialformdata,
        onSubmit,
      }}
    >
      <>
        {children({
          values,
        })}
      </>
    </Provider>
  );
};
