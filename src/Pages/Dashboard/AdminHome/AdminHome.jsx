import { useQuery } from "@tanstack/react-query";
import useGetUser from "../../../Hooks/useGetUser";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { AiOutlineProduct } from "react-icons/ai";
import { FaCartPlus, FaMoneyBill, FaUsers } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi";
import Recharts from "./Recharts/Recharts";


const AdminHome = () => {
    const [currentUser] = useGetUser()
    const axiosSecure = useAxiosSecure()
    const { data: adminStats = {} } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const response = await axiosSecure.get('/admin-stats')
            return response.data;
        }
    })
    console.log(adminStats);


    return (
        <div>
            <div className="flex justify-between px-10 py-4">
                <h4 className="text-xl font-bold">Admin Home</h4>
                <p className="font-semibold"> {currentUser?.name} </p>
            </div>
            <div className="max-w-4xlxl p-10 text-center bg-[#F4F7FC] min-h-[90vh] ">
                <div className="stats shadow mx-auto">
                    <div className="stat mx-auto">
                        <div className="stat-figure text-secondary">
                            <AiOutlineProduct className="text-4xl" />
                        </div>
                        <div className="stat-title">Services</div>
                        <div className="stat-value"> {adminStats?.services} </div>

                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className="text-4xl"></FaUsers>
                        </div>
                        <div className="stat-title">Users</div>
                        <div className="stat-value"> {adminStats.users} </div>
                        {/* <div className="stat-desc">↗︎ 400 (22%)</div> */}
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaCartPlus className="text-4xl"></FaCartPlus>
                        </div>
                        <div className="stat-title"> Orders </div>
                        <div className="stat-value">{adminStats.orders}</div>
                        {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                    </div>
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <HiCurrencyDollar className="text-4xl" />
                        </div>
                        <div className="stat-title"> Revenue </div>
                        <div className="stat-value"> ${adminStats.totalPrice}</div>
                        {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
                    </div>
                </div>
                <div className="mx-auto  flex justify-center mt-10">
                    <Recharts></Recharts>
                </div>

            </div>


        </div>
    );
};

export default AdminHome;