import React, { useRef } from 'react';
import './CreateCollection.css'; 

const CreateCollection = () => {

  return (
    <div className="container create-collection-container">
      <h2>First, you’ll need to create a collection for your NFT</h2>

      <form className="collection-form">
      <div className="form-group">
              <label htmlFor="name">Collection Name *</label>
              <input type="text" id="name" className="form-control" placeholder="MY Collection Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" className="form-control" placeholder="Describe your NFT" rows={5} ></textarea>
            </div>
      <button type="submit" className="btn btn-primary">Create Collection</button>
      </form>
    </div>
  );
};

export default CreateCollection;
