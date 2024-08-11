import React, { useEffect, useState } from 'react'
import '../AuctionPageStyle/AuctionBid.css'
import img4 from '../../../public/img_3.png'

export default function AuctionBid({ AuctionItemID }) {
  const [bids,ShowAllBid] = useState([])
  const [bidUserdetail,setBidUserDetail] = useState([])

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

        const result = data?.data

        console.log("result reeived in the Bid Section",result)
        // console.log("id of the User",result?.userId)

        // fetching user dtails alos
        
        const userDetailResponse = async() => {
          try {

             const check = Array.isArray(result)
             console.log("checking if result is array or not",check)

             if(!check){
              throw new Error('Rsult must be array')
             }
             
             const fetchPromises = result.map(async(item) => {
                console.log('Userid in the  bid Section',item?.userId)

                const response = await fetch(`http://localhost:4000/user/finduserbyid/${item?.userId}`,{
                  method : 'GET',
                  headers : {
                    'Content-Type': 'application/json',
                  }
                })

                if(!response.ok){
                  throw new Error("User didint find")
                }

                const data = await response.json()

                const UserResult = data?.data

                console.log("Usr Detail Fetched Successully",UserResult)

                return UserResult 

             })

             const allUserResults = await Promise.all(fetchPromises);

             console.log('all user Result',allUserResults)
             return allUserResults;

          } catch (error) {
            throw new Error("Failed to find the user With the id")
          }
        }

        const  UserResult  =  await userDetailResponse()

        console.log(" final result Response Received of the bid from the Backend",result)
        console.log(" final result Response Received of the bid user from the Backend",UserResult)

        ShowAllBid(result)
        setBidUserDetail(UserResult)

        
      } catch (error) {
        throw new Error("Failed to Fetch All the Bid Of a Certain Auction Item",error)
      }
    }

    GetAllBidOfaCertainAuctionObject()
  },[])

  return (
    <div className='Auction-bid'>
        <p>Bid List : </p>
       {Array.isArray(bidUserdetail) && bidUserdetail.map((item) => (
          <div className='Auction-bid-part'>
          <img src={item?.avatar} alt="Auction_Bid_profile"  className='Auction_img_part'/>
              <div>
                  <p>{item?.username}</p>
                  {Array.isArray(bids) && bids.map((bid) => (
                    <p className='auction-para-part-2'>{`${item?.fullName} Added bid of $${bid?.BidAmount}`}</p>
                  ))}
              </div>
          </div>
        ))} 
    </div>
  )
}
