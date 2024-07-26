import React from 'react'
import '../layoutStyle/main.css'
import img_1 from '../../../public/img_1.png'

export default function Main() {
  return (
    <>
    <main>
        <div className='main-para'>
            <p className='main-para-1'>Explore</p>
            <p className='main-para-2'>Place to get Perfect bid for your precious thing..</p>
        </div>

        <div className='main-img-margin'>
            <div className='main-img-bg'>
                {/* hellp */}
                <img src={img_1} alt='main-image' className='main-img' />
            </div>
        </div>
    </main>
    </>
  )
}
