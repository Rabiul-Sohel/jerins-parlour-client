import React from 'react';
import Animation from '../Animation'
import service1 from '../../../assets/icons/Group 1373.png'
import service2 from '../../../assets/icons/Group 1372.png'
import service3 from '../../../assets/icons/Group 1374.png'
import Button from '../../../Shared/Button';
import Container from '../../../Shared/Container';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const Services = () => {
    const axiosSecure = useAxiosSecure()
    const {data:services=[]} = useQuery({
        queryKey: ['services'],
        queryFn: async()=>{
            const res = await axiosSecure('/services')
            return res.data
        }
    })

    console.log(services);
    return (
        <Container>
            <div className='text-center pb-16 pt-10'>
                <Animation>
                    <h2 className='text-2xl font-semibold mb-12'>Our Awesome <span className='text-[#F63E7B]'>Services</span> </h2>
                </Animation>
                <Animation>
                    <div className='flex gap-5'>
                        {
                            services.map(service => <Link key={service._id} state={service} to='/dashboard/book' className="card bg-base-100 hover:shadow-xl ">
                                <figure className="px-10 pt-10">
                                    <img src={service.image}
                                        alt="Anti Age Face Treatment"
                                        className="rounded-xl w-20" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title"> {service.title} </h2>
                                    <h5 className='font-bold text-[#F63E7B]'>$ {service.price} </h5>
                                    <p> {service.description} </p>
                                </div>
                            </Link>)
                        }
                        
                        
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