import React from 'react'
import Main from './Main'
import Header from './Header'
import '../layoutStyle/Home.css'

export default function Home() {
  return (
    <div>
        <div className='wrapper'>
            <div className='wraped'>
                <Header />
                <Main />
            </div>
        </div> 
    </div>
  )
}
