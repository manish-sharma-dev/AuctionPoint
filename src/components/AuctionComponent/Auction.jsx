import React from 'react'
import AuctionSideBar from './AuctionSideBar'
import AuctionMain from './AuctionMain'
import '../AuctionComponentStyle/AuctionComponent.css'


export default function Auction({ props }) {

  function FindingAuctionItemID(id){
    props(id)
    console.log("Id Passed to App.js Succesfully from Auction Main",id)
  }


  return (
    <>
        <div className='AuctionComponent'>
            <AuctionSideBar />
            <AuctionMain prop={FindingAuctionItemID} />
        </div>
    </>
  )
}
