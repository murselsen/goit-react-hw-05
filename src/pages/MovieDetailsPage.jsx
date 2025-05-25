import React from 'react'
import Css from './MoviesPage.module.css';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
    const params = useParams();
    console.log("MovieDetailsPage params:", params);
    const { id } = params;
    console.log("MovieDetailsPage id:", id);
    return (
        <div className={Css.MoviesPage}>
            <div className={Css.MoviesPageCard}>

            </div>
        </div>
    )
}

export default MovieDetailsPage
