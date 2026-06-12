/*
  ESERCIZIO
  Crea un array di prodotti e renderizzali in una lista.

  Ogni prodotto deve mostrare:
  - nome
  - prezzo

  Dati da usare:

  const products = [
    { id: 1, name: "Mouse", price: 20 },
    { id: 2, name: "Tastiera", price: 50 },
    { id: 3, name: "Monitor", price: 200 }
  ];

  Obiettivo:

  Mouse - €20
  Tastiera - €50
  Monitor - €200
*/

function ProductsList() {

    /*************
        COSTANTI
    *************/
    const products = [
        { id: 1, name: "Mouse", price: 20 },
        { id: 2, name: "Tastiera", price: 50 },
        { id: 3, name: "Monitor", price: 200 }
    ];

    /*************
        RENDER
    *************/
    return(
        <>
            <h3>Lista Prodotti</h3>
            <ul>
                {products.map( product => 
                    <li key={product.id}> {product.name} - {product.price}€</li>
                )}
            </ul>
        </>
    )
}

export default ProductsList;