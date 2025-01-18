import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({movie}) { //assume movie is an object containing info about the film
    //values, anything that is in values of provider
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext() //links in context, then can use provider to mange state... Can use as App wrapped in context
    const favorite = isFavorite(movie.id) //can tell if we're favorite
    const dateEnd=(num) => {
        if(num >3 && num <21) return "th";
        switch(num%10){
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    var relaseFormated=""
    let relase=new Date(movie.release_date); //if no date with movie, could cause error
    if(relase.toString()!="Invalid Date"){ //check is valid, otherwise display nothing.
        relaseFormated=relase.getDate()+dateEnd(relase.getDate())+" "+new Intl.DateTimeFormat("en-GB",{month:"long"}).format(relase)+" "+relase.getFullYear()
    }
    function onFavoriteClick(e){
        e.preventDefault()
        if(favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }
    return ( //className rather than class, to avoid conflicts as class is a reserved key word in JS.
        //{} for variable
        <div className="movie-card"> 
            <div className="movie-poster">
                <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/> 
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? "active": ""}`} onClick={onFavoriteClick}>
                    ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{relaseFormated}</p>
            </div>
        </div>
    )
}

export default MovieCard //means will be availabel as a default function.
//or could write 'export function MovieCard...' but would have to import specific funciton name as it's not default.