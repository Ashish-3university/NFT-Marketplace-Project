import Web3 from 'web3';
import NFTMarketplaceABI from './/home/rudra/NFT-Marketplace-Project/out/NFTMarketplace.sol/NFTMarketplace.json.json'; // ABI JSON file from contract compilation

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545"); // Use the appropriate RPC URL
const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3'; // Replace with your contract's deployed address
const nftMarketplace = new web3.eth.Contract(NFTMarketplaceABI, contractAddress);

export { web3, nftMarketplace };
