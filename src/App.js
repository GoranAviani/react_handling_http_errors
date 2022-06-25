import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import movieApi from './components/MovieApi'
import './App.css';

function App() {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const url = 'https://swapi.dev/api/films/error  '

    const fetchMoviesHandler = async () => {
        setIsLoading(true)
        const movieResult = await movieApi(url, setError)
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
                {error && <p>Error status: {error.status}, Data detail: {error.data} </p>}
                {isLoading && <p>Loading...</p>}
                {!isLoading && movies.length > 0 && <MoviesList movies={movies}/>}
                {!isLoading && movies.length === 0 && <p>No movies found</p>}
            </section>
        </React.Fragment>
    );
}

export default App;
