import { Field, ErrorMessage } from "formik";
import withField from "@hoc/withField";

import "@stylesComponents/Input.scss";

const Input = ({ error, field, ...props }) => (
  <input
    id={props.id || props.name}
    className="input__input"
    data-error={error}
    {...field}
    {...props}
  />
);

const Area = ({ error, field, ...props }) => (
  <textarea
    id={props.id || props.name}
    data-error={error}
    className="input_area"
    {...field}
    {...props}
  />
);

export const Chechbox = ({ name, label, checked }) => (
  <label htmlFor={name} data-checked={checked} className="input input--check">
    <Field type="checkbox" id={name} name={name} className="input__checkbox" />
    <ErrorMessage component="span" name={name} className="input__checkbox-error" />
    <span className="input__text">
      {label}
    </span>
  </label>
);

export const TextArea = withField(Area);

export default withField(Input);
