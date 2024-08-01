import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './components/layout/Home'
import Auction from './components/AuctionComponent/Auction'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Login from './components/UserRegisterComponent/Login'
import Register from './components/UserRegisterComponent/Register'
import AuctionPage from './components/AuctionPageComponent/AuctionPage'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/"  element = { <Home /> } ></Route>
          <Route path="/auction" element = { <Auction /> } ></Route>
          <Route path="/login" element = { <Login /> }></Route>
          <Route path="/register" element = { <Register /> }></Route>
          <Route path="/sellItem" element = { <AuctionPage /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
