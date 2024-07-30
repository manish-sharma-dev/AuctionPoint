import './App.css'
import Navbar from './components/layout/Navbar'
import Home from './components/layout/Home'
import Auction from './components/AuctionComponent/Auction'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/"  element = { <Home /> } ></Route>
          <Route path="/auction" element = { <Auction /> } ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
