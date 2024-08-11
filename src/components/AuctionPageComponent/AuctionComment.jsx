import React,{useState,useEffect} from 'react'
import img4 from '../../../public/img_3.png'

export default function AuctionComment({ AuctionItemID }) {
  const [comments,ShowAllComments] = useState([])

  useEffect(()=>{
    const GetAllBidOfaCertainAuctionObject = async() => {
      try {
        const response = await fetch(`http://localhost:4000/comment/auction/${AuctionItemID}`,{
          method : 'GET',
          'Content-Type': 'application/json',
        })

        if(!response.ok){
          throw new Error("Error Occured While fetching Details of the Comments from the User")
        }

        const data = await response.json()

        const result = data?.data

        console.log("all comments response",result)

        ShowAllComments(result)

      }
      catch{
        throw new Error("Failed to get all the comment ")
      }
    }
    // GetAllBidOfaCertainAuctionObject()
  },[])


  return (
    <div className='Auction_comment'>
      <div style={{ display : 'flex', justifyContent : 'space-between'}}>
        <p>Comments : </p>

        <div style={{ display : 'flex'}}>
           <input type='text' style={{ backgroundColor:'var(--background-color)', borderStyle:'none',border:'1px solid var(--Secondary-text-color)',fontSize:'14px', color:'var(--Secondary-text-color)',padding:'0 10px',borderRadius:'2px' }} placeholder='Comment Here'/>

           <button className='btn' style={{ cursor : 'pointer',marginRight:'1rem' }} >Add Comment:</button>
        </div>

      </div>

      <div className='Auction-bid-part'>
            <img src={img4} alt="Auction_Bid_profile"  className='Auction_img_part'/>
            <div>
                <p>username</p>
                <p className='auction-para-part-2'>hi here will be text added by user</p>
            </div>
      </div>

    </div>
  )
}
