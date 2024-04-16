import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import GptSearchPage from "./GptSearchPage"

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
        {
            path: "/GptSearch",
            element: <GptSearchPage/>
        },

    ])

    return (<div>
        <RouterProvider router={appRouter}/>
    </div>)
}

export default Body;