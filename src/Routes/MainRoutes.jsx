import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import DashboardLayout from "../Layouts/DashboardLayout";
import Users from "../Pages/Users/Users";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "../Pages/Dashboard/MakeAdmin/MakeAdmin";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <Signup></Signup>
            },
            {
                path: 'dashboard',
                element: <DashboardLayout></DashboardLayout>,
                children:[
                    {
                        path: 'dashboard',
                        element: <DashboardHome></DashboardHome>
                    },
                    {
                        path: 'users',
                        element: <Users></Users>
                    },
                    {
                        path: 'makeAdmin',
                        element: <MakeAdmin></MakeAdmin>
                    }
                ]
            }
        ]
    }
])

export default router