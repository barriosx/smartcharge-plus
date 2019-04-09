import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Splash from './Components/Splash';

class App extends Component {
  state = {
    showCharging: false,
  }
  constructor() {
    super();
    // this.legendHandler = this.legendHandler.bind(this);
  }
  chartHandler = () => {
    this.setState({showCharging: !this.state.showCharging});
  }
  render() {
    return (
      <>
        <Navbar handler={this.chartHandler} />
        <Splash />
      </>
    );
  }
}

export default App;
