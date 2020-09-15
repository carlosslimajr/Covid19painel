import React from 'react'
import './CountryPainel.css'

export default class CountryPainel extends React.Component {

  state = {
    cases: null,
    recovered: null,
    deaths: null,
    confirmed:null
  };

  async componentDidMount() {
    try{
    const url = `https://api.covid19api.com/total/dayone/country/${this.props.country}`;
    const response = await fetch(url);
    const body = await response.json();

    const lastElement = body[body.length - 1];
    //console.log(lastElement)

    this.setState({
      cases: lastElement.Active,
      recovered: lastElement.Recovered,
      deaths: lastElement.Deaths,
      confirmed: lastElement.Confirmed,
    });
  } catch(err){
    console.error(err)
  }
  };

  render() {
    return (
      <div id="countryPainel">
        <div>
          <h4>{this.props.name}</h4>
          <ul>
            <li>Casos:<span style={{color:'black'}}>{this.state.cases}</span></li>
            <li>Casos confirmados:<span style={{color:'#4FF216'}}>{this.state.confirmed}</span></li>
            <li>Casos recuperados:<span style={{color:'#F2E316'}}>{this.state.recovered}</span></li>
            <li>Mortes confirmadas: <span style={{color:'#FF0011'}}>{this.state.deaths}</span></li>
          </ul>
        </div>
      </div>
    )
  }
}
