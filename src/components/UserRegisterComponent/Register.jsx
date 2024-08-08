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
        username : username,
        fullName : password,
        email : email,
        password : password
      })
    })

    if(!response.ok){
      throw new Error("An error Occured While Registering new User")
    }

    console.log("New User Register Successfully")
  }

  return (
    <div className='register'>
      <form className='register-form' method='POST'>

          <p className='register-para-1'>Register a new Account</p>
          <div className='register-input-field'>
            <input type='text' placeholder='🔸username' className='input' value={username} onChange={(e) => setUserName(e.target.value)}  />
            <input type='text' placeholder='🔸fullName' className='input' value={fullName} onChange={(e) => setfullName(e.target.value)} />
            <input type='email' placeholder='🔸Email' className='input' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='🔸password' className='input' value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type='file'/>
            <button className='register-btn'>Submit</button>
          </div>
          
          <p className='register-para-2'>Already Have account ? <span><Link to="/login" className='register-span'> Login</Link></span></p>

      </form>
    </div>
  )
}
