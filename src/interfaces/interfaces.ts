// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DefaultJSON = { [key: string]: any }

export interface InputProps {
  type:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "text"
    | "color"
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
  type: "text" | "textarea"
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
    | "isUrl"
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
