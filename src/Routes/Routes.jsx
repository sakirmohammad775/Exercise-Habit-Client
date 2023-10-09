
import { createBrowserRouter } from "react-router-dom"
import Roots from "../Layout/Roots/Roots"
import Home from "../Allpages/Home/Home"

import ServicesDetails from "../Services/ServicesDetails"
import Login from "../Login/Login"
import Register from "../Register/Register"



const routes =createBrowserRouter([
    {
        path:'/',
        element:<Roots></Roots>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/category/:id',
                element:<ServicesDetails></ServicesDetails>,
                loader:()=>fetch('categories.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
           
        ]
    }
])
export default routes