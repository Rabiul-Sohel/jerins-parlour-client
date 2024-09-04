import { createContext } from "react";

export const AuthContext = createContext()
const AuthProviders = ({ children }) => {
    const authInfo= {
        name:'rabiul'
    }
    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProviders;