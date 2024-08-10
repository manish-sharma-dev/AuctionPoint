import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './components/layout/Home'
import Auction from './components/AuctionComponent/Auction'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Login from './components/UserRegisterComponent/Login'
import Register from './components/UserRegisterComponent/Register'
import AuctionPage from './components/AuctionPageComponent/AuctionPage'
import CreateNewauctionObject from './components/NewAuctionObject/CreateNewauctionObject'
import UserProfile from './components/Profile/UserProfile'
import { useState } from 'react'

function App() {
  const [receivedAuctionItemid, setReceivedAuctionItemId] = useState('')

  function FindingAuctionItemID(id){
    setReceivedAuctionItemId(id)
    console.log("Id Passed to CreateNewAuction.jsx Succesfully from App.js")
  }

  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/"  element = { <Home /> } ></Route>

          <Route path="/auction" element = { <Auction props={FindingAuctionItemID} /> } ></Route>

          <Route path="/login" element = { <Login /> }></Route>
          <Route path="/register" element = { <Register /> }></Route>

          <Route path="/sellItem" element = { <AuctionPage AuctionItemID={receivedAuctionItemid} /> }></Route>

          <Route path="/auction/newauction" element = { <CreateNewauctionObject /> }></Route>
          <Route path="/profile" element = { <UserProfile /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
