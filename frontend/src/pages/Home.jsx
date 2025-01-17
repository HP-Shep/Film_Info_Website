import MovieCard from "../components/MovieCard" //../ to go back one directory
import { useState, useEffect } from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"

function Home(){ //dynamic list of movies
    const [searchQuery, setSearchQuery] = useState(""); //for state. setSearchQuery is function to update state. Component will rerender when change.
    //const movies= getPopularMovies() //called every time something in component changes.
    //UseEffect - allows you to add side effects to your functions/components and define when they should run
    //storing films in state, so persists
    const [movies, setMovies]= useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);  
    const [popMovies, setPopMovies] = useState([]); //so can clear search but without more API calls.

    //You write useEffect as a function and put inside a function to run when the array changes. Dependacy array
    //useEffect(() => {}, []) //so would run once at start currently as array not changing. If put state in array then could updates on state change.
    useEffect(() => { //run once, common for API call
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
                setPopMovies(popularMovies)
            }catch(err){
                console.log(err) //display error
                setError("Failed to load movies...")
            }
            finally{
                setLoading(false) //error or not, no longer loading
            }
        }

        //call function
        loadPopularMovies();
    }, [])
    //more state, one for 'loading state', other for 'potential error'

    //defining a javascript arrow function. Could also be a normal function
    const hanleSeach= async (e) => {
        //submit by default refreshs page
        e.preventDefault()
        //prevent searching empty string
        if(!searchQuery.trim()) return //trim removes leading and trailing whitespace, if false, non removed want to return.
        if(loading) return //stops search if already loading something else.

        setLoading(true) //as doing more loading. 
        try{
            const searchResults= await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null) //clear any errors now.
        }catch(err){
            console.log(err)
            setError("Failed to search movies...")
        }finally{
            setLoading(false) //whatever happened no longer loading
        }
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
                <button type="reset" onClick={() =>{
                    setMovies(popMovies);
                    setSearchQuery("");
                }}>X</button>
            </form> 

            {error && <div className="error-message">{error}</div>} {//conditional render but only show if true
            }   
            {loading ? ( // conditional rendering.
                <div className="loading">Loading...</div>
            ) : (
                <div className="movies-grid"> 
                    {movies.map(movie => ( //.map iterates over each value in array and passes to function MovieCard, which returns a jsx component to display
                        <MovieCard movie={movie} key={movie.id} /> //key, so can update each idividual component, as multiple of them each has state. 
                    ))}
                </div> 
            )}
        </div>
    );
}

export default Home;