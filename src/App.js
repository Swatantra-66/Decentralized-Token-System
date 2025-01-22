import React, { useState, useEffect } from "react";
import { ethers } from "ethers"; // Import ethers
import { getContract } from "./contract";

function App() {
    const [account, setAccount] = useState(null);
    const [balance, setBalance] = useState(0);
    const [paused, setPaused] = useState(false);
    const [amount, setAmount] = useState("");

    // Connect wallet
    const connectWallet = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            setAccount(accounts[0]);
        } else {
            alert("Please install MetaMask!");
        }
    };

    // Fetch balance
    const fetchBalance = async () => {
        const contract = await getContract();
        const balance = await contract.balances(account);
        setBalance(balance.toString());
    };

    // Fetch paused state
    const fetchPausedState = async () => {
        const contract = await getContract();
        const pausedState = await contract.paused();
        setPaused(pausedState);
    };

    // Transfer tokens
    const transferTokens = async () => {
        const contract = await getContract();
        const tx = await contract.transfer("RECIPIENT_ADDRESS", ethers.utils.parseUnits(amount, 18));
        await tx.wait();
        alert("Transfer successful!");
        fetchBalance();
    };

    // Burn tokens
    const burnTokens = async () => {
        const contract = await getContract();
        const tx = await contract.burn(ethers.utils.parseUnits(amount, 18));
        await tx.wait();
        alert("Tokens burned!");
        fetchBalance();
    };

    useEffect(() => {
        if (account) {
            fetchBalance();
            fetchPausedState();
        }
    }, [account]);

    return (
        <div style={{ padding: "20px" }}>
            <h1>PauseToken Dashboard</h1>
            <button onClick={connectWallet}>
                {account ? `Connected: ${account}` : "Connect Wallet"}
            </button>
            {account && (
                <>
                    <p>Balance: {balance}</p>
                    <p>Contract Paused: {paused ? "Yes" : "No"}</p>
                    <input
                        type="text"
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                    <button onClick={transferTokens}>Transfer Tokens</button>
                    <button onClick={burnTokens}>Burn Tokens</button>
                </>
            )}
        </div>
    );
}

export default App;
