import { useState } from "react";
import SynchronizedCounter from "./SynchronizedCounter";

function SynchronizedCounters() {

    const [count, setCount] = useState(0);
    const contatori = [1, 2, 3, 4, 5];

    return (

        <>
            <h3>Synchronized Counters</h3>
            
            {contatori.map( (contatore, index) => (
                <SynchronizedCounter 
                    key = {index}
                    count = {count}
                    handleIncrement = {handleIncrement}
                />
            ))}
        </>
    )

    /**************** 
        FUNZIONI
    ****************/
    function handleIncrement() {
        setCount(prevCount => prevCount + 1)
    }
}

export default SynchronizedCounters;