import React from 'react'
import '../AuctionComponentStyle/AuctionSideBar.css'
import { useAuth } from '../../context/useContext'
import { useNavigate } from "react-router-dom"

export default function AuctionSideBar() {
  const { logoutUser,isloggedin } = useAuth() 
  const navigate = useNavigate()

  // logout user Function
  function logOutuserfromapp (){
    const Response = logoutUser()
    console.log("User Logged out SuccessFullyl",Response)
  }

  // crete New Aucition Object

  function moveToCreateNewAuctionPage(){
    navigate('/auction/newauction')
  }

  // get users Auction Object
    async function GetYourAllAuctionObjectWhenYouAreLoggedIn(){

      if(isloggedin === false){
        throw new Error("User Must Be login in")
      }
      
      const token = localStorage.getItem('Accesstoken')
  
      if(!token){
        throw new Error("Token is required to go futher to find users Auction Object",token)
      }
  
      const response = await fetch('http://localhost:4000/auction/users/yourauctionitem',{
        method :'GET',
        headers :{
          "Authorization" : "Bearer token"
        }
      })
  
      if(!response.ok){
        throw new Error("Failed to Get User Auction Object")
      }
  
      const data = await response?.json()
  
      console.log("Fetched Successfully User all Auction Object",data)
    }

    // move to user Profile
    function movetoUserProfile(){
      navigate('/profile')
    }
  

  return (
    <div className='AuctionSidebar'>

       <div className='Auction_sidebar_upper_part_text'>
          <p>msh17679@gmail.com</p>
          <div className='Auction_sidebar_upper_part_text_plus_text'>
            <p><span>+ </span> Auction Live</p>
            <p onClick={moveToCreateNewAuctionPage}><span>+ </span> Create auction</p>
            <p onClick={GetYourAllAuctionObjectWhenYouAreLoggedIn}><span>+ </span>Your Auctions</p>
          </div>
       </div>

       <div className='Auction_sidebar_lower_part_text'>
          <p onClick={movetoUserProfile}>Profile</p>
          <p onClick={logOutuserfromapp}>Logout</p>
       </div>

    </div>
  )
}


