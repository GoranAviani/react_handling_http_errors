import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import axios from "axios";

function App() {

    const fetchMoviesHandler = async () => {

   const result = await axios({
        method: "get",
        url: 'https://swapi.dev/api/films/'
   })
        const resultJson = await result.json()
        console.log(resultJson)
    }


  return (
    <React.Fragment>
      <section>
        <button onClick={() => {fetchMoviesHandler()}}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={"dummyMovies"} />
      </section>
    </React.Fragment>
  );
}

export default App;
