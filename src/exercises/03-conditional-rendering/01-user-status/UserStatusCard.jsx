
function UserStatusCard(props) {
    const {user} = props;

    return (

        <>
            <div>Nome: {user.name} { user.isAdmin && " - utente Admin"}</div>
            <div>Ruolo: {user.role}</div>
            <div className={user.isOnline ? "user-card active" : "user-card"}>
                Stato: {user.isOnline ? "Online" : "Offline"}</div>
            <div>Bio: {user.bio || "Nessuna bio disponibile"}</div>
            <br />
        </>
    )
}

export default UserStatusCard;