const NftCard = ({ image, id, title, address, description, attributes }) => {
  return (
    <div className="w-56 h-80 mr-3 mb-4 ml-3 bg-slate-100 rounded-xl">
      <div className="flex w-56 h-56 justify-center items-center rounded-xl bg-nftbg">
        {image ? (
          <img
            className="flex justify-center items-center w-52 h-52"
            key={id}
            src={image}
          ></img>
        ) : (
          "NO IMAGE"
        )}
      </div>

      <div className="p-3">
        <div className="flex mb-3">
          <div className="flex-grow">
            <h3 className="text-xl">{title}</h3>
            <p>{`${id.slice(0, 4)}...${id.slice(id.length - 4)}`}</p>
          </div>
          {/* <div className="flex mr-3">
                        <a target="_blank" className="text-blue-700" href={`https://etherscan.io/token/${address}`}>{`${address.slice(0, 4)}...${address.slice(address.length - 4)}`}</a>
                    </div> */}
        </div>
        {/* <p>{description? description.slice(0, 200) : "No Description"}</p> */}
      </div>
      <div className="flex flex-wrap justify-center items-center p-3 ">
        {attributes?.length > 0 &&
          attributes.map((attribute) => {
            return (
              <div className="w-1/2 mb-2 flex justify-start flex-col">
                <p className="mr-2 font-bold">{attribute.trait_type}:</p>
                <p className="text-sm">{attribute.value}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NftCard;
