import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import axios from "axios";


const movieAPI = async () => {
    const result = await axios({
        method: "get",
        url: 'https://swapi.dev/api/films/'
    })
    console.log(result.data.results)

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
    return processedResult
}

function App() {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const fetchMoviesHandler = async () => {
        setIsLoading(true)
        const movieResult = await movieAPI()
        setMovies(movieResult)
        setIsLoading(false)
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={() => {
                    fetchMoviesHandler()
                }}>Fetch Movies
                </button>
            </section>
            <section>
                {isLoading && <p>Loading...</p>}
                {!isLoading && movies.length > 0 && <MoviesList movies={movies}/>}
                {!isLoading && movies.length === 0 && <p>No movies found</p>}

            </section>
        </React.Fragment>
    );
}

export default App;
