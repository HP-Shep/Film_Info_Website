//global state, and helper functions we can use from multiple places in application
//Is like state manger for faviroute movies.

import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext= () => useContext(MovieContext) //useContext hook, and will use function we now define.

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]) //children have access to state in this component. Is a context

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites") //so is checking on start if anything already in local storage with key faviorites.

        if(storedFavs) setFavorites(JSON.parse(storedFavs)) //array will be converted to JSON string to store, as only store strings, this is converting back.
    },[])

    useEffect(() =>{
        localStorage.setItem('favorites', JSON.stringify(favorites)) //so if favorites gets updates, then will apply useEffect to store in local storage.
    },[favorites])

    //Need 3 operations
    //1 to add favorites
    const addToFavorites = (movie => {
        setFavorites(prev => [...prev, movie]) //can't just do push, have to use setFaviorites function so react knows state updated. Takes previous and adds new, before changing state.   
    })
    //1 to remove favorites
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId)) //creates new array where all elemnts don't equal one we don't want.
    }
    //1 to check is favorite
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId) //returns true or false.
    }

    const value = { //need to provide value within provider, so is actually accessible to children.
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }
    //rendering children in return
    //can now access values
    return <MovieContext.Provider value={value}> 
        {children} 
    </MovieContext.Provider>
} //provider, provides state to any components that are wrapped around it. Sits on top or around them, so can wrap whole app in it.
//Already done (sort of) with BrowserRouter, as that wraps around App.
//Children is a reserved prop when you write a component, and children in anything that's inside of the component that you rendered. BrowserRouter has App as a child, as it's within.
//local storage allows us to store in browser as strings