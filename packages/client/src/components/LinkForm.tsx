import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const LinkForm = () => {
  return (
    <Formik initialValues={{ url: "" }}
            validationSchema={Yup.object({ url: Yup.string().url("URL must be valid").required("") })}
            onSubmit={async (values) => {
              await fetch(import.meta.env.VITE_BACKEND_SERVER + "api/abridge", {
                "method": "POST",
                "body": JSON.stringify(values),
                "headers": { "Content-Type": "application/json" }
              }).then(response => { window.location.href = response.url });
            }}
            initialTouched={{ url: true }}
    >
    { formik => {
        return (
          <Form className="text-center">
            <label className="sr-only" htmlFor="url">URL</label>
            <Field className="h-10 px-3 py-2 rounded-l-lg shadow-lg focus:outline-none" placeholder="URL" type="text" id="url" name="url" />
            {
              <button className={"h-10 px-3 py-2 bg-indigo-700 hover:bg-indigo-500 rounded-r-lg shadow-lg uppercase tracking-wider text-sm text-white font-semibold " + (!(formik.dirty && formik.isValid) ? "cursor-not-allowed opacity-50" : null)} type="submit">Submit</button>
            }
            <ErrorMessage className="text-red-500 text-sm italic" name="url" component="div" />
          </Form>
        );
    }}
    </Formik>
  );
}
