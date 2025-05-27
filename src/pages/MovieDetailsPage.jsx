import { useState, useEffect, Children } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import getMovieById from '../utils/getMovieById';
// Css 
import Css from './MoviesDetailsPage.module.css';

const MovieDetailsPage = () => {

    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);
    const [reviews, setReviews] = useState([]);

    // Get the current tab from the URL
    const location = useLocation();
    const currentTab = location.pathname.split('/').pop();

    // Get the movie ID from the URL parameters
    const params = useParams();
    const { id } = params;

    // Fetch movie details by ID
    // useEffect to fetch movie details when the component mounts or when the ID changes
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

    const { title, tagline, poster_path, overview, vote_average, vote_count, genres, production_companies } = movie || {};

    const genresMap = genres ? genres.map(genre => genre.name).join(', ') : 'No genres available';

    return (

        <div className={Css.MoviesPage}>
            <div className={Css.MovieDetailsCard}>
                <div className={Css.Media}>
                    <img src={'https://image.tmdb.org/t/p/w500' + poster_path} />
                </div>
                <div className={Css.Content}>
                    <h1 className={Css.Title}>{title}</h1>
                    <p className={Css.Description}>{tagline}</p>
                    <ContentItem label="User Score:" altValue={`${Math.round(vote_average * 10)}% ` + `Vote: (${vote_count})`} />
                    <ContentItem label="Overview:" altValue={overview} />
                    <ContentItem label="Genres:" altValue={genresMap} />
                    <ContentItem label="Production Companies:" />
                    <div className={Css.Companies}>{production_companies &&
                        production_companies.map(({ logo_path }, index) => {
                            return (
                                logo_path && <img key={index} src={'https://image.tmdb.org/t/p/w500/' + logo_path} />
                            )
                        })} </div>
                </div>
            </div>
            <div className={Css.Tabs}>
                <a href={`/movies/${id}/cast`} className={currentTab === 'cast' ? `${Css.Tab} ${Css.Active}` : Css.Tab}><b>Cast</b></a>
                <a href={`/movies/${id}/reviews`} className={currentTab === 'reviews' ? `${Css.Tab} ${Css.Active}` : Css.Tab}><b>Reviews</b></a>
            </div>
            <div className={Css.TabContentWrapper}>
                <div className={currentTab === 'cast' ? `${Css.TabContent} ${Css.Active}` : Css.TabContent}>
                    <div className={Css.CastItem}>
                        <img src="https://via.placeholder.com/150" alt="Actor" />
                        <div className={Css.CastContent}>
                            <h6 className={Css.Name}>Mürsel</h6>
                        </div>
                    </div>
                </div>
                <div className={currentTab === 'reviews' ? `${Css.TabContent} ${Css.Active}` : Css.TabContent}></div>
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

