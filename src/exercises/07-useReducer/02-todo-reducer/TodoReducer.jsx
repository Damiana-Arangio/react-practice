import { useReducer, useState } from "react";

function TodoReducer() {
    const listaIniziale = [];

    const [lista, dispatch] = useReducer(listaReducer, listaIniziale);
    const [input, setInput] = useState("");

    return (
        <>
            <h3> Todo Reducer </h3>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={input}
                    onChange={handleChange}
                />

                <button type="submit"> Aggiungi attività </button>
            </form>

            <h5> Lista: </h5>

            <ul>
                {lista.map((elemento, index) => (
                    <li key={index}>
                        {elemento}

                        <button
                            onClick={() =>
                                dispatch({
                                    type: "removeLista",
                                    payload: index,
                                })
                            }
                        >
                            Elimina
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );

    /* FUNZIONI */

    function handleChange(e) {
        setInput(e.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        dispatch({
            type: "addLista",
            payload: input,
        });

        setInput("");
    }

    function listaReducer(listaCorrente, action) {
        switch (action.type) {
            case "addLista":
                return [...listaCorrente, action.payload];

            case "removeLista":
                return listaCorrente.filter(
                    (elemento, index) => index !== action.payload
                );

            default:
                return listaCorrente;
        }
    }
}

export default TodoReducer;