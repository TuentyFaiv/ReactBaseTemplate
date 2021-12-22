import { useState } from "react";
import { Field, ErrorMessage } from "formik";
import withField from "@hoc/withField";

import "@stylesComponents/Input.scss";

import IconEye from "@icons/icon-eye.svg";

const Input = ({ error, field, type, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <input
        id={props.id || props.name}
        className="input__input"
        data-error={error}
        type={(type === "password" && showPassword) ? "text" : type}
        {...field}
        {...props}
      />
      {type === "password" && (
        <button
          type="button"
          className="input__show"
          onClick={() => setShowPassword(!showPassword)}
        >
          <img src={IconEye} alt="" className="input__show-icon" />
        </button>
      )}
    </>
  );
};

const Area = ({ error, field, ...props }) => (
  <textarea
    id={props.id || props.name}
    data-error={error}
    className="input__area"
    {...field}
    {...props}
  />
);

export const Checkbox = ({ children, name, label, label2 = null, checked }) => (
  <label htmlFor={name} data-checked={checked} className="input input--check">
    <Field type="checkbox" id={name} name={name} className="input__checkbox" />
    <ErrorMessage component="span" name={name} className="input__checkbox-error" />
    <span className="input__text">
      {label}
      {children}
      {label2}
    </span>
  </label>
);

export const TextArea = withField(Area);

export default withField(Input);
