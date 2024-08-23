import React from 'react';
import './Marketplace.css';

const Marketplace = () => {
  const cards = [
    {
      id: "Pomeranian Doge",
      price: "£4.44",
      image: "https://enefti.modeltheme.com/wp-content/uploads/2022/08/6.jpg", 
    },
    {
      id: "King Of Pirates",
      price: "£6.00",
      image: "https://enefti.modeltheme.com/wp-content/uploads/2022/01/4a65a51a.png.png",
    },
    {
      id: "Super Saiyan Goku",
      price: "£9.99",
      image: "https://enefti.modeltheme.com/wp-content/uploads/2022/01/99968462.png.png",
    },
    {
      id: "Nintendo Switch",
      price: "£4.96",
      image: "https://enefti.modeltheme.com/wp-content/uploads/2022/01/28aa9794.png.png",
    },
  ];

  return (
    <div className="container">
      <div className="row my-5 py-3">
        <div className='marketplace-title'>Explore NFT's</div>
        {cards.map((card, index) => (
          <div className="col-md-3" key={index}>
            <div className="card nft-card">
              <img src={card.image} className="card-img-top" alt={card.id} />
              <div className="card-body">
                <h5 className="card-title">{card.id}</h5>
              </div>
              <div className='prices'>
                <p className="card-text">Reserve Price</p>
                <p className="card-price">{card.price}</p>
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
