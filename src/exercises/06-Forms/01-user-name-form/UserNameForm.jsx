import { useState } from "react";

function UserNameForm() {

    const [name, setName] = useState("");
    const [submittedName, setSubmittedName] = useState("");

    return(
        <>
            <h3>Username Form</h3>

            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={name}
                    onChange={handleChange}
                />

                <button 
                    type="submit"
                > Invio form </button>
            </form>

            <p> Nome digitato: {name} </p>

            {submittedName && (
                <p>Nome inviato: {submittedName}</p>
            )}
        </>
    )

    /***************
        FUNZIONI
    ***************/
    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (name.trim() === "") {
            return;
        }

        setSubmittedName(name);
    }
}

export default UserNameForm;