import React, { useState } from "react";

import Link from "next/link";

import Marketplace from "./Marketplace";
import MintButton from "./MintButton";
import Profile from "./Profile";
import Resale from "./Resale";

export default function Pattern() {
  const [page, setPage] = useState("");
  const [address, setAddress] = useState("");

  const handleConnectWallet = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts[0]);
      console.log(address);

      return address[0];
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="bg-patternbg">
        <nav className="flex justify-between p-3 place-items-center">
          <Link href="/home" className="p-1">
            <img
              src="/home.png"
              className="h-12 active:translate-y-1 hover:opacity-80"
              alt="HOME"
            />
          </Link>
          <div className="flex pl-40">
            <button
              disabled={page === "market" ? 1 : 0}
              onClick={() => setPage("market")}
              className="p-2 text-3xl active:translate-y-1 hover:text-purple-600 font-lalezar disabled:text-blue-500 disabled:active:translate-y-0"
            >
              MARKET
            </button>
            <h3 className="p-2 text-3xl font-lalezar">|</h3>
            <button
              disabled={page === "resale" ? 1 : 0}
              onClick={() => {
                setPage("resale");
              }}
              className="p-2 text-3xl active:translate-y-1 hover:text-purple-600 font-lalezar disabled:text-blue-500 disabled:active:translate-y-0"
            >
              RESALE
            </button>
            <h3 className="p-2 text-3xl font-lalezar">|</h3>
            <button
              disabled={page === "profile" ? 1 : 0}
              onClick={() => {
                setPage("profile");
              }}
              className="p-2 text-3xl active:translate-y-1 hover:text-purple-600 font-lalezar disabled:text-blue-500 disabled:active:translate-y-0"
            >
              PROFILE
            </button>
          </div>
          <MintButton address={address} />
          <button onClick={handleConnectWallet}>Connect MetaMask</button>
        </nav>
        <div className=" flex justify-center">
          <div className="bg-grays w-11/12 mb-5 rounded-md">
            {page === "market" ? (
              <Marketplace />
            ) : page === "resale" ? (
              <Resale />
            ) : (
              <Profile />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
