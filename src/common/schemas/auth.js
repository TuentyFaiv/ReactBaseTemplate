import * as Yup from "yup";

export const ForgotSchema = (boot) => Yup.object().shape({
  email: Yup.string().required(boot.required)
});

export const DEFAULT_FORGOT_VALUES = {
  email: ""
};

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
  email: Yup.string().email(boot.email).required(boot.required),
  phoneNumber: Yup.string().required(boot.required),
  phoneCode: Yup.string().required(boot.required),
  password: Yup.string().required(boot.required),
  confirmPassword: Yup.string().required(boot.required),
  terms: Yup.boolean().oneOf([true], boot.requiredTerms)
});

export const DEFAULT_SIGNUP_VALUES = {
  firstName: "",
  lastName: "",
  country: "",
  email: "",
  phoneNumber: "",
  phoneCode: "",
  password: "",
  confirmPassword: "",
  terms: false
};
