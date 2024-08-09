import React,{ createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [isloggedin, setIsloggedIn] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('Accesstoken')){
            setIsloggedIn(true)
        }
    },[])

    const logInUser = async(username,password) => {
        const response = await fetch('http://localhost:4000/user/login',{
            method : "POST",
            headers : {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({
                username : username,
                password : password
            })
        })

        console.log("Data passed Successfully",username,password)
        console.log("Response Received",response)
        
        if(!response.ok){
          throw new Error("An Error Ocuured While Logging Out User")
        } 

        const data = await response.json()
  
        localStorage.setItem("Accesstoken",data?.data?.Accesstoken)
        localStorage.setItem("refreshToken",data?.data?.refreshToken)

        console.log("Response received from the backend",data)
        
        setIsloggedIn(true)

        console.log("User Logged In Successfully")

    }

    const logoutUser = async () => {
        // localStorage.removeItem('Accesstoken')
        // setIsloggedIn(false)

        const token = localStorage.getItem('refreshToken')

        const response = await fetch('http://localhost:4000/user/logout',{
            method : 'GET',
            headers : {
                Authorization : "Bearer token"
            }
        })

        console.log("User Logged Out Successfullly")

        return response
    }

    return (
        <AuthContext.Provider value={{ isloggedin,logInUser,logoutUser }}>
            {children}
        </AuthContext.Provider>
    )
} 

const useAuth = () => {
   return useContext(AuthContext);
}

export { 
    AuthProvider,
    useAuth
}
