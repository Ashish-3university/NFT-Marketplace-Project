import './App.css'
import Collections from './components/Collections/Collections'
import Intro from './components/Intro/Intro'
import Marketplace from './components/Marketplace/Marketplace'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TradeNFT from './components/TradeNFT/TradeNFT'
import Community from './components/Community/Community'
import Footer from './components/Footer/Footer'
import CreateCollection from './components/NFT/CreateCollection'
import CreateNFT from './components/NFT/CreateNFT'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<div>
          <Intro/>
          <Collections/>
          <Marketplace/>
          <TradeNFT/>
          <Community/>
          </div>}/>
          <Route path="/create-collection" element={<div><CreateCollection/><TradeNFT/></div>}/>
          <Route path="/create-nft" element={<div><CreateNFT/><TradeNFT/></div>}/>
              </Routes>
              <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
