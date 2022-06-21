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
        console.log( result.data.results)

        const processedResult = result.data.results.map(
            (row) => {
                return {
                        id: row.episode_id,
                        title: row.title,
                        releaseDate: row.release_date,
                        openingText: row.opening_crawl,
                }
            }
        )
        console.log(processedResult)
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
