import {  createContext,useContext } from "react";

// 1.context
const AuthContext = createContext();

//2.provider
 export const AuthProvider = ({children}) => {

    const storeTokenInLS = (jwtToken)=>{
        return localStorage.setItem("token",jwtToken)
    }
    
   return (
     <AuthContext.Provider value={{storeTokenInLS}}>
        {children}
     </AuthContext.Provider>
   )
 }

 //3.For consumer(custom Hook)

 export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext)
    if (!authContextValue) {
        throw new Error("useAuth is used out side of the provider")
    }
    return authContextValue;
 }

  