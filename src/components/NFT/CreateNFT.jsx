import React, { useRef } from 'react';
import './NFT.css'; 

const CreateNFT = () => {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container create-nft-container">
      <div className="row">
      <div className='create-nft-title'>Create an NFT</div>
      <div className='create-nft-desc pb-3'>Once your item is minted you will not be able to change any of its information.</div>
        {/* Left side: Media Upload */}
        <div className="col-md-6">
          <div className="upload-section" onClick={handleUploadClick}>
            <div className="upload-box">
              <div className="upload-icon">&#x21E7;</div> {/* Up arrow icon */}
              <p>Drag and drop media</p>
              <a href="#" className="browse-files">Browse files</a>
              <p className="file-info">Max size: 50MB</p>
              <p className="file-info">JPG, PNG, GIF, SVG, MP4</p>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              accept=".jpg,.png,.gif,.svg,.mp4"
            />
          </div>
        </div>

        {/* Right side: Form */}
        <div className="col-md-6">
          <form className="nft-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input type="text" id="name" className="form-control" placeholder="Name your NFT" required />
            </div>
            <div className="form-group">
              <label htmlFor="name">Collection Name *</label>
              <input type="text" id="name" className="form-control" placeholder="MY Collection Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" className="form-control" placeholder="Describe your NFT" rows={5} ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNFT;
