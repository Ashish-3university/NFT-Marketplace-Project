import React from 'react'
import "./Navbar.css"

import { NavLink } from 'react-router-dom'


const Navbar = () => {

  return (
    <div className="navbar-wrapper" id="home">
      <div className='navbar-start'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand inter-bold" ><span className='gradient-text'>NFT Marketplace</span></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse nav-section" id="navbarSupportedContent">
              <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="text-decoration-none"><div  
                    className="nav-link  inter-semibold  navbar-titles" aria-current="page">Home</div></NavLink>
                </li>
              <li className="nav-item">
                  <NavLink to="/marketplace" className="text-decoration-none"><div to="#portfolio"  
                    className="nav-link inter-semibold  navbar-titles" aria-current="page">Marketplace</div></NavLink>
                </li>

                <li className="nav-item">
                <NavLink to="/create-nft" className="text-decoration-none"> <div  
                    className="nav-link  inter-semibold  navbar-titles" aria-current="page">Create NFT</div></NavLink>
                </li>


                <li className="nav-item">
                <NavLink to="https://3university.io" className="text-decoration-none"> <div  
                    className="nav-link  inter-semibold  navbar-titles" aria-current="page">3.0 University</div></NavLink>
                </li>
                
                <li className="nav-item d-lg-none d-md-block">
                <div to="/"  
                 className="nav-link  inter-semibold  navbar-titles" aria-current="page">Contact</div>
                </li>
                <li className="nav-item navbar-btn d-lg-block d-none">
                  <div to="#contact"  
                 className="nav-link btn-navbar-contact inter-semibold  navbar-titles navbar-brand" aria-current="page">Connect Wallet</div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>
  )
}

export default Navbar