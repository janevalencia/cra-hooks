import React, { useEffect, useRef, useState } from "react";

const UseEffect = () => {
    const [value, setValue] = useState<string>('hello');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();

    }, []) // only run once at initial rendering.

    const onInputValueChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);  
    }

    return (
        <section className="page">
            <h1>useEffect</h1>
            <article className="page_content">
                <div>
                    <h2>What?</h2>
                    <p>Manages side-effect in React functional component, such as fetching data from an API, triggering animation, sending analytics, subscribe/unsubscribe to events.</p>
                    <br />
                    <pre>
                        <p>
                            {`  useEffect(() => { 
    // do some cool effect

    return (() => {
        // clean up function.
    })
  }, [dependencies])
                            `}
                        </p>
                    </pre>
                </div>
                <br />
                <div>
                    <h2>How?</h2>
                    <p>Example: Make the input automatically focus when it appears on screen (at rendering).</p>
                    <div>
                        <input
                            ref={inputRef} 
                            value={value}
                            onChange={onInputValueChange}
                        />
                        <span>{` <== the input focus at rendering.`}</span>
                        <p>Written value: {value}</p>
                    </div>
                </div>
                <br />
                <div>
                    <h2>Code Snippet: </h2>
                    <a
                        href="https://github.com/janevalencia/cra-hooks/blob/staging/src/pages/UseEffect.tsx"
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

export default UseEffect;