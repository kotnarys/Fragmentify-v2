import React, { useState } from "react";

import { BrowserProvider } from "ethers";

import NFT2 from "./Contract.js";

function MintButton({ address }) {
  const [id, setId] = useState(0);
  async function handleMintClick() {
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const nft = NFT2.connect(signer);

    console.log(address);

    try {
      await nft.safeMint(address, id);
      setId(id + 1);
      console.log("mint sucsess");
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
