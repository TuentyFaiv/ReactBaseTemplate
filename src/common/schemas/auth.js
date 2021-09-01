import * as Yup from "yup";

export const LoginSchema = (boot) => Yup.object().shape({
  email: Yup.string().required(boot.required),
  password: Yup.string().required(boot.required)
});

export const RegisterSchema = (boot) => Yup.object().shape({
  firstName: Yup.string().required(boot.required),
  lastName: Yup.string().required(boot.required),
  country: Yup.string().required(boot.required),
  email: Yup.string().required(boot.required),
  phoneNumber: Yup.string().required(boot.required),
  phoneCode: Yup.string().required(boot.required),
  password: Yup.string().required(boot.required),
  passwordConfirm: Yup.string().required(boot.required)
});

export const ForgotSchema = (boot) => Yup.object().shape({
  email: Yup.string().required(boot.required)
});
