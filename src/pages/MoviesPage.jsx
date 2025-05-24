import Css from './MoviesPage.module.css';

const MoviesPage = () => {
    return (
        <div className={Css.MoviesPage}>
            <div className={Css.MoviesPageCard}>
                <form action="/movies" className={Css.Form}>
                    <input className={Css.Input} name='filmName' type="text" placeholder="Search for a movie..." />
                    <button className={Css.Btn} type="submit">Search</button>
                </form>
            </div>
            {/* <MovieList data={movies} /> */}
        </div>
    );
}

export default MoviesPage;