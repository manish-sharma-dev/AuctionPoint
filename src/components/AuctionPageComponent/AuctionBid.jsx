import React, { useEffect, useState } from 'react'
import '../AuctionPageStyle/AuctionBid.css'
import img4 from '../../../public/img_3.png'

export default function AuctionBid({ AuctionItemID }) {
  const [bid,ShowAllBid] = useState([])

  useEffect(()=>{
    const GetAllBidOfaCertainAuctionObject = async() => {
      try {
        const response = await fetch(`http://localhost:4000/bid/auction/${AuctionItemID}`,{
          method : 'GET',
          'Content-Type': 'application/json',
        })

        if(!response.ok){
          throw new Error("Error Occured While fetching Details from the User")
        }

        const data = await response.json()

        // to fetch the Details of the user

        // const fetchUserNameAndAvatarofPersonWhoaddBid = async() => {
        //   const token = localStorage.getItem('Accesstoken')
        //   if(!token){
        //     throw new Error("UserMust Be Logged in")
        //   }

        //   const response = await fetch('http://localhost:4000/user/',{
        //     method : 'GET',
        //     headers : {
        //       'Authorization' : `Bearer ${token}`
        //     }
        //   })

        //   if(!response.ok){
        //     throw new Error("Error Ocuured while fetching details from the users")
        //   }

        //   const data = await response.json()
        //   const UserDetailresult = data?.data

        //   const userDetailUserName = UserDetailresult?.username
        //   const userDetailFullname = UserDetailresult?.fullName

        //   return {userDetailFullname,userDetailUserName}

        // }

        // const {userDetailFullname,userDetailUserName} = await fetchUserNameAndAvatarofPersonWhoaddBid();

        const result = data?.data
        
        

        ShowAllBid(result)

        console.log("Bid data fetched Successfully")
        console.log("Response Received from the Backend",result)

        
      } catch (error) {
        throw new Error("Failed to Fetch All the Bid Of a Certain Auction Item",error)
      }
    }

    // GetAllBidOfaCertainAuctionObject()
  },[])

  return (
    <div className='Auction-bid'>
        <p>Bid List : </p>
        
        <div className='Auction-bid-part'>
            <div>
                <p>username</p>
                <p className='auction-para-part-2'>Fullname Added bid of $25</p>
            </div>
        </div>

    </div>
  )
}
