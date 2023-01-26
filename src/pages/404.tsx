import React, { useEffect } from "react";
import { useRouteError } from "react-router-dom";
import "../styles/notfound.css";

export default function NotFound() {
    const error: any = useRouteError();
    console.error(error);

    useEffect(() => {
        document.title = "Error"
    }, [])

    return (
        <div id="notfound-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}
