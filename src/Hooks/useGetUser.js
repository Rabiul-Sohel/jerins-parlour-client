import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useGetUser = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data:savedUser={}} = useQuery({
        queryKey: ['savedUser', user.email],
        queryFn: async()=> {
           const res = await axiosSecure.get(`/singleUser?email=${user.email}`)
           return res.data;
        }
    })
    return [savedUser];
};

export default useGetUser;