import React, { useState } from "react";

function UseState() {
    const [counter, setCounter] = useState<number>(0);
    const [message, setMessage] = useState<string>("");
    const [disabled, setDisabled] = useState<boolean>(true);

    const increment = () => {
        setCounter(counter + 1);
        setDisabled(false);
        setMessage("");
    };

    const decrement = () => {
        if (counter >= 1) {
            setCounter(counter - 1);
        }

        if (counter === 0) {
            setDisabled(true);
            setMessage("Counter cannot go below 0.")
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
                    <p>const [state, setState] = useState(initialState);</p>
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
            </article>
        </section>
    );
}

export default UseState;
