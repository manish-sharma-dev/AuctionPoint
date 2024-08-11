// this component is for Single Aucion Item Page 
// it include a details overview
// a bid area
// a comment Area
import React, { useEffect, useState } from 'react'
import '../AuctionPageStyle/AuctionPage.css'
import img4 from '../../../public/img_3.png'
import AuctionBid from './AuctionBid'
import AuctionComment from './AuctionComment'

export default function AuctionPage({ AuctionItemID }) {
  const [auctionItemDetail,setAuctionItemDetail] = useState({ })

  useEffect(()=>{
    const getSingleAuctionObjectsFromAuctionObject = async() => {
      try {
        const response = await fetch(`http://localhost:4000/auction/single/${AuctionItemID}`,{
          method : 'GET',
          headers : {
            'Content-Type': 'application/json',
          }
        })

        if(!response.ok){
          throw new Error("Somethiing Went Wrong while fetching Auction Item Details from the user")
        }

        const data = await response.json()
        const result = data?.data

        setAuctionItemDetail(result)
        
        console.log("Auction Details fetched Successfully")
        console.log("Response Received from the Backend",result)

        

      } catch (error) {
        throw new Error("Failed to Fetch the Data of the Auction Item",error)
      }
    }

    // get single Auction Object
    getSingleAuctionObjectsFromAuctionObject()

  },[])

  return (
    <div className='wrapped'>
      <div className='wrapping'>

        <div className='auction-page-part'>
         <div className='Auction-page-image-part'>
           <img src={img4} alt="Auction-item" className='Auction-page-image' />
         </div>
          <div className='auction-page-text-part'>
            <p>{auctionItemDetail?.Title}</p>
            <p className='overview'>{auctionItemDetail?.Overview}</p>
            <p>Starting BId : ${auctionItemDetail?.startingBid}</p>
            <p>Owner Names</p>
            <p>Latest Bid : $30 by sam altsman</p>
            <div className='auction-page-btn-text-part'>
              <button id='btn2' className='btn'>PLace Bid</button>
              <p>Starting Date :{auctionItemDetail?.startingDate}</p>
              <p>Endind Date :{auctionItemDetail?.endingDate}</p>
            </div>
          </div>
        </div>

        <div className='Auction-page-bid-and-Comment-section'>
          <AuctionBid AuctionItemID={AuctionItemID} />
          <AuctionComment AuctionItemID={AuctionItemID} />
        </div>

      </div>
    </div>
  )
}
