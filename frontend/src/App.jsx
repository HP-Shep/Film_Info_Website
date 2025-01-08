import './App.css'
import MovieCard from './components/MovieCard'; //if wasn't default would be import {MovieCard} from './components/MovieCard';
import Home from "./pages/Home"

function App() { //components always start with a capital letter
  return (
    <>
      <Home />
    </>
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
