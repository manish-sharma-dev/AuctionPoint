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


  // add bid

  function AddBid(){
    const bidValue = prompt("Enter the bid Amount")
    const value = parseInt(bidValue.valueOf())

    if(typeof(value) == String){
      throw new Error('Value must be integer')
    }

    console.log("BidValue",value)

    return value
  }

  // function Calling from the backend

  const AddNewBid =async() =>{
    const token = localStorage.getItem('Accesstoken')
    if(!token){
      throw new Error("user Must be Loggedin in order to add new Token")
    }

    console.log("id of Auction item",AuctionItemID)

    const bidValue = AddBid()

    console.log("adding bid details",bidValue,AuctionItemID)
    
    const response = await fetch('http://localhost:4000/bid/addnewbid',{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body : JSON.stringify({
        BidAmount : bidValue,
        auctionItemId : AuctionItemID
      })
    })

    if(!response.ok){
      throw new Error("respose is not Valid")
    }

    const body = await response.json()

    console.log("Respose received from backend by Adding New Bid",body)
  }



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

              <button id='btn2' className='btn' onClick={AddNewBid}>PLace Bid</button>

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
