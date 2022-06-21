import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import axios from "axios";

function App() {
    const [movies, setMovies ] = useState([])
    const fetchMoviesHandler = async () => {

   const result = await axios({
        method: "get",
        url: 'https://swapi.dev/api/films/'
   })
        const resultJson = await result.json()
        console.log(resultJson)

        const processedResult = resultJson.map(
            (row) => {
                return {
                        title: row.title
                }
            }
        )
        setMovies(processedResult)


    }

  return (
    <React.Fragment>
      <section>
        <button onClick={() => {fetchMoviesHandler()}}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
