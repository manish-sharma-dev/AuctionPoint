import React from 'react'
import "../layoutStyle/Navbar.css"
import {useNavigate } from 'react-router-dom'

export default function Navbar() {

  const Navigate = useNavigate();

  return (
    <nav>
      <img src='#' alt='Auction-Point' />
      <div>
        <ul className='nav-ele'>
            <li>Theme</li>
            <li className='nav-ele-list-home' onClick={() => Navigate('/')}>Home</li>
            <li className='nav-ele-list-Auction' onClick={() => Navigate("/auction")}>Auction</li>
            <button className='btn' style={{ padding : "5px 15px"}}>Login</button>
        </ul>
      </div>
    </nav>
  )
}
