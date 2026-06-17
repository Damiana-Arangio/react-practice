import { useEffect, useState } from "react";

function ProductsListApi() {

    const [products, setProducts] = useState([]);
    const [errorFetch, setErrorFetch] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        fetchProducts();
    },[]);

    return (

        <>
            <h3> Products List Api </h3>

            {/* Gestione caricamento */}
            {isLoading && <p>Caricamento prodotti...</p>}

            {/* Gestione errore */}
            {errorFetch && <p>{errorFetch}</p>}

            {/* Gestione lista prodotti */}
            { (!isLoading && !errorFetch) && 
                <ul>
                    {products.slice(0, 8).map( product => (
                        <li key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <h4>{product.title}</h4>
                            <p>Prezzo: €{product.price}</p>
                            <p>Categoria: {product.category}</p>
                        </li>
                    ))}
                </ul>
            }
        </>

    )

    /***************
        FUNZIONI
    ****************/
    async function fetchProducts() {
        
        const url = "https://fakestoreapi.com/products";

        try {
            const response = await fetch(url);

            if(!response.ok) {
                throw new Error("Errore nel recupero dei prodotti!")
            }

            const data = await response.json();
            setProducts(data);
        }

        catch(error) {
            setErrorFetch(error.message)
        }

        finally {
            setIsLoading(false);
        }
    }
}

export default ProductsListApi;