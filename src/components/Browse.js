import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import GptSearchBar from "./GptSearchBar";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const gptSearch = useSelector((store) => store.gptSearch);
  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useUpcoming();
  return (
    <div>
      {!gptSearch.gptSearchPage ? (
        <>
          <Header />
          <GptSearchBar />
          <MainContainer />
          <SecondaryContainer />
        </>
      ) : (
        <>
          <Header />
          <GptSearchPage />
        </>
      )}
    </div>
  );
};

export default Browse;
