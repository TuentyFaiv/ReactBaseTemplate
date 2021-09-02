import { useField } from "formik";

import "@stylesComponents/Input.scss";

const Input = ({ label, inputRef = null, readonly = false, setFieldValue = null, ...props }) => {
  const [field, meta] = useField(props);
  const error = Boolean(meta.touched && meta.error);

  return (
    <label htmlFor={props.id || props.name} ref={inputRef} data-readonly={readonly} className="input">
      <input
        id={props.name}
        className="input__input"
        data-error={error}
        {...field}
        {...props}
      />
      <p
        className="input__text"
        title={meta.error}
        data-error={error}
      >
        {label}
        {error ? ` | ${meta.error}` : null}
      </p>
    </label>
  );
};

export default Input;
