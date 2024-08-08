import React,{ useState } from 'react'
import '../layoutStyle/Header.css'
import { useNavigate } from "react-router-dom"

export default function Header() {
  const [ checkIfUserisLoggedIn,setuserLoggedIn ] = useState(false)

  const Navigate = useNavigate()

   // this approach is wrong cuz we are not passing any data from this

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

  return (
    <div className='header'>
      <h1 className='header-heading-1'> Auction Point </h1>
      <h3 className='header-heading-3'>Find the perfect bid for your <br /> Preceious things...</h3>
      <p className='header-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse, obcaecati officia distinctio velit perferendis. Rerum enim maiores assumenda dolores repellat praesentium dicta nisi? Sit voluptatum beatae minus. Non, quod.</p>
      <button className='btn'>Get started</button>
    </div>
  )
}
