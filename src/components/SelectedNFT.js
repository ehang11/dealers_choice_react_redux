import React from "react";
import { connect } from "react-redux";

const SelectedNFT = ({ selectedNFT }) => {
  return (
    <div className="griditem">
      <div className="singleNFTContainer" key={selectedNFT.id}>
        <img id="singleImage " src={selectedNFT.imgURL} />

        <div className="singleTitle">{selectedNFT.name}</div>

        <img id="center" src={selectedNFT.author} />
        <div className="price">Current Price: {selectedNFT.price} ETH</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(SelectedNFT);
