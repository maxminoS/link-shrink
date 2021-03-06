import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
               setLinks(fetchedLinks.reverse());
             });
    })();
  }, []);

  return (
    <div className="h-full py-4 bg-gray-200">
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
    <table className="ml-auto mr-auto mt-8 shadow-lg table-fixed w-screen md:w-2/3">
      <thead className="bg-indigo-600 tracking-wider text-white"><tr>
        <th className="w-2/3 md:w-5/6 px-2 py-2">URL</th>
        <th className="w-1/3 md:w-1/6 px-2 py-2">Abridged</th>
      </tr></thead>
      <tbody className="bg-gray-300 divide-y divide-gray-200">
        { links ?
          links.map(link => (
            <tr key={link._id} >
              <td className="px-2 py-1.5 truncate">
                <a className="text-indigo-600 hover:text-indigo-300 font-semibold underline" href={link.url}>{ link.url }</a>
              </td>
              <td className="px-2 py-1.5 text-center">
                <a className="px-2 py-0.5 bg-indigo-400 hover:bg-indigo-300 rounded-full text-sm text-white" href={import.meta.env.VITE_BACKEND_SERVER + link.abridged} target="_blank">{link.abridged}</a>
              </td>
            </tr>
          ))
          : null }
      </tbody>
    </table>
    </div>
  );
}
