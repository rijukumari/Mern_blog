import { Children, createContext, useEffect, useState } from "react";
// import { blogData } from "../assets/assets";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [blogData, setBlogData] = useState([])

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(storedUser)
            
        }
    }, [])

    useEffect(() => {
        const allBlogs = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/blog/all`);
                console.log(res.data)
                setBlogData(res.data.blogs);


            } catch (error) {
                console.log("Error in all blogs api", error)
            }
        }
        allBlogs()
    }, [])

    const loginUser = (user, token) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token)
    }

    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token")
    }
    const contextValue = { blogData, user, loginUser, logoutUser };
    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;