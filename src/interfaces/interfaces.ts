// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DefaultJSON = { [key: string]: any }

export interface InputProps {
  type:
    | "text"
    | "textarea"
    | "email"
    | "password"
    | "radio-group"
    | "select"
    | "checkbox"
    | "checkbox-group"
    | "field-array";
  name: string;
  value: string | number | boolean | string[] | DefaultJSON[]
  validations: Validation[]
  placeholder?: string
  typeValue?: "string" | "boolean" | "array"
  label?: string
  options?: Opt[]
  fields?: Fields[]
}

export interface Opt {
  value: string | number
  desc: string
}

export interface Fields {
  type: "text"
  name: string
  label: string
  placeholder?: string
}

export interface Validation {
  type:
    | "required"
    | "isEmail"
    | "minLength"
    | "isTrue"
    | "maxLength"
    | "matches"
  value?: string | number | boolean | RegExp
  message: string
}

export interface FormContextProps {
  formSchema: { [x: string]: InputProps[] }
  formTitle: string
  setvalues: React.Dispatch<React.SetStateAction<DefaultJSON>>
  values: { [x: string]: InputProps[] }
  className?: string
  initialformdata?: DefaultJSON
  onSubmit?: ((args: { [x: string]: string }) => void) | undefined
}

export interface FormHandlers {
  values: DefaultJSON
}
