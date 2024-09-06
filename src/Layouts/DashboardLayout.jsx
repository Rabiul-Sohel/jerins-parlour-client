import { Link, NavLink, Outlet } from 'react-router-dom';
import logoImg from '../assets/logo.png'
import { FaHome, FaPlus, FaShoppingBag, FaUsers } from 'react-icons/fa';
import { IoIosPersonAdd } from 'react-icons/io';
import { PiSquaresFourBold } from 'react-icons/pi';

const DashboardLayout = () => {
    return (
        <div>
            <div className='flex gap-8 ' >
                <div className='w-1/4 flex flex-col gap-8 pt-4 '>
                    <Link className='hover:animate-pulse' to='/'>
                        <img className='w-36' src={logoImg} alt="" />
                    </Link>
                    <ul className='flex flex-col gap-5'>

                        <li>
                            <NavLink style={({ isActive, isPending, isTransitioning }) => {
                                return {
                                    color: isActive ? "#F63E7B" : "",

                                };
                            }} to='dashboard' className='flex items-center gap-2'> <FaHome></FaHome>  Dashboard Home</NavLink>
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

                    </ul>
                </div>
                <div className='w-3/4'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;