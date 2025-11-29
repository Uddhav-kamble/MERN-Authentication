import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext()

export const AppContextProvider = (props) => {

    axios.defaults.withCredentials = true;

    const backendUrl = 'https://mern-authentication-backend-sage.vercel.app'
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(false);

    // Get token from localStorage
    const getToken = () => localStorage.getItem('token');
    
    // Set token in localStorage and axios headers
    const setToken = (token) => {
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    };
    
    // Remove token
    const removeToken = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
    };

    const getAuthState = async () => {
        try {
            const token = getToken();
            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            }
            
            const {data} = await axios.get(backendUrl + '/api/auth/is-auth')

            if(data.success){
                setIsLoggedin(true)
                getUserData()
            } else {
                removeToken();
            }

        } catch (error) {
            removeToken();
            toast.error(error.message);
        }
    }

    const getUserData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/user/data');
            data.success ? setUserData(data.userData) : toast.error(data.message)
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        getAuthState();
    },[])

    const value = {
        backendUrl,
        isLoggedin, setIsLoggedin,
        userData, setUserData,
        getUserData,
        setToken,
        removeToken
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
