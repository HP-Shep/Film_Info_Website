import MovieCard from "../components/MovieCard" //../ to go back one directory
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"

function Home(){ //dynamic list of movies
    console.log("Test output");
    const [searchQuery, setSearchQuery] = useState(""); //for state. setSearchQuery is function to update state. Component will rerender when change.
    //const movies= getPopularMovies() //called every time something in component changes.
    //UseEffect - allows you to add side effects to your functions/components and define when they should run
    //storing films in state, so persists
    const [movies, setMovies]= useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);  

    //You write useEffect as a function and put inside a function to run when the array changes. Dependacy array
    //useEffect(() => {}, []) //so would run once at start currently as array not changing. If put state in array then could updates on state change.
    useEffect(() => { //run once, common for API call
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }catch(err){
                console.log(err) //display error
                setError("Failed to load movies...")
            }
            finally{
                setLoading(false) //error or not, no longer loading
            }
        }
        //call function
        loadPopularMovies()
    }, [])
    //more state, one for 'loading state', other for 'potential error'

    //defining a javascript arrow function. Could also be a normal function
    const hanleSeach=(e) => {
        //submit by default refreshs page
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };

    return( //form for searching. Will do via API.
        <div className="home">
            <form onSubmit={hanleSeach} className="search-form">
                <input 
                type="text" 
                placeholder="Seach for movies..." 
                className="search-input"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)} //sets e to what was entered in box
                />
                <button type="submit" className="search-button">Search</button>
            </form> 
            <div className="movies-grid"> 
                {movies.map(movie => ( //.map iterates over each value in array and passes to function MovieCard, which returns a jsx component to display
                    <MovieCard movie={movie} key={movie.id} /> //key, so can update each idividual component, as multiple of them each has state. 
                ))}
            </div>
        </div>
    );
}

export default Home;