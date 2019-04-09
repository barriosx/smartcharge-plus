import React, { Component } from 'react';
import './styles.css';
class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  createStat = (val) => {
    return (
      <div className="stat">
        <p className="stat-name" style={{color: val.color}}>{val.intervalName}</p>
        <div className="stat-line">
          <i className={val.icon} style={{color: val.color}}></i>
          <h3 className="stat-value">{val.intervalValue.split(" kWh")[0]}<small>{val.intervalValue.split(" ")[1]}</small></h3>
        </div>
      </div>
    )
  }
  renderList = () => {
    return this.props.list.map(val => {return this.createStat(val)});
  }
  render() { 
    return ( 
      <div className="stats-wrapper">
        {this.renderList()}
      </div>
     );
  }
}
 
export default Stats;