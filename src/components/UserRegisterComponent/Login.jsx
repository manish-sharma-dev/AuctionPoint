import React,{ useState } from 'react'
import '../userRegisterStyle/login.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/useContext.jsx"


export default function Login() {
  const [ username,setUserName ] = useState('')
  const [ password,setPassword ] = useState('')
  const { logInUser } = useAuth()
  

  const Navigate = useNavigate()

     const loggedInUser = async(event) => {
      event.preventDefault();

      logInUser(username,password)
      console.log("User Logged In")

      Navigate('/auction')
      
    }


  
  return (
    <div className='login'> 
        <form className='login-form' id='form' >
                <div className='login-form-username'>
                    <p className='login-para-part-1'>Login</p>
                    <label  >Username</label>
                    <input type='text' className='input' placeholder='username' value={username} onChange={(e) => setUserName(e.target.value)} />
                </div>

                <div className='login-form-password'>
                    <label  >Password</label>
                    <input type='password' current-password="true" className='input' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                
                <div className='login-form-button'>
                  <button className='btn' id='btn1' onClick={loggedInUser}>submit</button>
                </div>  

                <p className='login-para-part-2'>New to auctionPoint? <span><Link to="/register" className='login-span'>Register</Link></span></p>
        </form>
  </div>
  )
}
