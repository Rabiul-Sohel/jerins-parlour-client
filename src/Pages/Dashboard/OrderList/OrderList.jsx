import { useQuery } from "@tanstack/react-query";
import useGetUser from "../../../Hooks/useGetUser";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const OrderList = () => {
    const [currentUser] = useGetUser()
    const axiosSecure = useAxiosSecure()
    const {data:orders=[], refetch}= useQuery({
        queryKey: ['orders', axiosSecure],
        queryFn: async()=>{
            const response = await axiosSecure.get('/orders')
            return response.data
        }
    })
    // console.log(orders);
    const handleOrderStatus = (e, id) =>{
        const status = e.target.value
         axiosSecure.patch(`/orders/${id}`, {status})
            .then(res => {
                if(res.data.modifiedCount > 0){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Order status updated to ${status}`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      refetch()
                }
            })
    }
    const handleBkashRefund = async(trxID) =>{
        try {
            const {data} = await axiosSecure.post(`/bkash/payment/refund/${trxID}`)
            if(data.response.modifiedCount){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Refunded Successfull",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch()
            }
            
        } catch (error) {
            console.log(error.message);
        }
        // console.log(trxID);
    }

   
    return (
        <div>
            <div className="flex justify-between px-10 py-4">
                <h4 className="text-xl font-bold">Order List</h4>
                <p className="font-semibold"> {currentUser?.name} </p>
            </div>
            <div className="max-w-4xlxl p-10 bg-[#F4F7FC] min-h-[90vh] ">
                <div className="bg-base-100 p-5 rounded-md overflow-x-auto">
                    <table className=" mx-auto text-center w-full  ">
                        {/* head */}
                        <thead style={{borderRadius: ''}} className="rounded-md " >
                            <tr className="leading-7">
                                
                                <th className="rounded-l-md bg-[#F5F6FA] ">Name</th>
                                {/* <th className="bg-[#F5F6FA]">Email ID</th> */}
                                <th className="bg-[#F5F6FA]">Service</th>
                                <th className="bg-[#F5F6FA]">Pay With</th>
                                <th className="bg-[#F5F6FA]">Payment Status</th>
                                <th className="bg-[#F5F6FA] ">Status</th>
                                <th className="bg-[#F5F6FA] rounded-r-md">Action</th>
                            </tr>
                        </thead>
                        <tbody className="leading-10 text-sm ">
                            {/* row 1 */}
                            {
                                orders.map(order => <tr key={order._id} className="">
                                
                                    <td className=""> {order.name} </td>
                                    {/* <td> {order.email} </td> */}
                                    <td> {order.service?.title} </td>
                                    <td> {order.paymentMethod} </td>
                                    <td> {order.paymentStatus} </td>
                                    <td>
                                        
                                        <select onChange={(e)=>handleOrderStatus(e, order._id)} className={`${order.deliveryStatus === 'Pending' ? 'text-red-500': order.deliveryStatus === 'Done' ? 'text-green-500' : 'text-yellow-500'} `} defaultValue={order.deliveryStatus}  >
                                            <option value="Pending">Pending</option>
                                            <option value="On going">On going</option>
                                            <option value="Done">Done</option>
                                        </select>
                                    </td>
                                    <td>
                                        {
                                            order.paymentStatus === 'Successfull' && <button onClick={()=>handleBkashRefund(order.paymentInfo.trxID)} className="btn">Refund</button>
                                        }
                                    </td>
                                </tr>)
                            }
                           
                            
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default OrderList;