import { useState } from "react";

function Content() {

    let [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
    }
    return (
        <>
            <h2> Counter</h2>
            <p className="content">
                {count}
            </p>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </>
    );
}

export default Content;