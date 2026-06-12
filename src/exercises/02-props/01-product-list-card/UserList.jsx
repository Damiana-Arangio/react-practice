import UserCard from "./UserCard";
import users from "./users";

function UserList() {

    /*************
        RENDER
    *************/
    return (
        <>
            <div>
                <h3> Lista Film </h3>
                {users.map( user => (
                    <UserCard 
                        key={user.id}
                        user={user}
                    />    
                ))}

            </div>
                            
        </>
    );
}

export default UserList;