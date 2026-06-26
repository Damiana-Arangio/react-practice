import { useState } from "react";

const initialFormData = {
    nome: "",
    prezzo: "",
    categoria: "",
    disponibilita: false
};

function ProductForm() {
    const [formData, setFormData] = useState(initialFormData);
    const [datiInviati, setDatiInviati] = useState(null);

    return (
        <>
            <h3>Product Form</h3>

            {/* FORM */}
            <form onSubmit={handleSubmit}>

                {/* Nome */}
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    name="nome"
                    placeholder="Inserisci nome..."
                    value={formData.nome}
                    onChange={handleFormData}
                />

                <br />

                {/* Prezzo */}
                <label htmlFor="prezzo">Prezzo:</label>
                <input
                    type="number"
                    name="prezzo"
                    placeholder="Inserisci prezzo..."
                    value={formData.prezzo}
                    onChange={handleFormData}
                />

                <br />

                {/* Categoria */}
                <label htmlFor="categoria">Categoria:</label>
                <input
                    type="text"
                    name="categoria"
                    placeholder="Inserisci categoria..."
                    value={formData.categoria}
                    onChange={handleFormData}
                />

                <br />

                {/* Disponibilità */}
                <label htmlFor="disponibilita">Disponibile:</label>
                <input
                    type="checkbox"
                    name="disponibilita"
                    checked={formData.disponibilita}
                    onChange={handleFormData}
                />

                <br />

                <button type="submit">Invia</button>
                
            </form>

            {/* Anteprima form */}
            <div>
                <h5>Anteprima form</h5>
                <p>Nome: {formData.nome}</p>
                <p>Prezzo: {formData.prezzo}</p>
                <p>Categoria: {formData.categoria}</p>
                <p>Disponibile: {formData.disponibilita ? "Sì" : "No"}</p>
            </div>

            {/* Dati inviati */}
            {datiInviati && (
                <div>
                    <h5>Prodotto inviato</h5>
                    <p>Nome: {datiInviati.nome}</p>
                    <p>Prezzo: {datiInviati.prezzo}</p>
                    <p>Categoria: {datiInviati.categoria}</p>
                    <p>Disponibile: {datiInviati.disponibilita ? "Sì" : "No"}</p>
                </div>
            )}
        </>
    );

    /***************
        FUNZIONI
    ***************/
    function handleSubmit(event) {
        event.preventDefault();

        if ( formData.nome.trim() === "" || formData.prezzo === "" || formData.categoria.trim() === "") {
            return;
        }

        setDatiInviati(formData);
        setFormData(initialFormData);
    }

    function handleFormData(e) {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormData({
            ...formData,
            [e.target.name]: value
        });
    }
}

export default ProductForm;