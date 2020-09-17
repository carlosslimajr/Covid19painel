import React from 'react'
import './FilteredCountries.css'

export default class FilteredCountries extends React.Component {

  state = {
    filteredList: []
  };

  async componentDidMount() {
    try {
      const url = 'https://api.covid19api.com/summary'
      const response = await fetch(url);
      const body = await response.json().then(b => b.Countries)
      // console.log(body)

      this.setState({
        filteredList: body
      })
    } catch (err) {
      console.error(err)
    }
  };

  render() {

    (this.state.filteredList && this.state.filteredList.sort((a, b) => b.TotalDeaths - a.TotalDeaths))

    return (
      <div id="filteredcountries" >
        <div>
          <h4>Países mais afetados <span>-Ordenados por numero de morte.</span></h4>
        </div>

        <table className="tables">
          <thead>
            <tr value="Pais">
              <th>País</th>
              <th>Confirmados</th>
              <th>Curados</th>
              <th>Mortes</th>
            </tr>
          </thead>
          <tbody>
            {this.state.filteredList && this.state.filteredList.map((c, index) => (
              <tr key={index}>
                <td>{c.Country}</td>
                <td>{c.TotalConfirmed}</td>
                <td>{c.TotalRecovered}</td>
                <td>{c.TotalDeaths}</td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>
    )
  }
}
