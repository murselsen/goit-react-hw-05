import apiOptions from './apiOptions';
import axios from 'axios';

const getMovieByName = async (name) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`, apiOptions)
            .then(res =>
                resolve(res)
            )
            .catch(err => reject(err))
            .finally(() => console.log('The Movie DB Movie by Name API call completed'));
    })
}

export default getMovieByName;