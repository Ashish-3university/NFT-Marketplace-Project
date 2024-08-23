// NFTDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import nftData from '../Marketplace/nftData';
import "./NFTDetail.css"

const NFTDetail = () => {
  const { id } = useParams();
  const nft = nftData.find((item) => item.id.toString() === id);

  if (!nft) {
    return <h2>NFT not found</h2>;
  }

  return (
    <div className="nft-detail-container">
    <div className="nft-detail-image">
      <img src={nft.imageUrl} alt={nft.title} />
    </div>
    <div className="nft-detail-info">
      <h2>{nft.title}</h2>
      <p className="nft-price">{nft.price}</p>
      <button className="favorite-btn">
        <FaHeart />
      </button>
      <p className="nft-description">
        {nft.description}
      </p>
      <p className="nft-collection">
        <strong>Collection:</strong> {nft.collection}
      </p>
      <p className="nft-creator">
        <strong>Creator:</strong> {nft.creator}
      </p>
      <p className="nft-owner">
        <strong>Owner:</strong> {nft.owner}
      </p>
      <p className="nft-last-sold-price">
        <strong>Last Sold Price:</strong> {nft.lastSoldPrice}
      </p>
      <p className="nft-total-sales">
        <strong>Total Sales:</strong> {nft.totalSales}
      </p>
      <p className="nft-category">
        <strong>Category:</strong> {nft.category}
      </p>
    </div>
  </div>
  
  );
};

export default NFTDetail;
