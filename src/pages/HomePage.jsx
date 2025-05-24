import React, { useEffect, useState } from 'react';
import MovieList from '../components/MovieList.jsx';

import getTrends from '../utils/get-trends';


const HomePage = () => {

    const [movies, setMovies] = useState();

    useEffect(() => {

        getTrends()
            .then(({ data }) => {
                setMovies(data.results);
            })
            .catch((error) => {
                console.error('Error fetching movies:', error);
            });


    }, []);

    return (
        <div>
            <MovieList data={movies} />
        </div>
    )
}

export default HomePage;