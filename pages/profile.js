import React from 'react';

import Pattern from '../components/Pattern';

function Profile() {
  return (
    <Pattern>
      <>
        <div>
          <div className="flex flex-col items-center">
            <h2 className="pt-2 text-3xl text-white font-lalezar">FULL</h2>
            <div className="bg-white w-11/12 h-0.5"></div>
          </div>
          <div className="h-96 flex pl-16 pt-5">
            {0 ? (
              <h1 className="text-red-300 p-5 font-lalezar text-3xl">
                YOU DON'T HAVE AN NFT{" "}
              </h1>
            ) : (
              <div className="flex flex-col items-center h-96  ">
                <div className="h-64  flex items-center justify-center bg-white rounded-2xl m-3">
                  <img className="h-60 m-3" src="/NFT_2.jpg"></img>
                </div>
                <button className="greenbtn">SPLIT</button>
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center">
            <h2 className="pt-2 text-3xl text-white font-lalezar">SPLITED</h2>
            <div className="bg-white w-11/12 h-0.5"></div>
          </div>
          <div className="h-96 flex pl-16 pt-5">
            {0 ? (
              <h1 className="text-red-300 p-5 font-lalezar text-3xl">
                YOU DON'T HAVE AN NFT{" "}
              </h1>
            ) : (
              <div className="flex flex-col items-center h-96  ">
                <div className="h-64  flex items-center justify-center bg-white rounded-2xl m-3">
                  <img className="h-60 m-3" src="/NFT_2.jpg"></img>
                </div>
                <button className="redbtn">CANCEL SELL</button>
              </div>
            )}
            {0 ? (
              <h1 className="text-red-300 p-5 font-lalezar text-3xl">
                YOU DON'T HAVE AN NFT{" "}
              </h1>
            ) : (
              <div className="flex flex-col items-center h-96  ">
                <div className="h-64  flex items-center justify-center bg-white rounded-2xl m-3">
                  <img className="h-60 m-3" src="/NFT_2.jpg"></img>
                </div>
                <button className="redbtn">SELL</button>
                <button className="m-1 greenbtn">JOIN</button>
              </div>
            )}
          </div>
        </div>
      </>
    </Pattern>
  );
}

export default Profile;
