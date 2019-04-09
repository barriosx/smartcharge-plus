import React, { Component } from 'react';
import moment from 'moment';
import './styles.css';
import Card from '../Card';
import { type } from 'os';
import Spinner from '../Spinner';
import Table from '../Table';
import Stats from '../Stats';
class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      evStats: [],
      evCosts: {},
      loading: true,
      hasFailed: false
     }
  }
  renderTable = (table) => {
    if (this.state.loading) {
      return null;
    } else {
      return <Card name="Breakdown of Charging Costs" value={<Table supply={table.supply } delivery={table.delivery} tax={table.tax} />} color="#2C2C2B"/>
     }
  }
  renderStats = (stats) => {
    if(this.state.evStats.length < 1 && (!this.state.hasFailed)) {
      return <Spinner style={{marginTop: '2rem;'}} />;
    }
    else if (this.state.hasFailed) {
      // TODO: Return error component
      return <Card name="Error" color="#f25961" value="Sorry something went wrong. Try refreshing the page."  />;
    }
    else {
      return <Card name="Your EV Data" value={<Stats list={stats} color="#2C2C2B"/>}/>
    }
  }
  renderCost = (loading) => {
    if(loading) {
      return <p className="mute">Loading all costs associated to charging you vehicle this month...</p>
    }
    else {
      let totKwh = (Number(this.state.evStats[1].intervalValue.split(" kWh")[0]) + Number(this.state.evStats[2].intervalValue.split(" kWh")[0])).toFixed(2);
      return (
        <div className="totals">
          <p className="text">You consumed <b>{totKwh} kWh</b> of electricity.<br></br>Here's the breakdown based on a supply charge of $0.07/kWh and a delivery charge of $0.12/kWh</p>
        </div>
      )
    }
  }
  getSummary = () => {
    fetch('/api/').then(response => {
      response.json().then(value => {
        if (value.success) {
         
          let rewards = [{
            intervalName: "Rewards Earned",
            intervalValue: "$" + (value.data.rewardPointsEarned*.001).toFixed(2),
            icon: "fas fa-piggy-bank fa-w-18 fa-3x",
            color: "#31ce36"
          }];
          let peak = [{
            intervalName: "Peak Usage",
            intervalValue: value.data.utilityIntervals.filter(val => !val.intervalName.startsWith('Off')) // Get Summer and Peak Data
            .reduce((tot,val) => (tot.intervalEnergyKwh + val.intervalEnergyKwh).toFixed(2)) + " kWh",
            icon: "fas fa-bolt fa-w-18 fa-3x",
            color: "#ffad46"
          }]
          let offPeak = [{
            intervalName: "Off-Peak Usage",
            intervalValue: value.data.utilityIntervals.filter(val => val.intervalName.startsWith('Off'))[0].intervalEnergyKwh.toFixed(2) + " kWh", // get just offpeak data
            icon: "fas fa-bolt fa-w-18 fa-3x",
            color: "#003E89"
          }]
          let totKwh = (Number(peak[0].intervalValue.split(" kWh")[0]) + Number(offPeak[0].intervalValue.split(" kWh")[0])).toFixed(2);
          let supply = (totKwh * 0.07709) ; // $.07 per kWh 
          let delivery = totKwh * 0.117561; // $0.11 per kWh
          let taxes = (supply + delivery) * .03; // total plus 3% tax
          let evCosts = [{
            intervalName: "Total Cost",
            intervalValue: "$"+(supply+delivery+taxes).toFixed(2),
            icon: "fas fa-charging-station fa-w-18 fa-3x",
            color: "#454545"
          }];
          let arr = [...rewards, ...peak, ...offPeak,...evCosts];
          this.setState({
            evStats: arr,
            evCosts: {
              supply: supply,
              delivery: delivery,
              tax: taxes
            },
            loading: false
          });
        } else {
          this.setState({hasFailed: true, loading: false});
          throw value;
        }
      }).catch( error => {
        console.log(error)
      })
    })
    .catch(error => console.log(error))
  }
  componentDidMount(){
    this.getSummary()
  }
  componentDidUpdate() {

  }
  render() { 
    return ( 
    <div className="container">
      <section>
        <div className="splash">
          <div className="header">
            <h1>Welcome back, Steven. Here is an overview on your vehicle for {moment().format('MMMM')}.</h1>
            {this.renderCost(this.state.loading)}
          </div>
        </div>
      </section>
      <div className="card-wrapper">
        {this.renderStats(this.state.evStats)}
        {this.renderTable(this.state.evCosts)}
      </div>
    </div>
     );
  }
}
 
export default Splash;