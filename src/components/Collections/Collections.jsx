// Collections.js
import React from 'react';
import './Collections.css';
import CollectionsData from './CollectionsData';

const Collections = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='collection-title'>Trending Collections</div>
        {CollectionsData.map(collection => (
          <div className="card" key={collection.id}>
            <div className="card-header">
              {collection.nftImages.map((image, index) => (
                <img src={image} alt={`NFT ${index + 1}`} className="nft-image" key={index} />
              ))}
            </div>
            <div className="card-body">
              <img src={collection.profileImage} alt="Profile" className="profile-image" />
              <div>
                <h3 className="collection-name">{collection.name}</h3>
                <p className="items-count">{collection.itemsCount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
