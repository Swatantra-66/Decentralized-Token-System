// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PauseToken {
    address public owner;
    bool public paused;
    uint256 public totalSupply;

    mapping(address => uint) public balances;

    constructor() {
        owner = msg.sender;
        paused = false;
        totalSupply = 5000;
        balances[owner] = totalSupply;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    modifier unpaused() {
        require(paused == false, "Contract is paused");
        _;
    }

    event Burn(address indexed burner, uint256 amount);
    event Mint(address indexed to, uint256 amount);

    function pause() public onlyOwner {
        paused = true;
    }

    function unpause() public onlyOwner {
        paused = false;
    }

    function transfer(address to, uint256 amount) public unpaused {
        require(balances[msg.sender] >= amount, "Insufficient Balance");

        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(amount > 0, "You can't mint 0 tokens");
        balances[to] += amount;
        totalSupply += amount;
        emit Mint(to, amount);
    }

    function burn(uint256 amount) public unpaused {
        require(balances[msg.sender] >= amount, "Insufficient balance to burn");
        balances[msg.sender] -= amount;
        totalSupply -= amount;
        emit Burn(msg.sender, amount);
    }
}
