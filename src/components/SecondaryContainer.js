import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return <div className="md:pt-[600px] sm:pt-[40%] pt-[250px] bg-black grid">
        <div className="md:-mt-64 -mt-18 pt-28 sm:-mt-18 ">
        <MovieList title={"Popular"} movies={movies.popular}/>
        <MovieList title={"Top Rated"} movies={movies.topRated}/>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Upcoming"} movies={movies.upcoming}/>
        </div> 
    </div>
}

export default SecondaryContainer;