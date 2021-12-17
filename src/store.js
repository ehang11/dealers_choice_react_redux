import axios from "axios";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//THUNK Middleware (Action Creators)
const loadGallery = () => {
  return async (dispatch) => {
    const nft = (await axios.get("/nft")).data;
    dispatch({ type: "LOAD_NFT", nft });
  };
};

const deleteNFT = (NFTId) => {
  return async (dispatch) => {
    await axios.delete(`/nft/${NFTId}`);
    dispatch({ type: "DELETE_NFT", NFTId });
  };
};

const createNFT = () => {
  return async (dispatch) => {
    const nft = (await axios.get("/nft")).data;
    dispatch({ type: "CREATE_NFT", nft });
  };
};
const selectNFT = (NFTId) => {
  return async (dispatch) => {
    const selectedNFT = (await axios.get(`/nft/${NFTId}`)).data;
    dispatch({ type: "SELECT_NFT", selectedNFT });
  };
};
// const initializeState = {
//   nft: [],
// };

// //ACTION REDUCERS(load, select, delete)
// const nftReducer = (state = initializeState, action) => {
//   switch (action.type) {
//     case "LOAD_NFT":
//       return { ...state, nft: action.nft };
//     case "CREATE_NFT":
//       return { ...state, nft: action.nft };
//     case "DELETE_NFT":
//       return { ...state, nft: action.nft };
//     default:
//       return state;
//   }
// };

//ACTION REDUCERS(load, select, delete)
const nftReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_NFT":
      return (state = action.nft);

    case "DELETE_NFT":
      return (state = state.filter((nft) => NFTId !== action.NFTId));
    default:
      return state;
  }
};

const selectReducer = (state = {}, action) => {
  if (action.type === "SELECT_NFT") {
    return (state = action.selectedNFT);
  } else {
    return state;
  }
};

//COMBINEREDUCERS
const reducer = combineReducers({
  nft: nftReducer,
  selectedNFT: selectReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export { deleteNFT, selectNFT, loadGallery, createNFT };

export default store;
