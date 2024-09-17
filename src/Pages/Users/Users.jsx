
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Users = () => {
    const axiosSecure = useAxiosSecure()
    const token = localStorage.getItem('token')
    const {data:users=[]} = useQuery({
        queryKey: ['userData'],
        queryFn: async()=>{
            const response = await axiosSecure.get('/users',
                {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            return response.data
        }
    })
   
    return (
        <div>
            <h3>This is users page</h3>
            <p> {users.length} </p>

        </div>
    );
};

export default Users;