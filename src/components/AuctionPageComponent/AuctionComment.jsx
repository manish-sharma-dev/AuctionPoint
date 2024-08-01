import React from 'react'
import img4 from '../../../public/img_3.png'

export default function AuctionComment() {
  return (
    <div className='Auction_comment'>
      <p>Comments : </p>

      <div className='Auction-bid-part'>
            <img src={img4} alt="Auction_Bid_profile"  className='Auction_img_part'/>
            <div>
                <p>username</p>
                <p className='auction-para-part-2'>hi here will be text added by user</p>
            </div>
      </div>

      <div className='Auction-bid-part'>
            <img src={img4} alt="Auction_Bid_profile"  className='Auction_img_part'/>
            <div>
                <p>username</p>
                <p className='auction-para-part-2'>hi here will be text added by user</p>
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
