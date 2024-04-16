import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = () => {
  const movies = useSelector((store) => store.movies);
  useMovieTrailer();

  return (
    <div className="absolute w-screen">
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + movies.trailerKey + "?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
