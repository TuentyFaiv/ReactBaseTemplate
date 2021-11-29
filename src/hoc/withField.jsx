import { forwardRef } from "react";
import { useField } from "formik";

const withField = (InputComponent) => (
  // eslint-disable-next-line react/display-name
  forwardRef(({ label, ...props }, ref) => {
    const [field, meta] = useField(props);
    const error = Boolean(meta.touched && meta.error);

    return (
      <label
        htmlFor={props.id || props.name}
        ref={ref}
        data-readonly={props.readOnly}
        data-error={error}
        data-error-msg={meta.error}
        className="input"
      >
        <InputComponent
          error={error}
          field={field}
          meta={meta}
          label={label}
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
  })
);

export default withField;
