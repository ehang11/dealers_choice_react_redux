import React from "react";
import axios from "axios";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//CREATE ACTIONS
const loadGallery = () => {
  return async (dispatch) => {
    const nft = (await axios.get("/nft")).data;
    dispatch({ type: "LOAD_NFT", nft });
  };
};

const deleteNFT = (NFTId) => {
  return async (dispatch) => {
    await axios.delete(`/nft/${NFTId}`);
    dispatch({ type: "DELETE", NFTId });
  };
};
//ACTION REDUCERS
const nftReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_NFT":
      return (state = action.nft);
    case "DELETE":
      return (state = state.filter((nft) => NFTId !== action.NFTId));
    default:
      return state;
  }
};
//COMBINEREDUCERS
const reducer = combineReducers({
  nft: nftReducer,
});

const store = createStore(reducer);

export { deleteNFT, loadGallery };

export default store;
