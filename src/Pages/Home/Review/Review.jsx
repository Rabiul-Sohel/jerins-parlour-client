

import { useQuery } from '@tanstack/react-query';
import 'swiper/css';
import '../../Home/Review/style.css'
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import img from '../../../assets/images/user.png'
import Container from '../../../Shared/Container';


const Review = () => {
    const axiosSecure = useAxiosSecure()
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews', axiosSecure],
        queryFn: async () => {
            const response = await axiosSecure.get('/reviews')
            return response.data
        }
    })
    console.log(reviews);

    return (
        <div className='bg-slate-300 relative'>
            <div className=' inset-0 bg-pink w-2/6 h-6 [clip-path:polygon(0_0,100%_0,96%_100%,0_100%)]'>

            </div>
            <Container>
            <div className='text-black '>
                <div className='text-center pt-16'><h3 className='text-3xl font-bold'>Testimonials</h3></div>
                <div className='min-h-[70vh] flex items-center'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,  // Slide will change every 3 seconds
                            disableOnInteraction: false, // Autoplay won't stop after user interaction
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper relative min-h-[50vh]   "
                    >

                        {
                            reviews.map(review => <SwiperSlide key={review._id}>
                                <div className=" max-h-60 w-96"> 
                                    <div className="card-body">
                                        <div className='flex justify-start gap-3 mb-3 items-center'>
                                            <div>
                                                <img src={review.customerImage ? review.customerImage : img} className='w-16 h-16 rounded-full border-0 bg-white' alt="" />
                                            </div>
                                            <div>
                                                <h2 className='font-bold text-xl'> {review.customerName} </h2>
                                                <h5 className=''> {review.designation} </h5>
                                            </div>
                                        </div>
                                        <p className='text-[#606268] text-left'> {review.description.slice(0,120)}  </p>
                                        <div className="rating rating-md">
                                            <input type="radio" defaultChecked={review.rating === 1} name="" className="mask mask-star-2 bg-orange-400" />
                                            <input
                                                type="radio"
                                                name=""
                                                className="mask mask-star-2 bg-orange-400"
                                                defaultChecked={review.rating === 2} />
                                            <input defaultChecked={review.rating === 3} type="radio" name="" className="mask mask-star-2 bg-orange-400" />
                                            <input defaultChecked={review.rating === 4} type="radio" value='4' name="" className="mask mask-star-2 bg-orange-400" />
                                            <input defaultChecked={review.rating === 5} type="radio" name="" className="mask mask-star-2 bg-orange-400" />
                                        </div>
                                        

                                    </div>
                                </div>
                            </SwiperSlide>)
                        }



                    </Swiper>
                </div>
            </div>
        </Container>
        </div>
    );
};

export default Review;