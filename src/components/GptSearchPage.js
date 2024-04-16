import { useRef } from "react";
import openai from "../utils/openai";
import { useDispatch, useSelector } from "react-redux";
import { getGptMovies } from "../utils/gptSlice";
import useFilteredMovies from "../hooks/useFilteredMovies";
import MovieList from "./MovieList";

const GptSearchPage = () => {
  const userInput = useRef(null);
  const dispatch = useDispatch();
  const filteredMovies = useSelector((store) => store.gptSearch.filteredMovies);
  const handleGptPage = async () => {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content:
            "Act like a movie recommender and give 10 movies on" +
            userInput.current.value +
            ". Result should not listed in number but in comma separated. Consider example like this - Hera Pheri, Kahaani, Golmaal, Housefull.",
        },
      ],
      model: "gpt-3.5-turbo",
    });

    dispatch(getGptMovies(completion.choices[0].message.content.split(", ")));
  };
  useFilteredMovies();
  return (
    <div>
      <div className="absolute flex">
        <img
          className="h-screen object-cover md:w-screen md:object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="backgrd"
        />
        <div className="absolute px-8 py-2 bg-gradient-to-t from-black w-full h-full"></div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-6/12 md:flex sm:flex grid p-12 my-36 mx-auto right-0 left-0 bg-black bg-opacity-80 text-white"
      >
        <input
          ref={userInput}
          type="text"
          placeholder="What would you like to watch today?"
          className="p-3 my-2 w-full bg-black border border-slate-600 rounded-md"
        />
        <button
          onClick={handleGptPage}
          className="px-4 m-2 bg-red-700 border rounded-md border-red-700 text-white"
        >
          Search
        </button>
      </form>
      <div className="text-white md:pt-[330px] pt-[350px] sm:pt-[50%] text-center">
        {filteredMovies && <h1 className="relative text-3xl p-2">Results:</h1>}
        {filteredMovies &&
          filteredMovies.map(
            (movie) => movie && <h3 className="relative">{movie.title}</h3>
          )}
        <MovieList title={"Recommendations"} movies={filteredMovies} />
      </div>
    </div>
  );
};

export default GptSearchPage;
