import { useState } from "react";

function EventBookingForm() {
    const initialFormData = {
        nome: "",
        email: "",
        tipoBiglietto: "",
        richiestaPosto: false
    };

    const [formData, setFormData] = useState(initialFormData);
    const [listaPrenotazioni, setListaPrenotazioni] = useState([]);

    return (
        <>
            <h3>Event Booking Form</h3>

            {/* Form */}
            <form onSubmit={handleSubmit}>

                {/* Nome */}
                <label htmlFor="nome">Nome:</label>
                <input
                    id="nome"
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleFormData}
                />

                <br />

                {/* Email */}
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormData}
                />

                <br />

                {/* Tipo di biglietto */}
                <p>Tipo di biglietto:</p>

                <label htmlFor="standard">Standard</label>
                <input
                    id="standard"
                    type="radio"
                    name="tipoBiglietto"
                    value="standard"
                    checked={formData.tipoBiglietto === "standard"}
                    onChange={handleFormData}
                />

                <label htmlFor="premium">Premium</label>
                <input
                    id="premium"
                    type="radio"
                    name="tipoBiglietto"
                    value="premium"
                    checked={formData.tipoBiglietto === "premium"}
                    onChange={handleFormData}
                />

                <label htmlFor="vip">VIP</label>
                <input
                    id="vip"
                    type="radio"
                    name="tipoBiglietto"
                    value="VIP"
                    checked={formData.tipoBiglietto === "VIP"}
                    onChange={handleFormData}
                />

                <br />

                {/* Richiesta posto riservato */}
                <label htmlFor="richiestaPosto">Posto riservato:</label>
                <input
                    id="richiestaPosto"
                    type="checkbox"
                    name="richiestaPosto"
                    checked={formData.richiestaPosto}
                    onChange={handleFormData}
                />

                <br />

                <button type="submit">Invia prenotazione</button>
            </form>

            {/* Anteprima form */}
            <div>
                <h5>Anteprima form</h5>
                <p>Nome: {formData.nome}</p>
                <p>Email: {formData.email}</p>
                <p>Tipo biglietto: {formData.tipoBiglietto}</p>
                <p>Posto riservato: {formData.richiestaPosto ? "Sì" : "No"}</p>
            </div>

            {/* Lista prenotazioni */}
            <div>
                <h5>Prenotazioni</h5>

                <p>Totale prenotazioni: {listaPrenotazioni.length}</p>

                {listaPrenotazioni.length === 0 && (
                    <p>Nessuna prenotazione presente.</p>
                )}

                {listaPrenotazioni.map((prenotazione, index) => (
                    <div key={index}>
                        <ul>
                            <li>Nome: {prenotazione.nome}</li>
                            <li>Email: {prenotazione.email}</li>
                            <li>Biglietto: {prenotazione.tipoBiglietto}</li>
                            <li>
                                Posto riservato:{" "}
                                {prenotazione.richiestaPosto ? "Sì" : "No"}
                            </li>
                        </ul>

                        <button onClick={() => deletePrenotazione(index)}>
                            Elimina
                        </button>
                    </div>
                ))}
            </div>
        </>
    );

    /***************
        FUNZIONI
    ***************/
    function handleSubmit(event) {
        event.preventDefault();

        if (
            formData.nome.trim() === "" ||
            formData.email.trim() === ""
        ) {
            return;
        }

        const nuovaLista = [...listaPrenotazioni, formData];

        setListaPrenotazioni(nuovaLista);
        setFormData(initialFormData);
    }

    function handleFormData(e) {
        const value = e.target.type === "checkbox"
            ? e.target.checked
            : e.target.value;

        setFormData({
            ...formData,
            [e.target.name]: value
        });
    }

    function deletePrenotazione(indexToDelete) {
        const nuovaLista = listaPrenotazioni.filter((prenotazione, index) => {
            return index !== indexToDelete;
        });

        setListaPrenotazioni(nuovaLista);
    }
}

export default EventBookingForm;