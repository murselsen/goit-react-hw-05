import apiOptions from './apiOptions';
import axios from 'axios';

const getMovieById = async (id) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, apiOptions)
            .then(res => {
                // console.log('The Movie DB Movie by ID API call successful');
                resolve(res);
            })
            .catch(err => reject(err))
            .finally(() => console.log('The Movie DB Movie by ID API call completed'));
    });
}

export default getMovieById;