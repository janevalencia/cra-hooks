import React from "react";
import { MemoizedCallback, UnMemoizedCallback } from "../components/index";

function UseCallback() {
  return (
    <section className="page">
      <h1>useCallback</h1>
      <article className="page_content">
        <div>
          <h2>What?</h2>
          <p>
            Memoize and optimise re-rendering by returning a full memoized
            function.
          </p>
          <br />
          <pre>
            <code>
              {`const memoizedFunc = useCallback(() => {// return something}, [dependencies])`}
            </code>
          </pre>
        </div>
        <br />
        <div>
          <h2>How?</h2>
          <div>
            <div>
              <h3>Unoptimised solution: </h3>
              <p>
                Open up dev browser console to see that when you're clicking on
                the toggle button, the Calculated List component will be
                re-rendered.
              </p>
              <br />
              <p>
                Why? Because we are creating the calculate function not memoized
                it, meaning as component being re-rendered the function will
                also be re-created, thus, the calculation being passed to List
                component is also different each time.
              </p>
              <UnMemoizedCallback />
            </div>
            <div>
              <h3>Optimised solution: </h3>
              <p>
                Open up dev browser console to see that when you're clicking on
                the toggle button, this component won't be re-rendered.
              </p>
              <br />
              <p>
                Why? Because we have memoized the function to generate the list
                of new numbers so the re-calculation will only be triggered if
                there is change in input number.
              </p>
              <MemoizedCallback />
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
}

export default UseCallback;
