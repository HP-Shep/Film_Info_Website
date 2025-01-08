import MovieCard from "../components/MovieCard" //../ to go back one directory
import { useState } from "react";
import "../css/Home.css"

function Home(){ //dynamic list of movies
    const [searchQuery, setSearchQuery] = useState(""); //for state. setSearchQuery is function to update state. Component will rerender when change.
    const movies=[
        {id:1, title:"John Wick", release_date: "2020"},
        {id:2, title:"Terminator", release_date: "1999"},
        {id:3, title:"The Matrix", release_date: "1998"},
    ];

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