import React from 'react'
import img4 from '../../../public/img_3.png'

export default function AuctionComment() {
  function addComment(){
    // document.createElement('input').setAttribute('type','text')
  }

  return (
    <div className='Auction_comment'>
      <div style={{ display : 'flex', justifyContent : 'space-between'}}>
        <p>Comments : </p>

        <div style={{ display : 'flex'}}>
           <input type='text' style={{ backgroundColor:'var(--background-color)', borderStyle:'none',border:'1px solid var(--Secondary-text-color)',fontSize:'14px', color:'var(--Secondary-text-color)',padding:'0 10px',borderRadius:'2px' }} placeholder='Comment Here'/>

           <button className='btn' style={{ cursor : 'pointer',marginRight:'1rem' }} onClick={addComment}>Add Comment:</button>
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
