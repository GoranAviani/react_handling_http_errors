import React, {useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchMoviesHandler = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://swapi.dev/api/films/asd');
            if (!response.ok) {
                throw new Error("error happened")
            }
            const data = await response.json();
            setError(null);


            const transformedMovies = data.results.map((movieData) => {
                return {
                    id: movieData.id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date,
                };
            });
            setMovies(transformedMovies);

        } catch (error) {
            console.log(error)
            setError(`status: ${error.status}, message: ${error.message} statusText: ${error.statusText}`)
        }
        setIsLoading(false);
    }


    let content = "click to get movies"

    if (movies.length > 0) {
        content = <MoviesList movies={movies}/>
    }

    if (isLoading) {
        content = "loading..."
    }

    if (error) {
        content = <p>{error}</p>
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </React.Fragment>
    );
}

export default App;
