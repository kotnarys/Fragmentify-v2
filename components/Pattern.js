import React, { useState } from 'react';

import Link from 'next/link';

export default function Pattern({ children }) {
  const [account, setAccount] = useState("");

  async function requestAccount() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
      } catch (error) {
        console.log("error");
      }
    }
  }

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
            <Link
              href="/marketplace"
              className="p-2 text-3xl active:translate-y-1 hover:text-blue-500 font-lalezar"
            >
              MARKET
            </Link>
            <h3 className="p-2 text-3xl font-lalezar">|</h3>
            <Link
              href="/resale"
              className="p-2 text-3xl active:translate-y-1 hover:text-blue-500 font-lalezar"
            >
              RESALE
            </Link>
          </div>
          {account ? (
            <Link
              className="p-2 text-base text-white active:translate-y-1 h-11 w-60 hover:text-blue-100 font-lalezar bg-start-paragraph rounded-full"
              href="/profile"
            >
              {account}
            </Link>
          ) : (
            <button
              onClick={requestAccount}
              className="p-2 bg-start-paragraph text-white rounded-full h-11 w-60 text-2xl active:translate-y-1 hover:text-grays font-lalezar"
            >
              CONNECT WALLET
            </button>
          )}
        </nav>
        <div className=" flex justify-center">
          <div className="bg-grays w-11/12 m-5 rounded-md">{children}</div>
        </div>
      </div>
    </>
  );
}
