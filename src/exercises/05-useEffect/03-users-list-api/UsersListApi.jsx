import { useEffect, useState } from "react";

function UsersListApi() {

    const [users, setUsers] = useState([]);
    const [errorFetch, setErrorFetch] = useState("");

    useEffect( () => {
        fetchUsers();
    },[]);

    return (
        <>
            <h3>Users List Api</h3>

            {errorFetch ? (
                <p>{errorFetch}</p>
            ) : (
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            Nome: {user.name} <br />
                            Email: {user.email} <br />
                            Città: {user.address.city}
                        </li>
                    ))}
                </ul>
            )}
        </>
    )

    /***************
        FUNZIONI
    ****************/
    async function fetchUsers() {

        const url = "https://jsonplaceholder.typicode.com/users";

        try {
            const response = await fetch(url);

            if(!response.ok) {
                throw new Error("Errore nel caricamento degli utenti")
            }
            
            const data = await response.json();
            setUsers(data);
        }

        catch(error) {
            setErrorFetch(error.message);
        }
    }
}

export default UsersListApi;