import React from "react";

const Gallery = ({ nft, chooseNFT }) => {
  return (
    <div className="grid">
      {nft.map((nft) => {
        return (
          <div className="griditem">
            <div className="nftContainer" key={nft.id}>
              <div onClick={() => chooseNFT(nft.id)}>
                <img id="nftImage" src={nft.imgURL} />
              </div>
              <div className="title">{nft.name}</div>
              <img className="center" src={nft.author} />
            </div>
            <button id="deleteButton" onClick={() => deleteFood(food.id)}>
              {" "}
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
