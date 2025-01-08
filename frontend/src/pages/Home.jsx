import MovieCard from "../components/MovieCard" //../ to go back one directory

function Home(){ //dynamic list of movies
    const movies=[
        {id:1, title:"John Wick", release_date: "2020"},
        {id:2, title:"Terminator", release_date: "1999"},
        {id:3, title:"The Matrix", release_date: "1998"},
    ]
    return(
        <div className="home">
            <div className="movies-grid">
                {movies.map(movie => ( //.map iterates over each value in array and passes to function MovieCard, which returns a jsx component to display
                    <MovieCard movie={movie} key={movie.id} /> //key, so can update each idividual component, as multiple of them each has state. 
                ))}
            </div>
        </div>
    );
}

export default Home;