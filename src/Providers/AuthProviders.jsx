import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext()
const AuthProviders = ( {children} ) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app)
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signinUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logoutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    

    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser, 'auth are observing');
            setUser(currentUser)
            setLoading(false)
            if(currentUser){
                axiosPublic.post('/jwt', {email: currentUser.email})
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
    },[auth, axiosPublic])
    const authInfo= {
        createUser,
        user,
        signinUser,
        logoutUser,
        loading
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProviders;