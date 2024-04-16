export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: "Bearer " + process.env.REACT_APP_TMDB_APIKEY

    }
}

export const IMG_URL = "https://image.tmdb.org/t/p/w500/"

export const OPENAI_APIKEY = process.env.REACT_APP_OPENAI_APIKEY;

