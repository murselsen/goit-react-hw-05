import apiOptions from './apiOptions';
import axios from 'axios';

const getMovieCreditsById = async (id) => {
    return new Promise((resolve, reject) => {
        axios
            //https://api.themoviedb.org/3/movie/${id}/credits?language=en-US
            .get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, apiOptions)
            .then(res =>
                resolve(res)
            )
            .catch(err => reject(err))
            .finally(() => console.log('The Movie DB Movie Credits by ID API call completed'));
    })
}

export default getMovieCreditsById;