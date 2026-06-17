import { useEffect, useState } from "react";

function AutoCounterControls() {

    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false); // Stato che tiene traccia se il contatore deve essere avviato o fermato

    useEffect(() => {

        if (!isRunning) return;
        
        const idContatore = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => {
            clearInterval(idContatore);
        };
    }, [isRunning]);

    return(

        <div>
            <h3> Auto Counter Controls </h3>
            <p> {count} </p>
            <button onClick={handleToggle}> Start </button>
            <button onClick={handleToggle}> Stop </button>
            <button onClick={handleReset}> Reset </button>
        </div>
    )

    /*****************
        FUNZIONI
    ******************/

    // Funzione che che avvia o ferma il contatore.
    function handleToggle() {
        setIsRunning(prevIsRunning => !prevIsRunning)
    }

    // Funzione che riporta count a 0.
    function handleReset() {
        setCount(0);
    }
}

export default AutoCounterControls;