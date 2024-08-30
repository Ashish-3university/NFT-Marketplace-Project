


import React, { useState } from 'react';
import Web3 from 'web3'; // Import Web3
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [account, setAccount] = useState('');

    // Function to connect to MetaMask
    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                // Request account access if needed
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                setAccount(accounts[0]); // Set the first account from MetaMask
                const web3 = new Web3(window.ethereum);
                console.log('Connected to account:', accounts[0]);
            } catch (error) {
                console.error('User denied account access or error occurred:', error);
            }
        } else {
            console.log('MetaMask is not installed. Please consider installing it: https://metamask.io/download.html');
        }
    };

    return (
        <div className="navbar-wrapper" id="home">
            <div className='navbar-start'>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <NavLink to="/" className="navbar-brand inter-bold">
                            <span className='gradient-text'>NFT Marketplace</span>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse nav-section" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" className="text-decoration-none">
                                        <div className="nav-link inter-semibold navbar-titles" aria-current="page">Home</div>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/marketplace" className="text-decoration-none">
                                        <div className="nav-link inter-semibold navbar-titles" aria-current="page">Marketplace</div>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/create-nft" className="text-decoration-none">
                                        <div className="nav-link inter-semibold navbar-titles" aria-current="page">Create NFT</div>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="https://3university.io" className="text-decoration-none">
                                        <div className="nav-link inter-semibold navbar-titles" aria-current="page">3.0 University</div>
                                    </NavLink>
                                </li>
                                <li className="nav-item d-lg-none d-md-block">
                                    <div className="nav-link inter-semibold navbar-titles" aria-current="page">Contact</div>
                                </li>
                                <li className="nav-item navbar-btn d-lg-block d-none">
                                    <button onClick={connectWallet} className="nav-link btn-navbar-contact inter-semibold navbar-titles navbar-brand">
                                        {account ? `Connected: ${account.substring(0, 6)}...${account.substring(account.length - 4)}` : 'Connect Wallet'}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
