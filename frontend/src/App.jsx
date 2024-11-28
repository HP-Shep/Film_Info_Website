import './App.css'
import MovieCard from './components/MovieCard'; //if wasn't default would be import {MovieCard} from './components/MovieCard';

function App() { //components always start with a capital letter
  const movieNumber =1; //allowed any normal javascript code before the return. Conditional rendering - could do if statements (but not fine grained)
  return ( //needs to return one parent element, e.g. can't have two div's here... without different parent element. <> and </>
    //second set of braces defines an object, first set defines a varaible. For now not passing url parameter.
    <div> 
      {movieNumber === 1 ? (
        <MovieCard movie={{title: "Tim's Film", release_date: "2024"}}/> 
      ) : (
        <MovieCard movie={{title: "Joe's Film", release_date: "2020"}}/> 
      )}
    </div>
  );
}

export default App

//can add 'props' or parameters to components ...
/*
function Text({display}){
  return(
    <div>
      <p>{display}</p>
    </div>
  );
}
*/
//then use case:
//<Text display="hello"/> don't have to end in-line
//can use other peoples componets too

//break things down into components
