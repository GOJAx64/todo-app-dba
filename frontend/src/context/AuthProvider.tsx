import { createContext, useEffect, useState } from "react"
import axiosClient from "../config/axiosClient";

const AuthContext= createContext();

const AuthProvider = ({ children }:any) => {
    
    const [auth, setAuth] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      const authenticateUser = async() => {
        const token = localStorage.getItem('token');
        
        if(!token) {
            setLoading(false);
            return
        }
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        };

        try {
            const { data } = await axiosClient('/auth/profile', config);
            setAuth(data);
        } catch (error) {
            setAuth({});
        }
        setLoading(false);
      };
      
      authenticateUser();
    }, [])
    

    return (
        <AuthContext.Provider 
            value={{
                auth,
                setAuth,
                loading
            }}
        >
            { children }
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;