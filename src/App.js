import React, { Component } from "react";
import { fetchAPI } from "./api";
import { Card } from "./components";
import './App.css';

export class App extends Component {
  state = {
    name: "Salim Serdar!!!",
    totalData: {},
  };

  async componentDidMount() {
    const totalData = await fetchAPI();
    this.setState({ totalData });
  }

  render() {
    const { totalData } = this.state;

    return (
      <div className="container">
        <Card totalData={totalData} />
      </div>
    );
  }
}

export default App;
