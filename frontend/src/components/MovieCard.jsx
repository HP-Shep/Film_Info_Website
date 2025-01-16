import "../css/MovieCard.css"

function MovieCard({movie}) { //assume movie is an object containing info about the film
    const dateEnd=(num) => {
        if(num >3 && num <21) return "th";
        switch(num%10){
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };
    let relase=new Date(movie.release_date); //if no date with movie, could cause error in current state.
    const relaseFormated=relase.getDate()+dateEnd(relase.getDate())+" "+new Intl.DateTimeFormat("en-GB",{month:"long"}).format(relase)+" "+relase.getFullYear()
    function onFavoriteClick(){
        alert("clicked")
    }
    return ( //className rather than class, to avoid conflicts as class is a reserved key word in JS.
        //{} for variable
        <div className="movie-card"> 
            <div className="movie-poster">
                <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/> 
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
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