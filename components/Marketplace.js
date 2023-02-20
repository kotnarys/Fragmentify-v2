import React from "react";

function Marketplace() {
  return (
    <>
      <div className="h-96 flex pl-16 pt-5">
        <div className="flex flex-col items-center h-96  ">
          <div className="h-64  flex items-center justify-center bg-white rounded-2xl m-3">
            <img className="h-60 m-3" src="/NFT_2.jpg"></img>
          </div>
          <div className="flex justify-between">
            <button className="whitebtn">PRIMARY</button>
            <div className="w-3"> " " </div>
            <button className="whitebtn">RESALE</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Marketplace;
