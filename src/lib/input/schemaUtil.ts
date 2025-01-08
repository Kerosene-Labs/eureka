import * as Yup from "yup";

/**
 * Adds some metadata required for our form validation.
 */
export function addFormMetadata(formId: string, schema: Yup.ObjectSchema<Yup.AnyObject>): Yup.ObjectSchema<Yup.AnyObject> {
  return Yup.object().shape({

  }).
}
