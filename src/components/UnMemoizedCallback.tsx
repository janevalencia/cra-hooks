import React, { useState } from "react";
import List from "./List"

const UnMemoizedCallback = () => {

    const [input, setInput] = useState<number>(0);
    const [toggle, setToggle] = useState<boolean>(false);

    const calculate = (): number[] => {
        return [input, input * 2, input * 3];
    };

    return (
        <div>
            <input
                type="number"
                placeholder="Enter a number"
                value={input}
                onChange={(e) => setInput(parseInt(e.target.value))}
            />
            <br />
            <button onClick={() => setToggle(prev => !prev)}>Toggle: {toggle ? "On" : "Off"}</button>
            <List getItems={calculate} />
        </div>
    );
}

export default UnMemoizedCallback;