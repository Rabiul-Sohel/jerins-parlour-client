import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAxiosSecure from "../Hooks/useAxiosSecure";


export const AuthContext = createContext()
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    // const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser = ()=>{
        return signOut(auth)
    }
    

    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser, 'auth are observing');
            setUser(currentUser)
            if(currentUser){
                axiosSecure.post('/jwt', {email: currentUser.email})
                 .then(res => {
                    console.log(res.data);
                    localStorage.setItem('token', res.data.token)
                 })
            } else {
                localStorage.removeItem('token')
            }
        })
        return ()=>{
            return unSubscribed()
        }
    },[auth])
    const authInfo= {
        createUser,
        user,
        signinUser,
        logoutUser
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProviders;