import React from 'react'
import Currency from './Currency'

export default function Currencies({ currencies, nightMode, sortByRank, sortByName, sortBySymbol, sortByPrice, sortByPercentChange, sortByMarketCap, sortByVolume, sortBySupply }) {
    return (
        <div className={nightMode ? 'currency-container-night' : 'currency-container'}>
            <div className='currency-headers'>
                <div className='currency-rank' onClick={sortByRank}>#</div>
                <div className='currency-icon'></div>
                <div className='currency-name' onClick={sortByName}>Name</div>
                <div className='currency-symbol' onClick={sortBySymbol}>Symbol</div>
                <div className='currency-price' onClick={sortByPrice}>Price</div>
                <div className='currency-24h' onClick={sortByPercentChange}>24h %</div>
                <div className='currency-market-cap' onClick={sortByMarketCap}>Market Cap</div>
                <div className='currency-volume-24h' onClick={sortByVolume}>Volume (24h)</div>
                <div className='currency-circulating-supply' onClick={sortBySupply}>Circulating Supply</div>
            </div>
            {currencies.map(currency => (
                <Currency key={currency.id} currency={currency} nightMode={nightMode}></Currency>
            ))}
        </div>
    )
}
