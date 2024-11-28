
function MovieCard({movie}) { //assume movie is an object containing info about the film
    function onFavoriteClick(){
        alert("clicked")
    }
    return ( //className rather than class, to avoid conflicts as class is a reserved key word in JS.
        //{} for variable
        <div className="movie-card"> 
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title}/> 
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                    ♥
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard //means will be availabel as a default function.
//or could write 'export function MovieCard...' but would have to import specific funciton name as it's not default.