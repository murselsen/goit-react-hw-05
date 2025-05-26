import { Link } from 'react-router-dom';
import Css from './MovieList.module.css';

const MovieList = ({
    data
}) => {
    return (
        <div className={Css.MovieList}>
            {data ? (
                data.map((item, index) => {
                    return (
                        <MovieListItem
                            key={index}
                            movieId={item.id}
                            image={item.poster_path}
                            title={item.title}
                            description={item.overview}
                        />
                    )
                })
            ) : (
                null
            )}
        </div>
    )
}

const MovieListItem = ({
    movieId,
    image,
    title,
    description
}) => {
    return (
        <div className={Css.MovieItem}>
            <div className={Css.Media}>
                <img src={'https://image.tmdb.org/t/p/w500/' + image} alt={image} />
            </div>
            <div className={Css.Content}>
                <div className={Css.Info}>
                    <h2 className={Css.Title}>
                        {title}
                    </h2>
                    <p className={Css.Description}>
                        {description ? description : 'No description available'}
                    </p>
                </div>

                <div className={Css.Action}>
                    <Link to={"/movies/" + movieId} className={Css.Btn}>View</Link>

                </div>

            </div>
        </div>
    );
}

export default MovieList;