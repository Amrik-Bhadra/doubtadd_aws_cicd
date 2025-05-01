import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Question from "./pages/Question";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"question/:questionId",
        element: <Question />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      }
    ],
  },
];

const router = createBrowserRouter(routes);

const App = () => {
  return(
    <RouterProvider router={router} />
  );
};

export default App;
