import React from "react";

import { LinkForm } from "./components/LinkForm";
import { LinkList } from "./components/LinkList";

export const App = () => {
  return (
    <div className="h-full py-4 bg-gray-200">
      <LinkForm />
      <LinkList />
    </div>
  );
}
