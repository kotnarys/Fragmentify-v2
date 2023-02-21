//SPDX-License-Identifier: MIT
pragma solidity^0.8.10;

// import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "./Fractional.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Shop {
    using SafeMath for uint256;
    address payable private immutable marketOwner; // Владелец маркетплейса
    uint public feePercent; // Комиссия маркетплейса
    uint public tokenCount; // идентификатор размещенных на маркетплейсе контрактов ERC20 для продажи
    NFTShare tokenContract;
    uint public value;

    struct Token {
        NFTShare tokenContract;
        uint price;
        uint totalPrice;
        address seller;
        uint amount;
    }

    mapping(uint => Token) public listedTokens;

    modifier onlyOwner() {
        require(msg.sender == marketOwner, "You're not an owner");
        _;
    }

    event tokenAdded(address seller, uint price, NFTShare tokenContract);
    event tokenBought(address buyer, address seller, NFTShare tokenContract);

    constructor() {
        marketOwner = payable(msg.sender);
    }

    /// @notice Add token to the marketplace
    /// @param _price - one token price
    /// @param _amount - token amount
    /// @param _tokenContract - ERC20 token address
    function addTokenToShop(uint _price, uint _amount, NFTShare _tokenContract) external {
        require(_amount > 0, "Amount must be 1 at least");
        require(_price > 0, "Price must be greater than 0");
        require(msg.sender != address(0), "Can't add token");
        uint _totalPrice = (_price * _amount) + (_price * _amount).mul(5).div(100);
      
        _tokenContract.transferFrom(msg.sender, address(this), _amount);
        listedTokens[tokenCount] = Token(
            _tokenContract,
            _price,
            _totalPrice,
            msg.sender,
            _amount
        );
        tokenCount++;

        emit tokenAdded(msg.sender, _price, _tokenContract);
    }

    /// @notice Buy token
    /// @param _tokenContract - адрес контракта токена ERC20
    /// @param _tokenID - порядковый номер слота в мэппинге
    function buyToken(NFTShare _tokenContract, uint _tokenID) payable external {
        Token memory token = listedTokens[_tokenID];
        require(msg.value == token.totalPrice, "Incorrect value");
        address seller = token.seller;
        _tokenContract.transfer(msg.sender, token.amount);
        payable(seller).transfer(token.amount * token.price); 
        delete listedTokens[_tokenID];

        emit tokenBought(msg.sender, seller, _tokenContract);
    }
    
    /// @notice Remove token from a marketplace
    /// @param _tokenID - порядковый номер слота в мэппинге
    function removeTokenFromShop(uint _tokenID, NFTShare _tokenContract) external {
        Token memory token = listedTokens[_tokenID];
        require(msg.sender == token.seller, "You're not an owner");
        require(token.price > 0, "Token not listed");
        _tokenContract.transfer(msg.sender, token.amount);

        delete listedTokens[_tokenID];
    }

    /// @notice Withdrow money function
    function withdraw() external onlyOwner {
        marketOwner.transfer(address(this).balance);
    }

    /// @notice Функция получения полной цены одного токена (цена токена + комиссия маркетплейса)
    /// @param _tokenCount - идентификатор лота на маркетплейсе
    /// @param _amount - количество токенов для покупки
    function _getTotalPrice(uint _tokenCount, uint _amount) public view returns(uint) {
        uint tokenPrice = listedTokens[_tokenCount].price * _amount;
        uint shopFee = tokenPrice - tokenPrice.mul(100 - feePercent).div(100);
        return tokenPrice + shopFee;
    }

    /// @notice Change marketplace commission
    function changeMarketlaceFee(uint _feePercent) external onlyOwner {
        feePercent = _feePercent;
    }
}