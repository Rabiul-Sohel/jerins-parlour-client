import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import Button from "./Button";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import useAuth from "../Hooks/useAuth";


const Navbar = () => {
    const { user, logoutUser } = useAuth()

    const handleLogout = ()=>{
        logoutUser()
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    const navOptions = <>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/portfolio'>Our Portfolio</NavLink>
        </li>
        <li>
            <NavLink to='/team'>Our Team</NavLink>
        </li>
        <li>
            <NavLink to='/contact'>Contact Us</NavLink>
        </li>
    </>
    return (
        <div className="navbar">
            <div className="navbar-start">

                <img className="w-36" src={logo} alt="" />
            </div>

            <div className="navbar-end">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul//react.dev/reference/react/useContext
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div>
                    {
                        user ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><button onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </div> : <Button text='Login' path='/login'></Button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;