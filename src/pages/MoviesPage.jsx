import React, { useState } from 'react';

import Css from './MoviesPage.module.css';
import MovieList from '../components/MovieList';
import { CiSearch } from "react-icons/ci";

const MoviesPage = () => {
    const movies = [];
    // const [searchTerm, setSearchTerm] = useState('');
    // const [searchedMovies, setSearchedMovies] = useState();
    return (
        <div className={Css.MoviesPage}>
            <div className={Css.MoviesPageCard}>
                <form action="/movies" className={Css.Form}>
                    <div className={Css.InputGroup}>
                        <CiSearch color='currentcolor' size={24} />
                        <input className={Css.Input} name='filmName' type="text" placeholder="Search for a movie..." />
                    </div>

                    <button className={Css.Btn} type="submit">
                        <CiSearch color='currentcolor' size={40} />
                    </button>
                </form>
            </div>
            <div className={Css.MoviesPageCard}>
                <MovieList data={movies} />
            </div>

        </div>
    );
}

export default MoviesPage;