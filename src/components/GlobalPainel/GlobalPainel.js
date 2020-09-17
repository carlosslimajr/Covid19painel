import React from 'react'
import './GlobalPainel.css'

export default class GlobalPainel extends React.Component {
  state = {
    cases: null,
    recovered: null,
    deaths: null,
    newConfirmed: null,
    newDeaths: null,
    newRecovered: null
  };

  async componentDidMount() {
    try {
      const url = 'https://api.covid19api.com/summary';
      const response = await fetch(url);
      const body = await response.json();
       console.log(body.Global)

      this.setState({
        cases: body.Global.TotalConfirmed,
        recovered: body.Global.TotalRecovered,
        deaths: body.Global.TotalDeaths,
        newConfirmed: body.Global.TotalConfirmed,
        newDeaths: body.Global.NewDeaths,
        newRecovered: body.Global.NewRecovered
      });
    } catch (err) {
      console.error(err)
    }
  };

  render() {
    return (
      <>
        
        <div id="globalpainel" className="row">
          <div className="totalpainel col-sm-7 col-10 mx-auto row">
            <div className="painelcase">
              <h5>Total de casos</h5>
              <p>{this.state.cases}</p>
            </div>
          </div>
          <div className="mediumpainel col-sm-6 col-10 mx-auto">
            <div className="mediumcase">
              <h5>Total de Recuperados</h5>
              <p>{this.state.recovered}</p>
            </div>
          </div>
          <div className="mediumpainel col-sm-6 col-10 mx-auto">
            <div className="mediumcase">
              <h5>Total de Mortos</h5>
              <p className="red">{this.state.deaths}</p>
            </div>
          </div>
          <div className="shortpainel col-sm-4 col-10 mx-auto">
            <div className="shortcase">
              <h5>Novos casos confirmados</h5>
              <p>{this.state.newConfirmed}</p>
            </div>
          </div>
          <div className="shortpainel col-sm-4 col-10 mx-auto">
            <div className="shortcase">
              <h5>Novos casos recuperados </h5>
              <p>{this.state.newRecovered}</p>
            </div>
          </div>
          <div className="shortpainel col-sm-4 col-10 mx-auto">
            <div className="shortcase">
              <h5>Novas mortes confirmadas</h5>
              <p>{this.state.newDeaths}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
