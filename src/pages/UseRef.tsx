import React, {useRef} from "react";

const UseRef = () => {
    const btnRef = useRef<number>(0);

    const handleClick = () => {
        btnRef.current = btnRef.current + 1;
        alert(`You have clicked the button for ${btnRef.current.toString()} times.`);
    }

    return (
        <section className="page">
            <h1>useRef</h1>
            <article className="page_content">
                <div>
                    <h2>What?</h2>
                    <p>React hook which allows us to reference a value that's not required for rendering.</p>
                    <br />
                    <pre>
                        <code>
                            {`const ref = useRef<type>(initialValue)`}
                        </code>
                    </pre>
                </div>
                <br />
                <div>
                    <h2>How?</h2>
                    <div>
                        <p>Example:</p>
                        <p>Keep track of how many times the button is clicked and send an alert box of how many times the button has been clicked.</p>
                        <button onClick={handleClick}>
                            Click Me!
                        </button>
                    </div>
                </div>
                <br />
                <div>
                    <h2>Code Snippet: </h2>
                    <a
                        href="https://github.com/janevalencia/cra-hooks/blob/staging/src/pages/UseRef.tsx"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Check on github.
                    </a>
                </div>
            </article>
        </section>
    );
}

export default UseRef;