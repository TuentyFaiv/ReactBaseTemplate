import { forwardRef } from "react";
import { useField } from "formik";

const withField = (InputComponent) => (
  // eslint-disable-next-line react/display-name
  forwardRef(({ label, file, ...props }, ref) => {
    const [field, meta, helpers] = useField(props);
    const error = Boolean(meta.touched && meta.error);
    const fileStyles = file ? " input--file" : "";

    return (
      <label
        htmlFor={props.id || props.name}
        ref={ref}
        data-readonly={props.readOnly}
        data-error={error}
        data-error-msg={meta.error}
        data-disabled={props.disabled}
        className={`input${fileStyles}`}
      >
        <InputComponent
          error={error}
          field={field}
          meta={meta}
          helpers={helpers}
          label={label}
          {...props}
        />
        <p
          className="input__text"
          title={meta.error}
          data-error={error}
          data-error-msg={error ? ` | ${meta.error}` : null}
        >
          {label}
        </p>
      </label>
    );
  })
);

export default withField;
