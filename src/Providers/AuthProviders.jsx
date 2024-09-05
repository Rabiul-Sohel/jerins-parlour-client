import { createContext, useEffect, useState } from "react";
import app from "../../firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";


export const AuthContext = createContext()
const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)

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