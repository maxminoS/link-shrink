import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const App = () => {
  return (
    <Formik initialValues={{ url: "" }}
            validationSchema={Yup.object({ url: Yup.string().url().required("Required") })}
            onSubmit={values => {
              fetch("http://localhost:5000/api/abridge", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-Type": "application/json" },
              })
            }}
    >
    {
      formik => {
        return (
          <Form>
            <label htmlFor="url">URL</label>
            <Field type="text" id="url" name="url" />
            <ErrorMessage name="url" />
            <button type="submit" disabled={!formik.isValid}>Submit</button>
          </Form>
        );
      }
    }
    </Formik>
  );
}
