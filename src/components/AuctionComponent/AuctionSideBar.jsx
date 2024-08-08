import React from 'react'
import '../AuctionComponentStyle/AuctionSideBar.css'
import { useAuth } from '../../context/useContext'
import { useNavigate } from "react-router-dom"

export default function AuctionSideBar() {
  const { logoutUser } = useAuth() 
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

  return (
    <div className='AuctionSidebar'>

       <div className='Auction_sidebar_upper_part_text'>
          <p>msh17679@gmail.com</p>
          <div className='Auction_sidebar_upper_part_text_plus_text'>
            <p><span>+ </span> Auction Live</p>
            <p onClick={moveToCreateNewAuctionPage}><span>+</span> Create auction</p>
          </div>
       </div>

       <div className='Auction_sidebar_lower_part_text'>
          <p>Setting</p>
          <p onClick={logOutuserfromapp}>logout</p>
       </div>

    </div>
  )
}


