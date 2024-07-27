import React from 'react'
import '../AuctionComponentStyle/AuctionSideBar.css'

export default function AuctionSideBar() {
  return (
    <div className='AuctionSidebar'>

       <div className='Auction_sidebar_upper_part_text'>
          <p>msh17679@gmail.com</p>
          <div className='Auction_sidebar_upper_part_text_plus_text'>
            <p><span>+ </span> Auction Live</p>
            <p><span>+</span> Sell</p>
          </div>
       </div>

       <div className='Auction_sidebar_lower_part_text'>
          <p>Setting</p>
          <p>logout</p>
       </div>

    </div>
  )
}
