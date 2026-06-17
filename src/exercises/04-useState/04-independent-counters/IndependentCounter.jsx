import { useState } from "react";

function IndependentCounter() {

    const [count, setCount] = useState(0);

    return(

        <div>
            <p> {count} </p>
            <button onClick={handleIncrement}> + </button>
        </div>
    )

    /**************
        FUNZIONI
    **************/
    function handleIncrement() {
        setCount(prevCount => prevCount + 1)
    }
}

export default IndependentCounter;