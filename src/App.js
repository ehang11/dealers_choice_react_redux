import React from "react";
import axios from "axios";

import Header from "./Components/Header";
import Gallery from "./Components/Gallery";
import SelectedNFT from "./Components/SelectedNFT";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nft: [],
      selectedNFT: "",
    };
  }

  componentDidMount = async () => {
    const nft = (await axios.get("/nft")).data;
    this.setState({ nft });

    window.addEventListener("hashchange", async () => {
      const selected = window.location.hash.slice(1);
      const selectedNFT = (await axios.get(`/nft/${selected}`)).data;
      this.setState({ selectedNFT: selected });
    });
  };

  chooseNFT = async (NFTId) => {
    const selectedNFT = (await axios.get(`/nft/${NFTId}`)).data;
    this.setState({ selectedNFT });
  };

  //CREATE NFT

  //DELETE NFT
  deleteNFT = async (NFTId) => {
    await axios
      .delete(`/nft/${NFTId}`)
      .then((res) => this.setState({ nft: [...res.data] }))
      .catch((err) => console.log(error));
  };

  render() {
    return (
      <div id="app">
        <Header />

        {this.state.selectedNFT.id ? (
          <SelectedNFT selectedNFT={this.state.selectedNFT} />
        ) : (
          <Gallery nft={this.state.nft} chooseNFT={this.chooseNFT} />
        )}
      </div>
    );
  }
}

export default App;
