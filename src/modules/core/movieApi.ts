import axios from 'axios';

/** OMDB API configs */
const OMDB_API_KEY = '56e731c8';
const movieApiBaseUrl = 'http://www.omdbapi.com';
export const movieApi = axios.create({
    baseURL: movieApiBaseUrl,
    params: {
        apikey: OMDB_API_KEY,
    },
});
