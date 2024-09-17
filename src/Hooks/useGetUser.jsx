import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useGetUser = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data:savedUser={}} = useQuery({
        queryKey: ['savedUser', user],
        queryFn: async()=> {
           const res = await axiosSecure.get(`/singleUser?email=${user.email}`)
           return res.data;
        }
    })
    // console.log(savedUser);
    return [savedUser];
};

export default useGetUser;