// this component is for Single Aucion Item Page 
// it include a details overview
// a bid area
// a comment Area
import React from 'react'
import '../AuctionPageStyle/AuctionPage.css'
import img4 from '../../../public/img_3.png'
import AuctionBid from './AuctionBid'
import AuctionComment from './AuctionComment'

export default function AuctionPage() {
  return (
    <div className='wrapped'>
      <div className='wrapping'>

        <div className='auction-page-part'>
         <div className='Auction-page-image-part'>
           <img src={img4} alt="Auction-item" className='Auction-page-image' />
         </div>
          <div className='auction-page-text-part'>
            <p>Product name</p>
            <p className='overview'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eveniet saepe incidunt vero hic debitis ducimus fuga, cumque harum numquam accusamus facere a architecto impedit earum accusantium officiis magnam totam.</p>
            <p>Starting BId : $25</p>
            <p>Owner Names</p>
            <p>Latest Bid : $30 by sam altsman</p>
            <div className='auction-page-btn-text-part'>
              <button id='btn2' className='btn'>PLace Bid</button>
              <p>Starting Date : 34/34/35</p>
              <p>Endind Date : 23/23/532</p>
            </div>
          </div>
        </div>

        <div className='Auction-page-bid-and-Comment-section'>
          <AuctionBid />
          <AuctionComment />
        </div>

      </div>
    </div>
  )
}
