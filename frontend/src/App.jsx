import './App.css'
//import MovieCard from './components/MovieCard'; //if wasn't default would be import {MovieCard} from './components/MovieCard';
import Favorites from './pages/Favorites';
import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';//doing nav bar on app, as want it to display for all webpages :-)

function App() { //components always start with a capital letter
  return (
    <>
      <div>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/favorites' element={<Favorites />}/>
          </Routes>
        </main>
      </div>
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
