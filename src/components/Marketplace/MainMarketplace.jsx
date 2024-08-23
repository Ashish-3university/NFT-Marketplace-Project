import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './MainMarketplace.css';
import nftData from './nftData';

const MainMarketplace = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const nftsPerPage = 12;

  const indexOfLastNFT = currentPage * nftsPerPage;
  const indexOfFirstNFT = indexOfLastNFT - nftsPerPage;
  const currentNFTs = nftData.slice(indexOfFirstNFT, indexOfLastNFT);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <div className="row">
        <div className='mainmarketplace-title'>NFT Marketplace</div>
        {currentNFTs.map((card, index) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={index}>
            <div className="card nft-card">
              <Link to={`/nft/${card.id}`} className='detail-nft-link'>
                <img src={card.imageUrl} className="card-img-top" alt={card.id} />
             
              
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <button className="btn btn-light favorite-btn">
                <FaHeart />
              </button>
              </div>
              <div className="pricing">
                <p className="card-text mb-0">Reserve Price</p>
                <p className="card-price">{card.price}</p>
              </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col text-center">
          <ul className="pagination justify-content-center">
            {Array.from({ length: Math.ceil(nftData.length / nftsPerPage) }, (_, index) => (
              <li key={index + 1} className="page-item">
                <button
                  className={`btn btn-link ${currentPage === index + 1 ? 'active' : ''}`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainMarketplace;
