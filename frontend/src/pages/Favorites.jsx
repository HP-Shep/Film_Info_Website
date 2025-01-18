import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
    const {favorites} = useMovieContext();

    if(favorites.length>0){
        return(
            <div className="favorites">
                <h2>Your Favorites</h2>
                <div className="movies-grid"> 
                    {favorites.map(movie => ( //.map iterates over each value in array and passes to function MovieCard, which returns a jsx component to display
                        <MovieCard movie={movie} key={movie.id} /> //key, so can update each idividual component, as multiple of them each has state. 
                    ))}
                </div> 
            </div>
        );
    }
    return (
        <div className="favorites-empty">
            <h2>No Favorite Films Yet</h2>
            <p>Start adding films to your favorites and they will appear here!</p>
        </div>
    );
}

export default Favorites