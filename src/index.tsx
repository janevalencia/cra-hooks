import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Layout } from "./components";
import App from "./App";
import UseState from "./pages/UseState";
import NotFound from "./pages/404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
    },
    {
        path: "/use-state",
        element: <UseState />
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Layout>
        <RouterProvider router={router} />
    </Layout>
);
