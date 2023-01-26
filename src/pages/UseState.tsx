import React, { useEffect } from "react";

function UseState() {
    useEffect(() => {
        document.title = "React Hooks | useState";
    }, []);

    return (
        <section className="page">
            <h1>useState</h1>
            <article className="page_content">useState content.</article>
        </section>
    );
}

export default UseState;
