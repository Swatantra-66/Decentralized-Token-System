# Decentralized Token System

This is a decentralized application (DApp) built with React and Ethereum smart contracts. The app interacts with a custom smart contract (`DecentralizedToken.sol`) that implements a simple ERC-20-like token with pausing, minting, transferring, and burning functionalities. Users can connect their wallet, check their token balance, transfer tokens, and burn tokens.

## Features
- **Connect Wallet**: Users can connect their Ethereum wallet (e.g., MetaMask).
- **View Balance**: Displays the user's current token balance.
- **Pause/Unpause**: The contract owner can pause or unpause the contract.
- **Transfer Tokens**: Users can transfer tokens to other addresses.
- **Burn Tokens**: Users can burn their tokens, reducing the total supply.

## Tech Stack
- **Frontend**: React
- **Blockchain**: Ethereum (using Solidity)
- **Smart Contract**: Solidity
- **Wallet Integration**: MetaMask (via `ethers.js`)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/decentralized-token-system.git
   cd decentralized-token-system

2. **Install dependencies:**

   ```bash
   npm install

3. **Smart Contract Deployment:**

  The smart contract (PauseToken.sol) should be deployed to the Ethereum network (either a testnet like Rinkeby or the mainnet).
  You can deploy it using Remix IDE or any other Ethereum development tool.

4. **Set up .env file (if required):**

   You may need to set up a .env file for configuration (for example, providing the smart contract address, network configurations, etc.).

5. **Start the React Token Manager app:**

   ```bash
   npm start

 This will start the React application on http://localhost:3000.

## Usage

1. Connect Wallet: Click the "Connect Wallet" button to link your MetaMask wallet with the DApp.
2. Transfer Tokens: Enter the amount you wish to transfer and click "Transfer Tokens" to send tokens to another address.
3. Burn Tokens: Enter the amount of tokens to burn and click "Burn Tokens" to reduce the total supply.
4. Pause/Unpause Contract: The contract owner can pause or unpause the contract by calling the corresponding functions.

## Notes

> Ensure that you have MetaMask installed and configured to interact with the Ethereum network.
> The contract is paused by default when the contract owner calls the pause function.

## Example Contract Functions

1. Pause: Pauses the contract to prevent token transfers.
2. Unpause: Unpauses the contract to allow token transfers again.
3. Transfer: Transfers tokens from the user's address to another address.
4. Burn: Allows the user to burn their tokens, reducing the total supply.

## Contact

### Email : maverickswatantra@gmail.com



