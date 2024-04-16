import { useSelector } from "react-redux"

const VideoTitle = () => {
    const movies = useSelector(store => store.movies)
    const title = movies && movies.popular ? movies.popular.filter((movie) => movie.id === 823464)[0].title : ""
    const overview = movies && movies.popular ? movies.popular.filter((movie) => movie.id === 823464)[0].overview : ""
    return (movies && movies.movie && <div className="absolute w-screen aspect-video text-white md:pt-[10%] pt-48 sm:pt-72 text-center md:text-left px-8 font-sans bg-gradient-to-tr from-black">
        <h1 className="md:p-8 md:text-3xl text-3xl font-bold ">{movies && movies.movie && movies.movie.title ? movies.movie.title: title}</h1>
        <h3 className="md:w-[45%] md:text-sm md:px-8 py-3 hidden md:flex sm:hidden">{movies && movies.movie && movies.movie.overview ? movies.movie.overview: overview}</h3>
        <div className="p-8 space-x-2">
            <button className="px-5 py-2 bg-white border border-slate-600 rounded-md text-black hover:bg-opacity-80">Play</button>
            <button className="px-5 py-2 bg-white border border-slate-600 rounded-md text-black hover:bg-opacity-80">More Info</button>
        </div>        
    </div>)
}

export default VideoTitle;