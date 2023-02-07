import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Layout } from "./components";
import App from "./App";
import UseState from "./pages/UseState";
import UseReducer from "./pages/UseReducer";
import NotFound from "./pages/404";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UseImperativeHandle from "./pages/UseImperativeHandle";
import UseMemo from "./pages/UseMemo";
import UseCallback from "./pages/UseCallback";
import UseEffect from "./pages/UseEffect";
import UseRef from "./pages/UseRef";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
    },
    {
        path: "/use-state",
        element: <UseState />
    },
    {
        path: "/use-reducer",
        element: <UseReducer />
    },
    {
        path: "/use-ref",
        element: <UseRef />
    },
    {
        path: "/use-effect",
        element: <UseEffect />
    },
    {
        path: "/use-memo",
        element: <UseMemo />
    },
    {
        path: "/use-callback",
        element: <UseCallback />
    },
    {
        path: "/use-imperativeHandle",
        element: <UseImperativeHandle />
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
