import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerKey } from "../utils/moviesSlice";

const useMovieTrailer = () => {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies)
    
    const getMovieVideo = async (movieId) => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
        
        const filteredData = json.results.filter(i => i.type === "Trailer")
        const trailer = filteredData.length ? filteredData[0] : json.results[0]
        dispatch(addTrailerKey(trailer.key))
      };
      
    
      useEffect(() => {
        movies && movies.movie && movies.movie.id ? getMovieVideo(movies.movie.id) : getMovieVideo("823464")
      }, [movies.movie]);
}

export default useMovieTrailer;