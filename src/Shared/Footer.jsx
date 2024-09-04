import locationIcon from '../assets/icons/map-pin-2-fill.png'
import Container from './Container';

const Footer = () => {
    return (
        <div className='bg-[#F63E7B]'>
            <Container>
                <footer className="flex  text-white p-20 pb-36">
                    <aside className='flex flex-2'>
                        <img className='w-6 h-6' src={locationIcon} alt="" />
                        <p className='text-sm mr-10'>
                            H#000 (0th Floor), Road #00,<br />
                            New DOHS, Mohakhali, Dhaka, Bangladesh

                        </p>
                    </aside>
                    <nav className='flex-1 flex flex-col'>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav className='flex-1 flex flex-col'>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav className='flex-1 flex flex-col'>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;