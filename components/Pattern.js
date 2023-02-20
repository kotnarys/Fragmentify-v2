import React, { useState } from "react";

import Link from "next/link";

import { ConnectButton } from "@rainbow-me/rainbowkit";

import Marketplace from "./Marketplace";
import Profile from "./Profile";
import Resale from "./Resale";

export default function Pattern() {
  const [page, setPage] = useState("");

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
          <ConnectButton />
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
