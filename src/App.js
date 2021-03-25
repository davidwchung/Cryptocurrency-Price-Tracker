import { useState, useEffect } from 'react'
import axios from 'axios'
import Currencies from './Currencies'
import Toggle from 'react-toggle'
import Header from './Header'
import Footer from './Footer'
import "react-toggle/style.css"
import { BiSun, BiMoon } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";

function App() {

  const [currencies, setCurrencies] = useState([])
  const [search, setSearch] = useState('')
  const [nightMode, setNightMode] = useState(false)
  
  const [sortRank, setSortRank] = useState(false)
  const [sortName, setSortName] = useState(false)
  const [sortSymbol, setSortSymbol] = useState(false)
  const [sortPrice, setSortPrice] = useState(false)
  const [sortPercentChange, setSortPercentChange] = useState(false)
  const [sortMarketCap, setSortMarketCap] = useState(false)
  const [sortVolume, setSortVolume] = useState(false)
  const [sortSupply, setSortSupply] = useState(false)

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCurrencies(res.data)
      }).catch(error => console.log(error))
  },[])

  function handleChange(e) {
    setSearch(e.target.value)
  }

  var filteredCurrencies = currencies.filter(currency => 
    currency.name.toLowerCase().includes(search.toLowerCase())
  )

  function sortByRank() {
    filteredCurrencies = [...currencies]
    if (sortRank) {
      filteredCurrencies.sort((a,b) => (a.market_cap_rank > b.market_cap_rank) ? 1 : -1)
    }
    else {
      filteredCurrencies.sort((a,b) => (a.market_cap_rank < b.market_cap_rank) ? 1 : -1)
    }
    setCurrencies(filteredCurrencies)
    setSortRank(!sortRank)
  }

  function sortByName() {
    filteredCurrencies = [...currencies]
    if (sortName) {
      filteredCurrencies.sort((a,b) => (a.name.toLowerCase() < b.name.toLowerCase()) ? 1 : -1)
    }
    else {
      filteredCurrencies.sort((a,b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : -1)
    }
    setCurrencies(filteredCurrencies)
    setSortName(!sortName)
  }

  function sortBySymbol() {
    filteredCurrencies = [...currencies]
    if (sortSymbol) {
      filteredCurrencies.sort((a,b) => (a.symbol.toLowerCase() < b.symbol.toLowerCase()) ? 1 : -1)
    }
    else {
      filteredCurrencies.sort((a,b) => (a.symbol.toLowerCase() > b.symbol.toLowerCase()) ? 1 : -1)
    }
    setCurrencies(filteredCurrencies)
    setSortSymbol(!sortSymbol)
  }

  function sortByPrice() {
    filteredCurrencies = [...currencies]
    if (sortPrice) {
      filteredCurrencies.sort((a,b) => (a.current_price > b.current_price) ? 1 : -1)
    }
    else {
      filteredCurrencies.sort((a,b) => (a.current_price < b.current_price) ? 1 : -1)
    }
    setCurrencies(filteredCurrencies)
    setSortPrice(!sortPrice)
  }

  function sortByPercentChange() {
    filteredCurrencies = [...currencies]
    if (sortPercentChange) {
      filteredCurrencies.sort((a,b) => (a.price_change_percentage_24h > b.price_change_percentage_24h) ? 1 : -1)
    }
    else {
      filteredCurrencies.sort((a,b) => (a.price_change_percentage_24h < b.price_change_percentage_24h) ? 1 : -1)
    }
    setCurrencies(filteredCurrencies)
    setSortPercentChange(!sortPercentChange)
  }

  function sortByMarketCap() {
    filteredCurrencies = [...currencies]
    if (sortMarketCap) {
      filteredCurrencies.sort((a,b) => (a.market_cap > b.market_cap) ? 1 : -1)
    }
    else {
      filteredCurrencies.sort((a,b) => (a.market_cap < b.market_cap) ? 1 : -1)
    }
    setCurrencies(filteredCurrencies)
    setSortMarketCap(!sortMarketCap)
  }

  function sortByVolume() {
    filteredCurrencies = [...currencies]
    if (sortVolume) {
      filteredCurrencies.sort((a,b) => (a.total_volume > b.total_volume) ? 1 : -1)
    }
    else {
      filteredCurrencies.sort((a,b) => (a.total_volume < b.total_volume) ? 1 : -1)
    }
    setCurrencies(filteredCurrencies)
    setSortVolume(!sortVolume)
  }

  function sortBySupply() {
    filteredCurrencies = [...currencies]
    if (sortSupply) {
      filteredCurrencies.sort((a,b) => (a.circulating_supply > b.circulating_supply) ? 1 : -1)
    }
    else {
      filteredCurrencies.sort((a,b) => (a.circulating_supply < b.circulating_supply) ? 1 : -1)
    }
    setCurrencies(filteredCurrencies)
    setSortSupply(!sortSupply)
  }

  return (
    <div className={nightMode ? 'main-container-night' : 'main-container'}>
      <div className='night-mode-toggle'>
        <div className='night-mode-icon'>{nightMode ? <BiMoon/> : <BiSun/>}</div>
        <label>
          <Toggle defaultChecked={nightMode} icons={false} onChange={() => setNightMode(!nightMode)} />
        </label>
      </div>
      <Header className='header'/>
      <div className='search-form'>
        <FaSearch className='search-icon'/> 
        <form>
          <input className={nightMode ? 'search-night' : 'search'} type="text" placeholder='Search By Cryptocurrency' onChange={handleChange}/>
        </form>   
      </div>
      <Currencies 
        currencies={filteredCurrencies} nightMode={nightMode} 
        sortByRank={sortByRank}
        sortByName={sortByName}
        sortBySymbol={sortBySymbol}
        sortByPrice={sortByPrice}
        sortByPercentChange={sortByPercentChange}
        sortByMarketCap={sortByMarketCap}
        sortByVolume={sortByVolume}
        sortBySupply={sortBySupply}>
      </Currencies>
      <Footer className='footer'/>
    </div>
  );
}

export default App;
