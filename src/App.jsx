import './App.css'
import Navbar from './components/layout/Navbar'
import Header from './components/layout/Header'
import Main from './components/layout/Main'

function App() {

  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <div className='wraped'>
          <Header />
          <Main />
        </div>
      </div>
    </>
  )
}

export default App
