import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/home/Home';
import Card from './components/card-detail/Card-detail';

const router = createBrowserRouter([
  {
    path: "/pokemones",
    element: <Home/>,
  },
    {
      path: "/pokemones/:name",
      element: <Card/>,
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
