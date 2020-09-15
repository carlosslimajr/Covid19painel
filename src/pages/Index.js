import React from 'react'
import { Button } from 'reactstrap'
import CountryPainel from '../components/CountryPainel/CountryPainel'
import FilteredCountries from '../components/FilteredCountries.js/FilteredCountries'
import Navbar from '../components/Navbar/Navbar'
import GlobalPainel from '../components/GlobalPainel/GlobalPainel'
import './Index.css'



const Index = () => {

  const [option,setOption] = React.useState({})

  return (
    <div id="App" className="d-flex mb-5">
      <Navbar />
      <div className="container mt-5">
        <h3>Painel global covid-19</h3>
        <p>Dados atualizados diariamente</p>
        <GlobalPainel />
        <div className="painels">
          <CountryPainel country="brazil" name="Situação no Brasil" />
          <div>
            <FilteredCountries />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Index
