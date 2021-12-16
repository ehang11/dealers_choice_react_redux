import React from "react";
import { connect } from "react-redux";

const SelectedNFT = ({ selectedNFT }) => {
  return (
    <div className="singleNFTContainer">
      <img id="nftImage" src={selectedNFT.imgURL} />

      <div className="title">{selectedNFT.name}</div>

      <img id="artistImage" src={selectedNFT.author} />
      <div className="price">Current Price: {selectedNFT.price} ETH</div>
    </div>
  );
};

export default SelectedNFT;
