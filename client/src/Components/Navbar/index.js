import React, { Component } from 'react';
import './styles.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return ( 
      <nav className="navbar">
        <ul>
          <li className="header">Smartcharge Plus</li>
        </ul>
      </nav>
     );
  }
}
 
export default Navbar;