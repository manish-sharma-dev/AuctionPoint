import React, { useEffect, useState } from 'react'
import '../AuctionComponentStyle/AuctionMain.css'
import img_3 from '../../../public/img_3.png'

export default function AuctionMain() {
  const [auctionItem, setAuctionItem] = useState([])

  useEffect(() => {
    const GetAllAuctionObject = async() => {
      const response = await fetch('http://localhost:4000/auction',{
        method : 'GET',
        headers : {
          'Content-Type': 'application/json',
        }
      })

      const data = await response.json()
      console.log("Response Received From the Backend",response)

      const result = data?.data
      console.log(Array.isArray(result))

      setAuctionItem(result)
    }

    // GetAllAuctionObject()
  },[])

  return (
    <div className='Auctionmain'>
      
      {auctionItem?.map((item) => (
        <div className='Auction_card_component' key={item?._id}>
          <img src={item?.ImagesOfObject} alt={img_3} className='card_component' />
            <div className='card_component_text'>
              <p>{item?.Title }</p>
              <p className='card_component_para_2'>{item?.Overview }</p>
              <p>{`StartingBid : ${item?.startingBid}`}</p>
            </div>
        </div>
      ))} 

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
