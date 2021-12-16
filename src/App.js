import React from "react";
import axios from "axios";

import Header from "./Components/Header";
import Gallery from "./Components/Gallery";
import SelectedNFT from "./Components/SelectedNFT";
import { connect } from "react-redux";
import { nftReducer } from "./store";

class App extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       nft: [],
  //       selectedNFT: "",
  //     };
  //   }

  componentDidMount = async () => {
    this.props.bootstrap();

    window.addEventListener("hashchange", async () => {
      const selected = window.location.hash.slice(1);
      const selectedNFT = (await axios.get(`/nft/${selected}`)).data;
      this.setState({ selectedNFT: selected });
    });
  };

  render() {
    return (
      <div>
        <Header />

        {this.props.selectedNFT.id ? <SelectedNFT /> : <Gallery />}
      </div>
    );
  }
}

//map property
const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    bootstrap: () => {
      dispatch(loadGallery());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
