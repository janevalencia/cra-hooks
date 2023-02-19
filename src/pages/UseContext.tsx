import React, {useContext} from "react";
import ThemeContext from "../context/ThemeContext";

const UseContext = () => {

    // Theme context is being used here.
    const theme = useContext(ThemeContext);

    document.title = "React Hooks | useContext";

    return (
        <section className="page">
            <h1>useContext</h1>
            <article className="page_content">
                <div>
                    <h2>What?</h2>
                    <p>
                        A React Hook that lets you read and subscribe to context
                        from your component.
                    </p>
                    <p>
                        A simpler version (out-of-the-box) of Redux or any other
                        React state management library.
                    </p>
                    <br />
                    <p>To use the context inside a component:</p>
                    <br />
                    <pre>
                        <code>const value = useContext(SomeContext)</code>
                    </pre>
                </div>
                <br />
                <div>
                    <h2>How?</h2>
                    <div>
                        <p>
                            Let's create a Theme context, whereby this theme
                            value will be shared across all components in our
                            application - meaning the theme value will remain
                            regardless of our active page.
                        </p>
                        <br />
                        <p>This button will toggle the theme shown on the navbar.</p>
                        <button onClick={() => {theme.toggleTheme()}}>Toggle Navbar Theme</button>
                        <br />
                        <p>Try to move to another pages, and you should see that the navbar theme remains unchanged.</p>
                        <p>The theme data is stored in a localStorage.</p>
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

export default UseContext;
