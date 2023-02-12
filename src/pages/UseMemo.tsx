import React, { useState, useMemo } from "react";

// Expensive or slow function.
const multiplyByFive = (input: number) => {
  console.log("Expensive calculation is running ...");

  // Simulate slow and expensive loop.
  for (let i = 0; i <= 1000000000; i++) {}

  // Once the loop is done, return the value.
  return input * 5;
};

function UseMemo() {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  const [input, setInput] = useState<number>(0);

  const theme = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
  };

  // Memoized value.
  const memoizedValue = useMemo(() => {
    return multiplyByFive(input);
  }, [input]);

  document.title = "React Hooks | useMemo";

  return (
    <section className="page">
      <h1>useMemo</h1>
      <article className="page_content">
        <div>
          <h2>What?</h2>
          <p>
            A hook used to memoize value of an expensive calculation / slow to
            execute and optimise re-rendering when considering a
            referential-equality.
          </p>
          <br />
          <pre>
            <code>
              {`const memoizedValue = useMemo(() => { // return memoized value }, [dependencies])`}
            </code>
          </pre>
        </div>
        <br />
        <div>
          <h2>How?</h2>
          <div>
            <p>
              Notice when you click Change Theme button, it happens instantly
              and expensive calculation is not running - look at console.
            </p>
            <p>
              But when you change the input number, expensive calculation will
              re-run and there is delay in showing the result..
            </p>
            <div>
              <input
                type="number"
                placeholder="Enter input number"
                value={input}
                onChange={(e) => {
                  if (e.target.value === "") {
                    setInput(0);
                  } else {
                    setInput(parseInt(e.target.value));
                  }
                }}
              />
            </div>
            <div style={theme}>
              <span>Result: </span>
              <span>{memoizedValue}</span>
            </div>
            <button onClick={() => setDarkTheme((prev) => !prev)}>
              Change Theme
            </button>
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

export default UseMemo;
