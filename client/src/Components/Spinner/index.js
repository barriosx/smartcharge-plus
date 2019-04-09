import React, { Component } from 'react';
import './styles.css';
class Spinner extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="ellipsis-wrapper">
        <div className="ellipsis-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3>Getting the data...</h3>
      </div>
     );
  }
}
 
export default Spinner;