import React, { useState } from "react";

import { BrowserProvider } from "ethers";

import NFT3 from "./Contract/NftContract.js";

function MintButton({ address }) {
  const [id, setId] = useState(3);
  async function handleMintClick() {
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const nft = NFT3.connect(signer);

    try {
      await nft.safeMint(address, id);
      setId(id + 1);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <button onClick={handleMintClick}>MINT</button>
    </>
  );
}

export default MintButton;
