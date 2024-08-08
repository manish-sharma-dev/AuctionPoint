import React from 'react'
import '../layoutStyle/Header.css'
import { useAuth } from '../../context/useContext'
import { useNavigate } from "react-router-dom"

export default function Header() {
  const { isloggedin } = useAuth()
  const Navigate = useNavigate()

   // this approach is wrong cuz we are not passing any data from this for Checking if user is log in or or not

    // async function onlyGetStartedWhenUserIsLoggedIn() { 
    //     const response = await fetch("http://localhost:4000/user/login")
    //     .then(console.log("Response Received From the backend",response))
    //     .catch((error) => console.log("An Error Occured while fetching detail of login User",error))

    //     if(!response.ok){
    //       Navigate('/login')
    //     } else {
    //       Navigate('/auction')
    //       setuserLoggedIn(true)
    //     }
    // }

    //***********************************************************************

    // ny using useContext we can use it 
    // if user is logged in it will go to auction Page 
    // if user is not logged in it will be sent to login page

    function onlyGetStartedWhenUserIsLoggedIn (){
      
      if(isloggedin === false){
        Navigate('/login')
      } else {
        Navigate('/auction')
      }

    }



  return (
    <div className='header'>
      <h1 className='header-heading-1'> Auction Point </h1>
      <h3 className='header-heading-3'>Find the perfect bid for your <br /> Preceious things...</h3>
      <p className='header-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse, obcaecati officia distinctio velit perferendis. Rerum enim maiores assumenda dolores repellat praesentium dicta nisi? Sit voluptatum beatae minus. Non, quod.</p>
      <button className='btn' onClick={onlyGetStartedWhenUserIsLoggedIn}>Get started</button>
    </div>
  )
}
