import React from 'react';
import './TradeNFT.css';
import { FaWallet, FaImages, FaFileAlt, FaPaperPlane } from 'react-icons/fa';

const TradeNFT = () => {
  return (
    <section className="trade-nft py-5">
      <div className="container">
        <h2 className="text-center mb-5">Create and Sell Your NFTs</h2>
        <div className="row text-center">
          <div className="col-md-3">
            <div className="trade-nft-item">
              <FaWallet className="trade-nft-icon mb-3" />
              <h4 className="trade-nft-title">Set up your Wallet</h4>
              <p className="trade-nft-text">Et ligula ullamcorper malesuada proin libero nunc consequat. Sagittis aliquam malesuada bibendum arcu.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="trade-nft-item">
              <FaImages className="trade-nft-icon mb-3" />
              <h4 className="trade-nft-title">Create your Collection</h4>
              <p className="trade-nft-text">At in tellus integer feugiat scelerisque varius morbi enim nunc. Faucibus ornare suspendisse sed nisi lacus.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="trade-nft-item">
              <FaFileAlt className="trade-nft-icon mb-3" />
              <h4 className="trade-nft-title">Add your NFTs</h4>
              <p className="trade-nft-text">Varius sit amet mattis vulputate enim nulla. Pulvinar mattis nunc sed blandit libero volutpat sed. In nulla.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="trade-nft-item">
              <FaPaperPlane className="trade-nft-icon mb-3" />
              <h4 className="trade-nft-title">List item for Sale</h4>
              <p className="trade-nft-text">Placerat vestibulum lectus mauris ultrices eros. Cursus vitae congue mauris rhoncus aenean vel.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeNFT;
