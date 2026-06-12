import movies from "./movies.js"
import MovieCard from "./MovieCard";

function MovieList() {

    const moviesFiltratiEOrdinati = filtraOrdinaFilm();

    /*************
        RENDER
    *************/
    return(

        <div>
            <h3> Lista Film </h3>
            {moviesFiltratiEOrdinati.map(movie => (
                <MovieCard 
                    key={movie.id}
                    movie={movie}
                />
            ))}
            
        </div>
       
    )

    /*************
        FUNZIONI
    *************/
    function filtraOrdinaFilm() {
        const filmFiltrati = movies.filter(movie => movie.rating >=8);
        return filmFiltrati.sort((a, b) => b.rating - a.rating);
    }
}

export default MovieList;