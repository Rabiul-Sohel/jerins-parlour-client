import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    console.log(location);
    if(loading){
        return <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-md"></span>
        </div>
    }
   
    if(user){
        return children
    } else {
        return <Navigate state={location.pathname} to='/login'/>
    }
    
};

export default PrivateRoute;