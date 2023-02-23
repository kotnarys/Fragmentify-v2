import React, { useState } from "react";

import SplitButton from "./SplitButton";

function SplitModal({ isVisible, onClose, nftContractAddress }) {
  const [count, setCount] = useState("");
  const [piecePrice, setPiecePrice] = useState("");
  const [period, setPeriod] = useState("");
  const [fractionCount, setFractionCount] = useState("");

  if (!isVisible) return null;

  function handleClose(e) {
    if (e.target.id == "wrapper") onClose();
  }

  function handleFormSplitSubmit(e) {
    e.preventDefault();
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center "
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[1000px] flex flex-col ">
        <button
          onClick={() => onClose()}
          className="text-white text-xl place-self-end"
        >
          Х
        </button>
        <div className="bg-modalbg p2 rounded ">
          <div className="h-[770px] text-black">
            <div>
              <h1 className="text-center my-3 text-white font-lalezar text-5xl">
                SPLIT
              </h1>

              <form
                className="flex  items-center justify-center h-[640px]"
                onSubmit={handleFormSplitSubmit}
              >
                <div className="flex flex-col items-center ">
                  <label
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                    htmlFor="Count"
                    className="text-xl m-5  font-lalezar flex flex-col items-center bg-nftbg w-96 text-black rounded-full"
                  >
                    COUNT:
                    <input
                      id="Count"
                      className=" h-5 bg-nftbg w-40 text-black text-center"
                      placeholder="1-99999"
                    />
                     
                  </label>

                  <label
                    value={piecePrice}
                    onChange={(e) => setPiecePrice(e.target.value)}
                    htmlFor="PiecePrice"
                    className="text-xl m-5  font-lalezar flex flex-col items-center bg-nftbg w-96 text-black rounded-full"
                  >
                    PiecePrice:
                    <input
                      id="PiecePrice"
                      className=" h-5 bg-nftbg w-40 text-black text-center"
                      placeholder="ETH"
                    />
                     
                  </label>
                  <h2 className="text-white font-lalezar w-80 text-center text-xl">
                    if you want to protect your nft, you can ask for how many
                    days and how many parts you need to buy for a successful
                    separation, otherwise you will get the nft back, else don't
                    touch this inputs
                  </h2>
                  <div className="flex">
                    <label
                      value={period}
                      onChange={(e) => setPeriod(e.target.value)}
                      htmlFor="Period"
                      className="text-xl m-5  font-lalezar flex flex-col items-center bg-nftbg w-44 text-black rounded-full"
                    >
                      Period:
                      <input
                        id="Period"
                        className=" h-5 bg-nftbg w-40 text-black text-center"
                        placeholder="Hours"
                      />
                       
                    </label>
                     
                    <label
                      value={fractionCount}
                      onChange={(e) => setFractionCount(e.target.value)}
                      htmlFor="Fraction count"
                      className="text-xl m-5  font-lalezar flex flex-col items-center bg-nftbg w-44 text-black rounded-full"
                    >
                      Fraction count:
                      <input
                        id="Fraction count"
                        className=" h-5 bg-nftbg w-40 text-black text-center"
                        placeholder="1-99999"
                      />
                       
                    </label>
                  </div>

                  <SplitButton
                    nftContractAddress={nftContractAddress}
                    fractionCount={fractionCount}
                    period={period}
                    piecePrice={piecePrice}
                    count={count}
                  />
                </div>
                <div className="w-[490px]  bg-white h-[550px] flex items-center justify-center rounded-2xl">
                  <img src="/NFT_2.jpg" className="w-[470px] " />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SplitModal;
