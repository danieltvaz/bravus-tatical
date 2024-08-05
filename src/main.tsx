import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
  ],
  {
    basename: "/bravustatical",
  }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
