import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { truncateLink } from "./utils/truncateLink";
import { LinkAPI } from "./api/LinkAPI";

type Links =  {
  _id: string,
  abridged: string,
  url: string,
}

export const App = () => {
  const [links, setLinks] = useState<Links[]>([]);

  useEffect(() => {
    (async () => {
      LinkAPI.getLink()
             .then(fetchedLinks => {
               setLinks(fetchedLinks);
             });
    })();
  }, []);

  return (
    <>
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
          <Form>
            <label htmlFor="url">URL</label>
            <Field type="text" id="url" name="url" />
            <ErrorMessage name="url" />
            <button type="submit" disabled={!(formik.dirty && formik.isValid)}>Submit</button>
          </Form>
        );
    }}
    </Formik>
    <table>
      <thead><tr>
        <th>URL</th>
        <th>Short URL</th>
      </tr></thead>
      <tbody>
        { links ?
          links.map(link => (
            <tr key={link._id} >
              <td><a href={import.meta.env.VITE_BACKEND_SERVER + link.abridged} target="_blank">{link.abridged}</a></td>
              <td><a href={link.url}>{ truncateLink(link.url) }</a></td>
            </tr>
          ))
          : null }
      </tbody>
    </table>
    </>
  );
}
