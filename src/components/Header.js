import React from "react";

const Header = ({ selectedNFT, returnGallery }) => {
  return (
    <nav className="nav">
      {/* <div className = "LOGO"> </div> */}
      <div className="header"> MetaGallery: NFT Art Gallery </div>

      <button
        type="button"
        className="nav-button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "http://localhost:8000/create";
        }}
      >
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

export default Header;
