import React, { Component } from 'react';
import './styles.css';

class Card extends Component {
  state = { 
    // name: '',
    // value: '',
    // description: '',
    // background: ''

   }
  render() { 
    let style = {
      color: this.props.color
    };
    return ( 
      <div className="card">
        <div className="card-header">
        <h3 style={style}>
          {this.props.name}
        </h3>
        </div>
        <div className="card-body">
          {this.props.value}
        </div>
      </div>
     );
  }
}
 
export default Card;