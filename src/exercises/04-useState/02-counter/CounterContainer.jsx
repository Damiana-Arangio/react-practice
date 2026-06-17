import { useState } from "react";
import Counter from "./Counter";

function CounterContainer() {
    const [count, setCount] = useState(0);

    return(

        <>
            <h3>Counter</h3> 
            <Counter
                count = {count}
                handleIncrement = {handleIncrement}
                handleDecrement={handleDecrement}> 
            </Counter>
        </>    
    )

    /**************** 
        FUNZIONI
    ****************/
    function handleIncrement() {
        setCount(prevCount => prevCount + 1)
    }

    function handleDecrement() {
        setCount(prevCount => prevCount - 1)
    }
}

export default CounterContainer;