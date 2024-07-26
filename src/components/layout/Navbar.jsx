import React from 'react'
import "../layoutStyle/Navbar.css"

export default function Navbar() {
  return (
    <nav>
      <img src='#' alt='Auction-Point' />
      <div>
        <ul className='nav-ele'>
            <li>Home</li>
            <li>About</li>
            <li>Auction</li>
            <button className='btn' style={{ padding : "5px 15px"}}>Login</button>
        </ul>
      </div>
    </nav>
  )
}
