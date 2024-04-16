
import {useDispatch} from "react-redux"
import { toggleGptSearch } from "../utils/gptSlice";

const GptSearchBar = () => {
    const dispatch = useDispatch();
  const handleGptPage = () => {
    dispatch(toggleGptSearch())
  };

  return (
    <div className="absolute z-10 md:right-32 right-24 mt-2">
      <button
        onClick={handleGptPage}
        className="p-2 md:mt-2 bg-red-700 border rounded-md border-red-700 text-white"
      >
        Movie Advisor
      </button>
    </div>
  );
};

export default GptSearchBar;
