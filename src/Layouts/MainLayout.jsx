
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Container from '../Shared/Container';
import Banner from '../Pages/Home/Banner/Banner';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    const location = useLocation()
    if (location.pathname === '/login') {
        return <>
            <Container>
                <Outlet></Outlet>
            </Container>
        </>
    } else if (location.pathname === '/') {
        return <div>
            <div className='bg-[#FFF8F5] text-[#474747]'>
                <Container>
                    <Navbar></Navbar>
                    <Banner></Banner>
                </Container>

            </div>
            <Outlet></Outlet>
        </div>
    } else {
        return (
            <Container>
                <div>
                    <Navbar></Navbar>
                    <Outlet></Outlet>
                </div>
            </Container>
        );
    }
};

export default MainLayout;