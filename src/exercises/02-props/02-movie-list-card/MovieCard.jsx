function MovieCard(props) {

    const { movie } = props;

    /*************
        RENDER
    *************/
    return (
        
        <>
            <div>Titolo: {movie.title}</div>
            <div>Genere: {movie.genre}</div>
            <div>Voto: {movie.rating}</div>
            <br />
        </>
    );
}

export default MovieCard;