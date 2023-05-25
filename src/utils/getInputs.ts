import * as Yup from "yup";
import { AnyObject, Maybe } from "yup/lib/types";
import { TypeOfShape } from "yup/lib/object";
import { DefaultJSON, InputProps } from "../interfaces/interfaces";

type YupBoolean = Yup.BooleanSchema<
  boolean | undefined,
  AnyObject,
  boolean | undefined
>;
type YupString = Yup.StringSchema<
  string | undefined,
  AnyObject,
  string | undefined
>;
type YupArray = Yup.ArraySchema<
  Yup.ObjectSchema<{
    myString: Yup.StringSchema<string>;
    myNumber: Yup.NumberSchema<number>;
  }>,
  AnyObject,
  Maybe<
    TypeOfShape<{
      myString: Yup.StringSchema<string, AnyObject, string>;
      myNumber: Yup.NumberSchema<number, AnyObject, number>;
    }>[]
  >
>;

type YupDate = Yup.DateSchema<Date | undefined, AnyObject, Date | undefined>;

const generateValidations = (field: InputProps) => {
  let schema: YupBoolean | YupString | YupArray | YupDate =
    Yup[field.typeValue ? field.typeValue : "string"]();
  if (field.validations) {
    for (const rule of field.validations) {
      switch (rule.type) {
        case "isTrue":
          schema = (schema as YupBoolean).isTrue(rule.message);
          break;
        case "isEmail":
          schema = (schema as YupString).email(rule.message);
          break;
        case "isUrl":
          schema = (schema as YupString).url(rule.message);
          break;
        case "minLength":
          schema = (schema as YupString | YupArray).min(
            rule?.value as number,
            rule.message
          );
          break;
        case "maxLength":
          schema = (schema as YupString | YupArray).max(
            rule.value as number,
            rule.message
          );
          break;
        case "matches":
          schema = (schema as YupString).matches(
            rule.value as RegExp,
            rule.message
          );
          break;
        case "maxDate":
          schema = (schema as YupDate).max(
            rule.value as RegExp,
            rule.message
          );
          break;
        case "minDate":
            schema = (schema as YupDate).min(
              rule.value as RegExp,
              rule.message
            );
          break;
        default:
          schema = schema.required(rule.message);
          break;
      }
    }
  }

  return schema;
};

export const getInputs = (
  section: string,
  form: { [x: string]: InputProps[] },
  initialformdata?: DefaultJSON
) => {
  let initialValues: DefaultJSON = {};

  const validationsFields: DefaultJSON = {};

  for (const field of form[section]) {
    if (!["h1", "h2", "h3", "h4", "h5", "h6"].includes(field.type)) {
      if (initialformdata) initialValues = initialformdata;
      else initialValues[field.name] = field.value;

      if (!field.validations) continue;

      const schema = generateValidations(field);

      validationsFields[field.name] = schema;
    }
  }

  return {
    validationSchema: Yup.object({ ...validationsFields }),
    initialValues,
    inputs: form[section],
  };
};
