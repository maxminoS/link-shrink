import React from "react";
import { Links } from "../App";

type Props = {
  links: Links[]
}

export const LinkList = ({ links }: Props) => {
  return (
    <>
    { (links.length != 0) &&
    <table className="ml-auto mr-auto mt-8 shadow-lg table-fixed w-screen sm:w-3/4 lg:w-1/2">
      <thead className="bg-indigo-600 tracking-wider text-white"><tr>
        <th className="w-2/3 md:w-5/6 px-2 py-2">URL</th>
        <th className="w-1/3 md:w-1/6 px-2 py-2">Shrink</th>
      </tr></thead>
      <tbody className="bg-gray-300 divide-y divide-gray-200">
        { links.map(link => (
            <tr key={link._id} >
              <td className="px-2 py-1.5 truncate">
                <a className="text-indigo-600 hover:text-indigo-300 font-semibold underline" href={link.url}>{ link.url }</a>
              </td>
              <td className="px-2 py-1.5 text-center">
                <a className="px-2 py-0.5 bg-indigo-400 hover:bg-indigo-300 rounded-full text-sm text-white" href={import.meta.env.VITE_BACKEND_SERVER + "/" + link.shrink} target="_blank">{link.shrink}</a>
              </td>
            </tr>
          )) }
      </tbody>
    </table>
    }
    </>
  );
}
