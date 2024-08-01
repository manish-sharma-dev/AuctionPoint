import React from 'react'
import '../AuctionPageStyle/AuctionBid.css'
import img4 from '../../../public/img_3.png'

export default function AuctionBid() {
    const bid_part = []
  return (
    <div className='Auction-bid'>
        <p>Bid List : </p>
        
        <div className='Auction-bid-part'>
            <img src={img4} alt="Auction_Bid_profile"  className='Auction_img_part'/>
            <div>
                <p>username</p>
                <p className='auction-para-part-2'>Fullname Added bid of $25</p>
            </div>
        </div>

        <div className='Auction-bid-part'>
            <img src={img4} alt="Auction_Bid_profile"  className='Auction_img_part'/>
            <div>
                <p>username</p>
                <p className='auction-para-part-2'>Fullname Added bid of $35</p>
            </div>
        </div>

        <div className='Auction-bid-part'>
            <img src={img4} alt="Auction_Bid_profile"  className='Auction_img_part'/>
            <div>
                <p>username</p>
                <p className='auction-para-part-2'>Fullname Added bid of $36</p>
            </div>
        </div>

    </div>
  )
}
