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
    return (
        console.log("Movie: ", movie),
        <div className={Css.MoviesPage}>
            <div className={Css.MovieDetailsCard}>
                <div className={Css.Media}>
                    <img src={'https://image.tmdb.org/t/p/w500' + poster_path} />
                </div>
                <div className={Css.Content}>
                    <h1 className={Css.Title}>{title}</h1>
                    <p className={Css.Description}>
                        {
                            overview ? overview : 'No description available'
                        }
                    </p>

                    {/*   <div className={Css.ContentItem}>
                        <label className={Css.Label}>Title</label>
                        <h1 className={[Css.Title, Css.Badge].join(' ')}>
                            {title}
                        </h1>
                    </div>
                  
                    <div className={Css.ContentItem}>
                        <label className={Css.Label}>Vote</label>
                        <h4 className={[Css.Title, Css.Badge].join(' ')}>
                            {vote_count}
                        </h4>
                    </div>
                    <div className={Css.ContentItem}>
                        <label className={Css.Label}>Overview</label>
                        <p className={[Css.Description, Css.Badge].join(' ')}>
                            {overview}
                        </p>
                    </div>
                    <div className={Css.ContentItem}>
                        <label className={Css.Label}>Genres</label>
                        <div className={Css.Badges}>

                            {genres ? genres.map((genre) => <span key={genre.id}>{genre.name}</span>) : <span>No genres available</span>}

                        </div>
                    </div>
 */}


                </div>
            </div>
        </div>
    );

}

export default MovieDetailsPage
