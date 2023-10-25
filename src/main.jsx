import React from "react";
import ReactDOM from "react-dom/client";

import App from "./pages/App";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from './routes/Home/Home.jsx'
import Sobre from './routes/Sobre/Sobre.jsx'
import Contact from './routes/Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "sobre", element: <Sobre /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
