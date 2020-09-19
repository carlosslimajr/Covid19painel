import React from 'react'
import word from '../assets/img/word2.svg'
import CountryPainel from '../components/CountryPainel/CountryPainel'
import FilteredCountries from '../components/FilteredCountries.js/FilteredCountries'
import Navbar from '../components/Navbar/Navbar'
import GlobalPainel from '../components/GlobalPainel/GlobalPainel'
import './Index.css'

const Index = () => {

  React.useEffect(() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
         const modal = document.getElementById("loader");
         modal.style.display = "none";
      }, 1000);

    })
  }, [])
  return (

    <div id="App" className="d-flex mb-5 sizecontainer">

      <Navbar />
      <div className="container mt-5">
        <div>
          <h3>Painel global covid-19</h3>
          <p>Dados atualizados diariamente</p>
        </div>
        <GlobalPainel />
        <div className="painels">
          <CountryPainel country="brazil" name="Situação no Brasil" />
          <FilteredCountries />
        </div>

      </div>

      <div id="loader" >
        <span className="spanloader"></span>

      </div>
    </div>
  )
}

export default Index
