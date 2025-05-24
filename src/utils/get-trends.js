import axios from "axios";
import options from "./apiOptions";
const getTrends = async () => {
    return new Promise((resolve, reject) => {
        axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
            .then(res => {
                console.log('The Movie DB Trending API call successful');
                resolve(res);
            })
            .catch(err => reject(err))
            .finally(() => console.log('The Movie DB Trending API call completed'));
    });
}


export default getTrends;