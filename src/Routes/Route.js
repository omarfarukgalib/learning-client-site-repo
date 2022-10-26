import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Home from "../Components/Home/Home";
import NotFound from "../Components/NotFound/NotFound";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                loader:()=>{
                    return fetch('http://localhost:5000/topics')
                },
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
       
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
])