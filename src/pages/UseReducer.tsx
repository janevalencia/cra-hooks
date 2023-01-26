import React, { useReducer } from "react";

type TState = {
    counter: number,
    message: string,
    decrementDisabled: boolean
}

type TAction = {
    type: 'increment' | 'decrement' | 'negative',
}

const initialState = {
    counter: 0,
    message: "",
    decrementDisabled: true
}


function reducer(state : TState, action : TAction) {
    const { type } = action;

    switch (type) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1,
                message: "",
                decrementDisabled: false
            }
        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'negative':
            return {
                ...state,
                message: "Counter cannot go below 0.",
                decrementDisabled: true
            }
        default:
            return state;
    }
}


function UseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleIncrement = () => {
        dispatch({
            type: 'increment'
        })
    }

    const handleDecrement = () => {
        if (state.counter > 0) {
            dispatch({
                type: 'decrement'
            })
        } else {
            dispatch({
                type: 'negative'
            })
        }
    }

    document.title = "React Hooks | useReducer";

    return (
        <section className="page">
            <h1>useReducer</h1>
            <article className="page_content">
                <div>
                    <h2>What?</h2>
                    <p>Similar to useState, but it handles more complex state management.</p>
                    <p>Returns the state value and dispatch function.</p>
                    <br />
                    <pre>
                        <code>
                            const [state, dispatch] = useReducer(reducer, initialArg);
                        </code>
                    </pre>
                </div>
                <br />
                <div>
                    <h2>Why not just use useState?</h2>
                    <p>In useState of counter example, we need to create multiple states:</p>
                    <p>1. counter</p>
                    <p>2. message</p>
                    <p>3. button disabled</p>
                    <p>Instead of this, we can just create a reducer functions which can execute actions as triggered.</p>
                </div>
                <div>
                    <h2>How?</h2>
                    <div>
                        <p>Counter: {state.counter} </p>
                        {state.message && <p className="red-alert">{state.message}</p>}
                        <button onClick={handleIncrement}>Increment</button>
                        <button onClick={handleDecrement} disabled={state.decrementDisabled}>Decrement</button>
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

export default UseReducer;
