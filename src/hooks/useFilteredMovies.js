import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { getFilteredMovies } from "../utils/gptSlice"

const useFilteredMovies = () => {
    const dispatch = useDispatch();
    const gptResults = useSelector(store => store.gptSearch.gptResults);

    const searchMovies = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        
        const result = json.results.filter((i)=> i.title === movie)
        return result[0];
    }
    const filteredMovies = async ()=> {
        const movieArr = gptResults && gptResults.map((movie)=> searchMovies(movie))
        const searchResult = movieArr && await Promise.all(movieArr);
        dispatch(getFilteredMovies(searchResult))
    }

    useEffect(()=> {
        gptResults && filteredMovies();
    }, [gptResults])
    return <div></div>
}

export default useFilteredMovies;