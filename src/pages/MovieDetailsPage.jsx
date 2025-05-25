import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovieById from '../utils/getMovieById';
// Css 
import Css from './MoviesDetailsPage.module.css';

const MovieDetailsPage = () => {

    const [movie, setMovie] = useState(null);

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        getMovieById(id)
            .then(({ data }) => {
                setMovie(data);
                console.log('Movie details fetched:', data);
            })

            .catch((error) => {
                console.error('Error fetching movie details:', error);
            });

    }, [id]);

    const { title, poster_path, overview, vote_average, vote_count, genres } = movie || {};
    console.log("Movie: ", movie);
    return (

        <div className={Css.MoviesPage}>
            <div className={Css.MovieDetailsCard}>
                <div className={Css.Media}>
                    <img src={'https://image.tmdb.org/t/p/w500' + poster_path} />
                </div>
                <div className={Css.Content}>
                    <h1 className={Css.Title}>{title}</h1>
                    <ContentItem label="User Score:" value={`${Math.round(vote_average * 10)}%`} />
                    <ContentItem label="Overview:" altValue={overview} />
                </div>
            </div>
        </div>
    );

}


const ContentItem = ({ label, value, altValue }) => {
    return (
        <div className={Css.ContentItem}>
            {label && <label className={Css.Label}>{label}</label>}
            {value && <h4 className={Css.Title}>{value}</h4>}
            {altValue && <p className={Css.Description}>{altValue}</p>}
        </div>
    )
}


export default MovieDetailsPage
