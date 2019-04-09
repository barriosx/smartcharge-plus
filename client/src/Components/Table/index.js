import React, { Component } from 'react';
import './styles.css';
class Table extends Component {
  state = {  }
  render() { 
    return ( 
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Cost Type </th>
            <th scope="col">Rate</th>
            <th scope="col">Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Generation</td>
            <td>$0.07 per kWh</td>
            <td>${this.props.supply.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Delivery</td>
            <td>$0.11 per kWh</td>
            <td>${this.props.delivery.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Taxes</td>
            <td>3%</td>
            <td>${this.props.tax.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
 
export default Table;