import { useEffect, useState } from "react";

function DelayedMessage() {

    const [isVisible, setIsVisible] = useState(false);
    const message = "Welcome later 3s!";

    useEffect( () => {
        const idTimer = getMessage();

        return( () => {
            clearTimeout(idTimer)
        })

    },[]);

    return(
        <>
            <h3> Delayed Message </h3>
            {
                isVisible && <p> {message} </p>
            }
        </>
    )

    /****************
        FUNZIONI
    *****************/
    function getMessage(){

        const idTimer = setTimeout( () => {
            setIsVisible(true)
        }, 3000);

        return idTimer;
    }
}

export default DelayedMessage;