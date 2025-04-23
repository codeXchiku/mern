import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios'

// 1.context
const AuthContext = createContext();

//2.provider
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"))
  const[user,setUser] = useState(null)

  const storeTokenInLS = (jwtToken) => {
    setToken(jwtToken);
    return localStorage.setItem("token", jwtToken)
  }

  const isLoggedIn = !!token;
  console.log("isLoggedIn: " ,isLoggedIn);
  

  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token")
    setUser(null)
  }
  
  //jwt authentication -> to get the currently loggedin user data
const userAuthentication = async()=>{
  try {
    const response = await axios.get("http://localhost:3000/api/auth/user", {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    setUser(response.data.userData)
  } catch (error) {
    console.log("user data not found: ",error);
  }  
}

useEffect(() => {
  if (token) {
    userAuthentication();
  } else {
    setUser(null);
  }
}, [token]);

  return (
    <AuthContext.Provider value={{ storeTokenInLS, logoutUser, isLoggedIn,user }}>
      {children}
    </AuthContext.Provider>
  )
}

//3.For consumer(custom Hook)

export const useAuth = () => {
  const authContextValue = useContext(AuthContext)
  if (!authContextValue) {
    throw new Error("useAuth is used out side of the provider")
  }
  return authContextValue;
}

