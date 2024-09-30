import { TiShoppingCart } from "react-icons/ti";
import useGetUser from "../../../Hooks/useGetUser";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { MdRateReview } from "react-icons/md";
import { GiMoneyStack } from "react-icons/gi";
import { HiCurrencyDollar } from "react-icons/hi";
import Charts from "./Charts";

const UserHome = () => {
    const [currentUser] = useGetUser()
    const axiosSecure = useAxiosSecure()
    const { data: userStats = {} } = useQuery({
        queryKey: ['userStats'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/user-stats?email=${currentUser?.email}`)
            return response.data
            //console.log(response);
        }
    })
    return (
        <div>
            <div className="flex justify-between px-10 py-4">
                <h4 className="text-xl font-bold">User Home</h4>
                <p className="font-semibold"> {currentUser?.name} </p>
            </div>
            <div className="max-w-6xl mx-auto p-10 bg-[#F4F7FC]   ">
                <div className="flex gap-5">
                    <div className="bg-gradient-to-r text-white w-full from-[#e6e206] to-[#eeec6f] p-5 rounded-md overflow-x-auto flex justify-center items-center gap-2 text-center">
                        <TiShoppingCart className="text-4xl text-hPink" />
                        <div className="text-center">
                            <h4 className="text-3xl font-bold"> {userStats.orders} </h4>
                            <p>Orders</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r w-full text-white from-[#3a12eb] to-[#8f9cd6] p-5 rounded-md overflow-x-auto flex justify-center items-center gap-2 text-center">
                        <HiCurrencyDollar className="text-4xl text-pink" />
                        <div className="text-center">
                            <h4 className="text-3xl font-bold"> ${userStats.totalPrice} </h4>
                            <p>Total Cost</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-r w-full text-white from-[#067e16] to-[#a8f7b9] p-5 rounded-md overflow-x-auto flex  justify-center items-center gap-2 text-center">
                        <MdRateReview className="text-4xl text-hPink " />
                        <div className="text-center">
                            <h4 className="text-3xl font-bold"> {userStats.reviews} </h4>
                            <p> Reviews</p>
                        </div>
                    </div>
                </div>
                <Charts></Charts>
            </div>
           

        </div>
    );
};

export default UserHome;