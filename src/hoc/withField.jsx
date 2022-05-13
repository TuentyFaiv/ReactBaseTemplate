/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { useField } from "formik";
import { useDatas } from "@hooks";

const withField = (InputComponent) => (
  forwardRef(({ label, file, data = {}, ...props }, ref) => {
    const [field, meta, helpers] = useField(props);
    const datas = useDatas(data);
    const error = Boolean(meta.touched && meta.error);
    const fileStyles = file ? " input--file" : "";

    return (
      <label
        ref={ref}
        htmlFor={props.id || props.name}
        data-error={error}
        data-error-msg={meta.error}
        data-readonly={props.readOnly}
        data-disabled={props.disabled}
        data-password={props.type === "password"}
        className={`input${fileStyles}`}
        {...datas}
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
