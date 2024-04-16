import { IMG_URL } from "../utils/constants";
import { getMovie } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({movie, backdropPath}) => {
    const dispatch = useDispatch();
    const imageURL = movie.length ? IMG_URL + movie.backdrop_path : IMG_URL + backdropPath;

    const handleGetMovieId = () => {
        dispatch(getMovie(movie))
    }

    return <div className="p-2 " onClick={handleGetMovieId}>
        <img className="w-72 h-42 hover:border-4 border-slate-100" alt="Movie Card" src={imageURL}/>
    </div>
}

export default MovieCard;