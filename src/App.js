import React from 'react';
import Navbar from './Components/Navbar';
import './Styles/Navbar.css';
import InfoColumn from './Components/InfoColumn';
import "./Styles/InfoColumn.css"
import CountryList from './Components/CountryList';
import "./Styles/CountryList.css"

const App = () => {
  return (
    <div>
        <Navbar/>
        <InfoColumn/>
        <CountryList/>
    </div>
  )
}

export default App;