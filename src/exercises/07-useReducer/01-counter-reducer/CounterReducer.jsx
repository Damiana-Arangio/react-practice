import { useReducer } from "react";

function CounterReducer() {

    const initialCount = 0;
    const [count, dispatch] = useReducer(contatoreReducer, initialCount)
    return(

        <>
            <h3>Counter Reducer</h3>

            <div>
                <p> Contatore: {count} </p>

                <button 
                    onClick={ () => dispatch( {type: "incrementa"} ) }
                > Incrementa 
                </button>

                <button
                    onClick={() => dispatch({ type: "decrementa" })}
                > Decrementa
                </button>

                <button
                    onClick={() => dispatch({ type: "reset" })}
                > Reset
                </button>
            </div>
        </>
    )

    /* FUNZIONI */
    function contatoreReducer(currentCount, action) {
        switch(action.type) {
            case "incrementa" :
                return currentCount + 1;

            case "decrementa":
                return currentCount - 1;
            
            case "reset":
                return 0;      
            
            default:
                return currentCount;
        }
    }
}

export default CounterReducer;