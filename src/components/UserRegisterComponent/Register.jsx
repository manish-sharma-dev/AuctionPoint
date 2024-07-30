import React from 'react'
import '../userRegisterStyle/Register.css'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='register'>
      <form className='register-form'>

          <p className='register-para-1'>Register a new Account</p>
          <div className='register-input-field'>
            <input type='text' placeholder='🔸username' id='input'  />
            <input type='text' placeholder='🔸fullName' id='input' />
            <input type='email' placeholder='🔸Email' id='input' />
            <input type='password' placeholder='🔸password' id='input' />
            <input type='file'/>
            <button className='register-btn'>Submit</button>
          </div>
          
          <p className='register-para-2'>Already Have account ? <span><Link to="/login" className='register-span'> Login</Link></span></p>

      </form>
    </div>
  )
}
