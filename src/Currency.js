import React from 'react'
import { useState } from 'react'

export default function Currency({ currency, nightMode }) {

    const [showMore, setShowMore] = useState(false)

    return (
        <>
            <div className={nightMode ? 'currency-night' : 'currency'} onClick={() => setShowMore(!showMore)}>
                <div className='currency-rank'>{currency.market_cap_rank}</div>
                <img src={currency.image} alt=""/>
                <div className='currency-name'>{currency.name}</div>
                <div className='currency-symbol'>{currency.symbol.toUpperCase()}</div>
                <div className='currency-price'>${currency.current_price.toLocaleString()}</div>
                <div className={currency.price_change_percentage_24h > 0 ? 'currency-24h increase' : 'currency-24h decrease'}>{parseFloat(currency.price_change_percentage_24h).toFixed(2)}%</div>
                <div className='currency-market-cap'>${currency.market_cap.toLocaleString()}</div>
                <div className='currency-volume-24h'>${currency.total_volume.toLocaleString()}</div>
                <div className='currency-circulating-supply'>${currency.circulating_supply.toLocaleString()}</div>
            </div>
            {showMore && 
                <div className={nightMode ? 'currency-stats-night' : 'currency-stats'}>
                    <div className='currency-stats-first-column'>
                        <div className='text-bold'>24h Low:</div>
                        <div>${currency.low_24h.toLocaleString()}</div>
                        <div className='text-bold'>24h High:</div> 
                        <div>${currency.high_24h.toLocaleString()}</div>
                    </div>
                    <div className='currency-stats-second-column'>
                        <div className='text-bold'>All Time Low:</div> 
                        <div>${currency.atl.toLocaleString()}</div>
                        <div className='text-bold'>All Time High:</div>
                        <div>${currency.ath.toLocaleString()}</div>
                    </div>
                    <div className='currency-stats-third-column'>
                        <div className='text-bold'>ATL Percent Change:</div>
                        <div>{parseFloat(currency.atl_change_percentage).toFixed(2)}%</div>
                        <div className='text-bold'>ATH Percent Change:</div>
                        <div>{parseFloat(currency.ath_change_percentage).toFixed(2)}%</div>
                    </div>
                    <div className='currency-stats-fourth-column'>
                        <div className='text-bold'>ATL Date:</div>
                        <div>{currency.atl_date.substring(0,10)}</div>
                        <div className='text-bold'>ATH Date:</div>
                        <div>{currency.ath_date.substring(0,10)}</div>
                    </div>
                </div>
            }
        </>
    )
}
