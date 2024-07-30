import React from 'react'
import '../userRegisterStyle/login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login'> 
        <form className='login-form' action='submit'>
                <div className='login-form-username'>
                    <p className='login-para-part-1'>Login</p>
                    <label for='username'>Username</label>
                    <input type='text' id='input' placeholder='username' />
                </div>

                <div className='login-form-password'>
                    <label for='password' >Password</label>
                    <input type='password'id='input' placeholder='password'/>
                </div>
                
                <div className='login-form-button'>
                  <button className='btn' id='btn1'>submit</button>
                </div>  

                <p className='login-para-part-2'>New to auctionPoint? <span><Link to="/register" className='login-span'>Register</Link></span></p>
        </form>
  </div>
  )
}
