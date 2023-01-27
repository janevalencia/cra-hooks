import React, { useRef } from "react";
import { SnackBar } from "../components";
import { SnackBarHandle } from "../components/SnackBar";

function UseImperativeHandle() {

    // Create a reference to be used by the Snackbar (children-component).
    const snackRef = useRef<SnackBarHandle>(null);

    // Input ref.
    const inputRef = useRef<HTMLInputElement>(null);

    const sendSnack = () => {
        if(snackRef.current && inputRef.current) {
            // Send the snack notification.
            snackRef.current.show(inputRef.current.value);

            // Clear input.
            inputRef.current.value = '';
        }
    }

    return (
        <section className="page">
            <h1>useImperativeHandle</h1>
            <article className="page_content">
                <div>
                    <h2>What?</h2>
                    <p>
                        It's a react-way to allow children-properties or
                        children-behaviour to be called by parent-component.
                        This hooks is very useful when you are creating a
                        reusable component.
                    </p>
                    <br />
                    <div>
                        <pre>
                            Requires: <code>useRef</code>,
                            <code>forwardRef</code>
                        </pre>
                    </div>
                    <br />
                    <p>Check out <a href="/use-ref">useRef</a> before dive into this hook.</p>
                </div>
                <br />
                <div>
                    <h2>Alternative?</h2>
                    <p>
                        You may NOT need this when you have state management
                        library - centralised state management, such as Redux,
                        for that particular component.
                    </p>
                </div>
                <div>
                    <h2>How?</h2>
                    <div>
                        <p>Example: Throwing snackbar notification when an action being triggered.</p>
                        <div>
                            <input type="text" placeholder="Send a snack ..." ref={inputRef} />
                            <button onClick={sendSnack}>Send</button>
                        </div>
                        <SnackBar ref={snackRef} />
                    </div>
                </div>
                <br />
                <div>
                    <h2>Code Snippet: </h2>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        Check on github.
                    </a>
                </div>
            </article>
        </section>
    );
}

export default UseImperativeHandle;
