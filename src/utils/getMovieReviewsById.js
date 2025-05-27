import apiOptions from './apiOptions';
import axios from 'axios';

const getMovieReviewsById = async (id) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, apiOptions)
            .then(res =>
                resolve(res)
            )
            .catch(err => reject(err))
            .finally(() => console.log('The Movie DB Movie Reviews by ID API call completed'));
    })
}

export default getMovieReviewsById;