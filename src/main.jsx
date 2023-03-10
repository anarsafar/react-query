import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import CategoriesQuery from "./pages/CategoriesQuery";
import Index from "./pages/Index";

import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ParallelQueries from "./pages/ParallelQueries";

const client = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      ,
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories-query",
        element: <CategoriesQuery />,
      },
      {
        path: "parallel-query",
        element: <ParallelQueries />,
      },
      {
        path: "*",
        element: <h1>error page</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
  </QueryClientProvider>
);
