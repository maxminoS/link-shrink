import React, { useState, useEffect } from "react";

import { LinkForm } from "./components/LinkForm";
import { LinkList } from "./components/LinkList";
import { LinkAPI } from "./api/LinkAPI";

export type Links =  {
  _id: string,
  shrink: string,
  url: string,
}

export const App = () => {
  const [links, setLinks] = useState<Links[]>([]);
  const [reload, setReload] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await setFetchedLinks();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (reload) {
        setReload(false);
        await setFetchedLinks();
      }
    })();
  }, [reload]);

  const setFetchedLinks = async () => {
      LinkAPI.getLink()
             .then((fetchedLinks: Links[]) => {
               setLinks(fetchedLinks.reverse());
             });
  }

  return (
    <div className="h-screen py-4 bg-gray-200">
      <LinkForm setReload={setReload} />
      <LinkList links={links} />
    </div>
  );
}
