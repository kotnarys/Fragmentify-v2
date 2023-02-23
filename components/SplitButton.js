import React from "react";

import { BrowserProvider, parseEther } from "ethers";

import NFT4 from "./Contract/NftContract";
import split3 from "./Contract/SplitContract";

function SplitButton({
  nftContractAddress,
  fractionCount,
  period,
  piecePrice,
  count,
}) {
  async function handleSplitClick(nftContractAddress) {
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const splitb = split3.connect(signer);
    const nft = NFT4.connect(signer);
    const adr = "0x89e20c16469b006fa06eafbfcf86b2b619283be4";
    const idNFT =
      "0x0000000000000000000000000000000000000000000000000000000000000001";

    try {
      const aprove = await nft.approve(
        "0x2885CaDfAa67Bfa3A96961de436B1276A1d36701",
        BigInt(idNFT)
      );
      await aprove.wait();
      await splitb.split(
        adr,
        BigInt({ count }),
        BigInt({ fractionCount }),
        BigInt(parseEther({ piecePrice })),
        BigInt(idNFT),
        "hrmo",
        "HFX",
        BigInt({ period })

        /*   ERC721 nftContract, 
        uint _maxTokenSupply,
        uint256 _minReservedToken,
        uint256 price,
        uint256 tokenId,
        string memory name,
        string memory symbol,
        uint _dayCount */
      );
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <button className="greenbtn" onClick={handleSplitClick}>
        SPLIT
      </button>
    </>
  );
}

export default SplitButton;
