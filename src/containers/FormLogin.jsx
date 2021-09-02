import { Formik, Form } from "formik";
import { LoginSchema } from "@schemas";

import Input from "@components/Input";

export default function FormLogin({ boot: { login: boot, formik: bootFormik } }) {

  const handleSubmit = async (values) => {
    try {
      console.log(values);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={LoginSchema(bootFormik)}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <Input
            label={boot.email}
            name="email"
            type="text"
            placeholder={boot.email}
          />
          <Input
            label={boot.passowrd}
            name="password"
            type="password"
            placeholder={boot.passowrd}
          />
          <button
            type="submit"
            disabled={(isSubmitting || Object.keys(errors).length > 0)}
          >
            {boot.submit}
          </button>
        </Form>
      )}
    </Formik>
  );
}
