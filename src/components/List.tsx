import React, { useState, useEffect } from "react";

type ListProps = {
    getItems: () => number[],
}


const List = ({ getItems }: ListProps) => {

    const [items, setItems] = useState<number[]>([]);

    useEffect(() => {
        // Set the items based on the getItems function.
        const results = getItems();
        setItems(results);
        console.log('List updated ...')

        return () => {
            console.log('List component unmount.')
        }
    }, [getItems]) // the effect will run when there is change in getItems function props.

    return (
        <div>
            <h3>Calculation: </h3>
            {items.map((item, idx) => (
                <p key={idx}>{`x ${idx + 1}: ${item}`}</p>
            ))}
        </div>
    );
}

export default List;