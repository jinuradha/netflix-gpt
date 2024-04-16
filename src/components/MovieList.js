import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
  return (
    movies && (
      <div className="p-4 relative">
        <h1 className="px-4 font-bold text-3xl text-white">{title}</h1>
        <div className="w-screen overflow-x-scroll no-scrollbar">
          <div className="p-2 flex w-max">
            {movies.map((movie) => (
                movie && <MovieCard key={movie.id} movie={movie} backdropPath={movie.backdrop_path}/>
              ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
