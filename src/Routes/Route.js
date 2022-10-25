import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
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
            }
        ]
    }
])