import React, { useState } from "react";

import uuid from "react-uuid";

import NftCard from "./NFT/NftCard.jsx";
import PurchaseButton from "./PurchaseButton.js";

function Profile({ addresss, setIsVisible, NFTs, setNftContactAddress }) {
  const [NFTonMarket, setNFTonMarket] = useState([]);

  function handleSplitClick(NFTtitle) {
    console.log(NFTtitle);
  }
  return (
    <>
      <div>
        <div className="flex flex-col items-center">
          <h2 className="pt-2 text-3xl text-white font-lalezar">FULL</h2>
          <div className="bg-white w-11/12 h-0.5"></div>
        </div>
        <div className=" flex pt-5 justify-center">
          <div>
            <section className="flex flex-wrap justify-center">
              {NFTs ? (
                NFTs.map((NFT) => {
                  return (
                    <div className="flex flex-col items-center " key={uuid()}>
                      <NftCard
                        image={NFT.media[0].gateway}
                        id={NFT.id.tokenId}
                        title={NFT.title}
                        address={NFT.contract.address}
                      ></NftCard>

                      <button
                        id="splitbutton"
                        className="greenbtn"
                        onClick={handleSplitClick(NFT.contract.address)}
                      >
                        SPLIT
                      </button>
                    </div>
                  );
                })
              ) : (
                <div className="text-white m-32 3xl font-lalezar flex justify-center">
                  No NFTs found
                </div>
              )}
            </section>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center">
          <h2 className="pt-2 text-3xl text-white font-lalezar">SPLITED</h2>
          <div className="bg-white w-11/12 h-0.5"></div>
        </div>
        <PurchaseButton />
        <div className="h-96 flex pl-16 pt-5"></div>
      </div>
    </>
  );
}

export default Profile;
