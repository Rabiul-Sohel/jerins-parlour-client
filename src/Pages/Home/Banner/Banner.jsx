import bannerImg from '../../../assets/images/bannerImg.png'
import Button from '../../../Shared/Button';
import Container from '../../../Shared/Container';

const Banner = () => {
    return (
        <Container>
            <div className="flex w-full justify-around px-3 items-center gap-20">
            <div className='flex-1 space-y-5'>
                <h3 className='text-3xl text-black font-bold'>BEAUTY SALON <br></br> FOR EVERY WOMEN</h3>
                <p className='w-96'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <div>
                    <Button text='Get an Appointment'></Button>
                </div>
            </div>
            <div className='flex-1'>
                <img className='w-[484px]' src={bannerImg} alt="" />
            </div>
        </div>
        </Container>
    );
};

export default Banner;