import React from "react";
import { connect } from "react-redux";
import { createNFT } from "../store";

const Header = ({ createNFT }) => {
  return (
    <nav className="nav">
      <div className="header"> MetaGallery: NFT Art Gallery </div>

      <button type="button" className="nav-button" onClick={() => createNFT()}>
        CREATE
      </button>

      <button
        type="button"
        className="nav-button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:8000/";
        }}
      >
        EXPLORE
      </button>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNFT: () => {
      dispatch(createNFT());
    },
  };
};

export default connect(null, mapDispatchToProps)(Header);
