import React from "react";
import { connect } from "react-redux";
import { loadGallery, deleteNFT } from "../store";

const Gallery = ({ nft, loadGallery, deleteNFT }) => {
  return (
    <div className="grid">
      {nft.map((nft) => {
        return (
          <div className="griditem">
            <div className="nftContainer" key={nft.id}>
              <div onClick={() => loadGallery(nft.id)}>
                <img id="nftImage" src={nft.imgURL} />
              </div>
              <div className="title">{nft.name}</div>
              <img className="center" src={nft.author} />
            </div>
            <button id="deleteButton" onClick={() => deleteNFT(nft.id)}>
              {" "}
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadGallery: (id) => {
      dispatch(loadGallery(id));
    },
    deleteNFT: (id) => {
      dispatch(deleteNFT(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
