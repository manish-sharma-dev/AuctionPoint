import React from 'react'
import '../layoutStyle/Header.css'

export default function Header() {
  return (
    <div className='header'>
      <h1 className='header-heading-1'> Auction Point </h1>
      <h3 className='header-heading-3'>Find the perfect bid for your <br /> Preceious things...</h3>
      <p className='header-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse, obcaecati officia distinctio velit perferendis. Rerum enim maiores assumenda dolores repellat praesentium dicta nisi? Sit voluptatum beatae minus. Non, quod.</p>
      <button className='btn'>Get started</button>
    </div>
  )
}
