import React from "react";
import { Tooltip } from "../components/index";
import { AiFillQuestionCircle } from "react-icons/ai";

const UseLayoutEffect = () => {
    document.title = "React Hooks | useLayoutEffect";

    return (
        <section className="page">
            <h1>useLayoutEffect</h1>
            <article className="page_content">
                <div>
                    <h2>What?</h2>
                    <p>Returns a stateful value and a function to update it.</p>
                    <br />
                    <pre>
                        {`useLayoutEffect(() => { 
    // Setup effect.
        
    return (() => {
        // Clean up function.
    })
}, [dependencies])`}
                    </pre>
                </div>
                <br />
                <div>
                    <h2>How?</h2>
                    <div>
                        <p>Let's make a Tooltip!</p>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                            }}
                        >
                            <span>Shown on the right: </span>
                            <Tooltip message="Hi, there!" direction="right">
                                <span>
                                    <AiFillQuestionCircle size={20} />
                                </span>
                            </Tooltip>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                            }}
                        >
                            <span>Shown at the top: </span>
                            <Tooltip message="Hi, there!" direction="top">
                                <span>
                                    <AiFillQuestionCircle size={20} />
                                </span>
                            </Tooltip>
                        </div>
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
};

export default UseLayoutEffect;
