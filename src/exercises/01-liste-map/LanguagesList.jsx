/*
  ESERCIZIO
  Crea un array di linguaggi di programmazione e renderizzalo in una lista.
*/

function LanguagesList() {

    /*************
        COSTANTI
    *************/
    const languages = ["HTML", "CSS", "JavaScript", "React"];

    /*************
        RENDER
    *************/
    return(
        <>
            <h3> Lista linguaggi </h3>
            <ul>
                {languages.map((language, index) => (
                    <li key={index}> {language} </li>
                ))}
            </ul>
        </>

    )
}

export default LanguagesList;