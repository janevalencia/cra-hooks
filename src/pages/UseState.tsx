import React, { useState } from "react";

function UseState() {
    const [counter, setCounter] = useState<number>(0);
    const [message, setMessage] = useState<string>("");
    const [disabled, setDisabled] = useState<boolean>(true);

    const increment = () => {
        setCounter((prev) => prev + 1);
        setDisabled(false);
        setMessage("");
    };

    const decrement = () => {
        if (counter >= 1) {
            setCounter((prev) => prev - 1);
        }

        if (counter === 0) {
            setDisabled(true);
            setMessage("Counter cannot go below 0.");
        }
    };

    document.title = "React Hooks | useState";

    return (
        <section className="page">
            <h1>useState</h1>
            <article className="page_content">
                <div>
                    <h2>What?</h2>
                    <p>Returns a stateful value and a function to update it.</p>
                    <br />
                    <pre>
                        <code>
                            const [state, setState] = useState(initialState);
                        </code>
                    </pre>
                </div>
                <div>
                    <h2>How?</h2>
                    <div>
                        <p>{message ? message : `Counter: ${counter}`}</p>
                        <button onClick={increment}>Increment</button>
                        <button onClick={decrement} disabled={disabled}>
                            Decrement
                        </button>
                    </div>
                </div>
                <div>
                    <h2>Code Snippet: </h2>
                    <a
                        href="https://github.com/janevalencia/cra-hooks/blob/staging/src/pages/UseState.tsx#L3-L49"
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

export default UseState;
