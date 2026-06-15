import users from "./users.js"
import UserStatusCard from "./UserStatusCard.jsx";

function UserStatusList() {

    return(

        <>
            <h3>Stato utente</h3> 

            <ul>
                {users.map( user => (
                    <li key={user.id}>
                        <UserStatusCard 
                            user = {user}  
                        />
                    </li>
                ))}
            </ul>
        </>
        
    )
}

export default UserStatusList;