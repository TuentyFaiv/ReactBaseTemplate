import * as Yup from "yup";

export const ContactSchema = (boot) => Yup.object().shape({
  name: Yup.string().required(boot.required),
  phone: Yup.string().matches().required(boot.required),
  email: Yup.string().email(boot.email).required(boot.required),
  message: Yup.string().max(200),
  subject: Yup.string().max(80),
  terms: Yup.boolean().oneOf([true], boot.requiredTerms)
});

export const DEFAULT_CONTACT_VALUES = {
  name: "",
  phone: "",
  email: "",
  message: "",
  subject: "",
  terms: false
};
