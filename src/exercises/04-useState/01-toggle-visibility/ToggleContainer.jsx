import ToggleTitle from "./ToggleTitle";
import { useState } from "react";

function ToggleContainer() {
    const [isVisible, setIsVisible] = useState(false); // Variabile di stato che indica se il testo deve essere mostrato/nascosto

    /*************
        RENDER
    *************/
    const title = "Titolo cliccabile";
    const content = "contenuto da mostrare";

    return (
        <div>
            <h3>Toggle Visibility</h3>
            <ToggleTitle
                title = {title}
                content = {content}
                isVisible={isVisible}
                handleToggle={handleToggle}
            />
        </div>
    )

    /*************
        FUNZIONI
    *************/

    // Funzione che inverte il valore dello stato al click
    function handleToggle() {
        setIsVisible(prev => !prev);
    }

}

export default ToggleContainer;