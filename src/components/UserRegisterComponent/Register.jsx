import React,{useState} from 'react'
import '../userRegisterStyle/Register.css'
import { Link } from 'react-router-dom'

export default function Register() {
const [username,setUserName] = useState('')
const [fullName,setfullName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

  const RegisterNewUser = async() =>{
    const response = await fetch('http://localhost:4000/user/register',{
      method :"POST",
      headers : {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({
        username,
        fullName,
        email,
        password
      })
    })
  }

  return (
    <div className='register'>
      <form className='register-form'>

          <p className='register-para-1'>Register a new Account</p>
          <div className='register-input-field'>
            <input type='text' placeholder='🔸username' className='input'  />
            <input type='text' placeholder='🔸fullName' className='input' />
            <input type='email' placeholder='🔸Email' className='input' />
            <input type='password' placeholder='🔸password' className='input' />
            <input type='file'/>
            <button className='register-btn'>Submit</button>
          </div>
          
          <p className='register-para-2'>Already Have account ? <span><Link to="/login" className='register-span'> Login</Link></span></p>

      </form>
    </div>
  )
}
