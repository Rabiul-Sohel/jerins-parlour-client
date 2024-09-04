import React from 'react';
import Animation from '../Animation'
import service1 from '../../../assets/icons/Group 1373.png'
import service2 from '../../../assets/icons/Group 1372.png'
import service3 from '../../../assets/icons/Group 1374.png'
import Button from '../../../Shared/Button';
import Container from '../../../Shared/Container';

const Services = () => {
    return (
        <Container>
            <div className='text-center pb-16 pt-10'>
            <Animation>
                <h2 className='text-2xl font-semibold mb-12'>Our Awesome <span className='text-[#F63E7B]'>Services</span> </h2>
            </Animation>
            <Animation>
                <div className='flex gap-5'>
                    <div className="card bg-base-100 ">
                        <figure className="px-10 pt-10">
                            <img src={service1}
                                alt="Anti Age Face Treatment"
                                className="rounded-xl w-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Anti Age Face Treatment</h2>
                            <h5 className='font-bold text-[#F63E7B]'>$199</h5>
                            <p>We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={service2}
                                alt="Hair Color & Styleing"
                                className="rounded-xl w-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Hair Color & Styleing</h2>
                            <h5 className='font-bold text-[#F63E7B]'>$99</h5>
                            <p>Amazing flyers, social media posts and brand representations that would make your brand stand out.</p>
                        </div>
                    </div>
                    <div className="card bg-base-100 ">
                        <figure className="px-10 pt-10">
                            <img src={service3}
                                alt="Anti Age Face Treatment"
                                className="rounded-xl w-20" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Skin Care Treatment</h2>
                            <h5 className='font-bold text-[#F63E7B]'>$299</h5>
                            <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                        </div>
                    </div>

                </div>
            </Animation>
            <Animation>
                <div className='mt-10'>
                    <Button text='Explore more'></Button>
                </div>
            </Animation>
        </div>
        </Container>
    );
};

export default Services;