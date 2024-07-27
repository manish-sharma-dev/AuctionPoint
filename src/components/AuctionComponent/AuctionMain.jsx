import React from 'react'
import '../AuctionComponentStyle/AuctionMain.css'
import img_3 from '../../../public/img_3.png'

export default function AuctionMain() {
  return (
    <div className='Auctionmain'>

      <div className='Auction_card_component'>
         <img src={img_3} alt='card_component' className='card_component' />
          <div className='card_component_text'>
            <p>Product-Name</p>
            <p className='card_component_para_2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, odit debitis! Excepturi ipsa esse a deserunt inventore praesentium debitis</p>
            <p>{"StartingBid : $25.00"}</p>
          </div>
      </div>

    </div>
  )
} 

{/* <div className='Auction-cards-component'>

          <div className='card_comp'>
              <img src={img_3} alt='Auction_Main' />
              <div>
                  <h2>Product Name</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique fugiat delectus sit ea maiores quibusdam quasi iure porro ex! Voluptates laudantium officiis tenetur </p>
                  <p>price</p>
              </div>
          </div>
      </div> */}
