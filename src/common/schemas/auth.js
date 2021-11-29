import * as Yup from "yup";

export const SigninSchema = (boot) => Yup.object().shape({
  email: Yup.string().required(boot.required),
  password: Yup.string().required(boot.required)
});

export const DEFAULT_SIGNIN_VALUES = {
  email: "",
  password: ""
};

export const SignupSchema = (boot) => Yup.object().shape({
  firstName: Yup.string().required(boot.required),
  lastName: Yup.string().required(boot.required),
  country: Yup.string().required(boot.required),
  email: Yup.string().email().required(boot.required),
  phoneNumber: Yup.string().required(boot.required),
  phoneCode: Yup.string().required(boot.required),
  password: Yup.string().required(boot.required),
  passwordConfirm: Yup.string().required(boot.required),
  terms: Yup.boolean().oneOf([true], boot.requiredTerms)
});

export const ForgotSchema = (boot) => Yup.object().shape({
  email: Yup.string().required(boot.required)
});
