import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import CourseDetailsTwo from "../Components/CourseDetailsTwo/CourseDetailsTwo";
import Courses from "../Components/Courses/Courses";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import NotFound from "../Components/NotFound/NotFound";
import Register from "../Components/Regester/Register";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/login',
                
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/courses',
                loader:()=>{
                    return fetch('http://localhost:5000/topics')
                },
                element:<Courses></Courses>
            },
            {
                path:'/courses/:id',
                loader:({params})=>{
                  return  fetch(`http://localhost:5000/topics/${params.id}`)
                },
                element:<CourseDetails></CourseDetails>
            },
           
        ]
       
    },
    {
        path:'*',
        element:<NotFound></NotFound>
    }
])