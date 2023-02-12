import React, {useState, useCallback} from "react";
import List from "./List";

const MemoizedCallback = () => {
    const [input, setInput] = useState<number>(0);
    const [toggle, setToggle] = useState<boolean>(false);

    // Memoized.
    const memoizedCalculation = useCallback((): number[] => {
        return [input, input * 2, input * 3];
    }, [input]);

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
            <List getItems={memoizedCalculation} />
        </div>
    );
}

export default MemoizedCallback;