import React from 'react'
import AuctionSideBar from './AuctionSideBar'
import AuctionMain from './AuctionMain'
import '../AuctionComponentStyle/AuctionComponent.css'


export default function AuctionComponent() {
  return (
    <>
        <div className='AuctionComponent'>
            <AuctionSideBar />
            <AuctionMain />
        </div>
    </>
  )
}
