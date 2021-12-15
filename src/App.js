import React from "react";
import axios from "axios";

import Header from "./Components/Header";

class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount = async () => {
    return "componentDidMount";
  };

  render() {
    return <div>HELLO from App.js</div>;
  }
}

export default App;
