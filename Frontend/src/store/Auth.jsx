import { createContext, useContext, useState } from "react";

// 1.context
const AuthContext = createContext();

//2.provider
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"))

  const storeTokenInLS = (jwtToken) => {
    setToken(jwtToken);
    return localStorage.setItem("token", jwtToken)
  }

  const isLoggedIn = !!token;

  const logoutUser = () => {
    setToken("");
    localStorage.removeItem("token")
  }

  return (
    <AuthContext.Provider value={{ storeTokenInLS, logoutUser, isLoggedIn }}>
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

