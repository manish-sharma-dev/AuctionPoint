import './App.css'
import Navbar from './components/layout/Navbar'
// import Header from './components/layout/Header'
// import Main from './components/layout/Main'
import AuctionComponent from './components/AuctionComponent/AuctionComponent'

function App() {

  return (
    <>
      <Navbar />
      <div>
        {/* this is for the front part - no part in the auctionpoint  */}
          {/* <div className='wrapper'>
            <div className='wraped'>
              <Header />
              <Main />
            </div>
          </div> */}

          <AuctionComponent />
          {/* this is for the auction point */}
      </div>
    </>
  )
}

export default App
