import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getMovieById from '../utils/getMovieById';
// Css 
import Css from './MoviesPage.module.css';

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

    const { title, poster_path, overview } = movie || {};
    return (
        console.log("Movie: ", movie),
        <div className={Css.MoviesPage}>
            <div className={[Css.MoviesPageCard, Css.MovieDetailsCard].join(' ')}>
                <div className={Css.Media}>
                    <img src={'https://image.tmdb.org/t/p/w500' + poster_path} />
                </div>
                <div className={Css.Content}>
                    <div className={Css.ContentItem}>
                        <label className={Css.Label}>Title</label>
                        <h1 className={[Css.Title, Css.Badge].join(' ')}>
                            {title}
                        </h1>
                    </div>

                    <p className={Css.Description}>{overview}</p>
                </div>
            </div>
        </div >
    );

}

export default MovieDetailsPage
