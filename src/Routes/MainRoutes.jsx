import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import DashboardLayout from "../Layouts/DashboardLayout";
import Users from "../Pages/Users/Users";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "../Pages/Dashboard/MakeAdmin/MakeAdmin";
import PrivateRoute from "./PrivateRoute";
import Book from "../Pages/Dashboard/Book/Book";
import AddService from "../Pages/Dashboard/AddService/AddService";
import OrderList from "../Pages/Dashboard/OrderList/OrderList";
import BookingList from "../Pages/Dashboard/BookingList/BookingList";
import Review from "../Pages/Dashboard/Review/Review";
import PaymentSuccess from "../Pages/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../Pages/PaymentFail/PaymentFail";

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
                path: 'payment/success/:tranId',
                element: <PaymentSuccess></PaymentSuccess>
            },
            {
                path: 'payment/fail/:tranId',
                element: <PaymentFail></PaymentFail>
            },
            
            {
                path: 'dashboard',
                element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
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
                    },
                    {
                        path: 'book',
                        element: <Book></Book>
                    },
                    {
                        path: 'addService',
                        element: <AddService></AddService>
                    },
                    {
                        path: 'orderList',
                        element: <OrderList></OrderList>
                    },
                    {
                        path: 'bookingList',
                        element: <BookingList></BookingList>
                    },
                    {
                        path: 'review',
                        element: <Review></Review>
                    }
                ]
            }
        ]
    }
])

export default router