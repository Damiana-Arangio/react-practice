import IndependentCounter from "./IndependentCounter";

function IndependentCounters() {

    const contatori = [1, 2, 3, 4, 5];

    return(

        <>
            <h3> Independent Counters </h3>

            {contatori.map( (contatore, index) => (
                <IndependentCounter key={index} />
            ))}
        </>
        
    )
}

export default IndependentCounters;