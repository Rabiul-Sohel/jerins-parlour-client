import React from 'react';
import useGetUser from '../../../Hooks/useGetUser';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const BookingList = () => {
    const [currentUser] = useGetUser()
    const axiosSecure = useAxiosSecure()
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', currentUser],
        queryFn: async () => {
            const response = await axiosSecure.get(`/bookings?email=${currentUser?.email}`)
            return response.data;
        }
    })
    console.log(bookings);
    
    return (
        <div>
            <div className="flex justify-between px-10 py-4">
                <h4 className="text-xl font-bold">Booking List</h4>
                <p className="font-semibold"> {currentUser?.name} </p>
            </div>
            <div className="max-w-4xlxl p-10 bg-[#F4F7FC] min-h-[90vh] grid grid-cols-2 gap-8">
                {
                    bookings.map(booking =>
                        <div key={booking._id} className="card bg-base-100 max-h-60 w-96  ">
                            <div className="card-body">
                                <div className='flex justify-between mb-3'>
                                    <img className='w-16' src={booking.service?.image} alt="" />
                                    <div>
                                        {
                                            booking.deliveryStatus === 'Pending' && <h5 className='bg-[#FFE3E3] w-24 text-center text-[#FF4545] px-4 py-2 rounded-md shadow-md'> {booking.deliveryStatus} </h5>
                                        }
                                        {
                                            booking.deliveryStatus === 'Done' && <h5 className='bg-[#C6FFE0] text-[#009444] w-24 text-center px-4 py-2 rounded-md shadow-md'> {booking.deliveryStatus} </h5>
                                        }
                                        {
                                            booking.deliveryStatus === 'On going' && <h5 className='bg-[#fceddb] text-[#FFBD3E]  text-center px-4 py-2 rounded-md shadow-md'> {booking.deliveryStatus} </h5>
                                        }
                                    </div>
                                </div>
                                <h2 className="card-title"> {booking.service?.title} </h2>
                                <p className='text-[#606268]'> {booking.service.description} </p>

                            </div>
                        </div>)
                }
            </div>

        </div>
    );
};

export default BookingList;