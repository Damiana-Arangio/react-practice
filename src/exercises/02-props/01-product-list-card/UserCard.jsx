function UserCard(props) {

    const {user} = props;

    /*************
        RENDER
    *************/
    return (
        <>
            <div>Nome: {user.name}</div>
            <div>Ruolo: {user.role}</div>
            <div>Città: {user.city}</div>
            <br />

        </>
    );
}

export default UserCard;