import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import getMovieById from '../utils/getMovieById';


// Styles
import Css from './MoviesPage.module.css';

// Components
import MovieList from '../components/MovieList';

// Icons
import { CiSearch } from "react-icons/ci";
import getMovieByName from '../utils/getMovieByName';

const MoviesPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [results, setResults] = useState();

    const handleChangeForm = (event) => {
        event.preventDefault();
        const query = event.target;
        // console.log('Search term:', query.value);
        if (!query.value) {
            setSearchParams();
        }
        setSearchParams({
            query: query.value,
        });
    };
    const handleSubmitForm = (event) => {
        event.preventDefault();
        const query = event.target;
        const formData = new FormData(query);
        // console.log('Search term:', query);
        setSearchParams({ query: formData.get('query') });
    }

    useEffect(() => {
        const query = searchParams.get('query');
        if (query) {
            getMovieByName(query)
                .then(res => {
                    setResults(res.data.results);
                })
                .catch(err => {
                    console.error('Error fetching search results:', err);
                });
        }
    }, [searchParams]);


    return (
        <div className={Css.MoviesPage}>
            <div className={Css.MoviesPageCard}>
                <form
                    action="/movies"
                    className={Css.Form} onSubmit={handleSubmitForm}>
                    <div className={Css.InputGroup}>
                        <CiSearch
                            color='currentcolor'
                            size={24} />
                        <input
                            className={Css.Input}
                            name='query'
                            onChange={handleChangeForm}
                            type="text"
                            placeholder="Search for a movie..."
                        />
                    </div>

                    <button
                        className={Css.Btn}
                        type="submit">
                        <CiSearch
                            color='currentcolor'
                            size={40}
                        />
                    </button>
                </form>
            </div>
            {results ? <div className={Css.MoviesPageCard}><MovieList data={results} /></div> : <div className={Css.MoviesPageCard}><p className={Css.error}>Film Not Found !</p></div>}
        </div>
    );
}

export default MoviesPage;