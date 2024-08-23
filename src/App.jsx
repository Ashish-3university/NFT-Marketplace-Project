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
import MainMarketplace from './components/Marketplace/MainMarketplace'
import NFTDetail from './components/NFTDetail/NFTDetail'
import Page404 from './components/NotFound/Page404'

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
          <Route path='/marketplace' element={<div><MainMarketplace/></div>}/>
          <Route path="/nft/:id" element={<NFTDetail/>} />
          <Route path='*' element={<Page404/>}/>
              </Routes>
              <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
