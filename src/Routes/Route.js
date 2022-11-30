import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Notfound from "../Pages/Notfound/Notfound";
import Signup from "../Pages/Signup/Signup";
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
                path:'/signup',
                
                element:<Signup></Signup>
            },
            {
                path:'/',
                
                element:<Home></Home>
            },
           {
            path:'/faq',
            element:<Faq></Faq>
           },
           {
            path:'/blog',
            element:<Blog></Blog>
           },
           
            {
                path:'/',
                element:<Signup></Signup>
            },
           

        ]
       
    },
    {
        path:'*',
        element:<Notfound></Notfound>
    }
])