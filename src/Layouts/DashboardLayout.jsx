import { Link, NavLink, Outlet } from 'react-router-dom';
import logoImg from '../assets/logo.png'
import { FaHome, FaList, FaListAlt, FaPlus, FaShoppingBag, FaShoppingCart, FaUsers } from 'react-icons/fa';
import { IoIosPersonAdd } from 'react-icons/io';
import { PiSquaresFourBold } from 'react-icons/pi';
import useGetUser from '../Hooks/useGetUser';
import { BsChatLeftDots } from 'react-icons/bs';

const DashboardLayout = () => {
    const [currentUser] = useGetUser()
    return (
        <div>
            <div className='flex gap-8 ' >
                <div className='w-1/5 flex flex-col gap-8 pt-4 '>
                    <Link className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' to='/'>
                        <img className='w-36' src={logoImg} alt="" />
                    </Link>

                    {
                        currentUser.isAdmin ? <ul className='flex flex-col gap-5'>

                            <li>
                                <NavLink style={({ isActive,  }) => {
                                    return {
                                        color: isActive ? "#F63E7B" : "",

                                    };
                                }} to='dashboard' className='flex items-center gap-2'> <FaHome></FaHome>  Admin Home</NavLink>
                            </li>

                            <li>
                                <NavLink style={({ isActive, isTransitioning }) => {
                                    return {
                                        color: isActive ? "#F63E7B" : "",

                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }} to='orderList' className='flex items-center gap-2'> <FaShoppingBag></FaShoppingBag>  Order List</NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive, isTransitioning }) => {
                                    return {
                                        color: isActive ? "#F63E7B" : "",

                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }} to='users' className='flex items-center gap-2'> <FaUsers></FaUsers> Users</NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive, isTransitioning }) => {
                                    return {
                                        color: isActive ? "#F63E7B" : "",

                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }} to='addService' className='flex items-center gap-2'> <FaPlus></FaPlus> Add Service</NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive, isTransitioning }) => {
                                    return {
                                        color: isActive ? "#F63E7B" : "",

                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }} to='makeAdmin' className='flex items-center gap-2'><IoIosPersonAdd /> Make Admin</NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive, isTransitioning }) => {
                                    return {
                                        color: isActive ? "#F63E7B" : "",

                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }} to='dashboard/manageService' className='flex items-center gap-2'> <PiSquaresFourBold /> Manage Service</NavLink>
                            </li>

                        </ul> : <ul className='flex flex-col gap-5'>

                            <li>
                                <NavLink style={({ isActive }) => {
                                    return {
                                        color: isActive ? "#F63E7B" : "",

                                    };
                                }} to='dashboard' className='flex items-center gap-2'> <FaHome></FaHome>  User Home</NavLink>
                            </li>

                            <li>
                                <NavLink style={({ isActive, isTransitioning }) => {
                                    return {
                                        color: isActive ? "#F63E7B" : "",

                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }} to='book' className='flex items-center gap-2'> <FaShoppingCart></FaShoppingCart> Book</NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive, isTransitioning }) => {
                                    return {
                                        color: isActive ? "#F63E7B" : "",

                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }} to='bookingList' className='flex items-center gap-2'> <FaListAlt></FaListAlt> Booking List</NavLink>
                            </li>
                            <li>
                                <NavLink style={({ isActive, isTransitioning }) => {
                                    return {
                                        color: isActive ? "#F63E7B" : "",

                                        viewTransitionName: isTransitioning ? "slide" : "",
                                    };
                                }} to='review' className='flex items-center gap-2'> <BsChatLeftDots /> Review </NavLink>
                            </li>
                           

                        </ul>
                    }
                </div>
                <div className='w-4/5'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;