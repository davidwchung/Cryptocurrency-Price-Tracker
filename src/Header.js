export default function Header() {
    return (
        <div className='header'>
            <h1>Cryptocurrency Price Tracker</h1>
            <p>This project uses the </p>
            <a href='https://www.coingecko.com/en/api'>CoinGecko API</a>
            <br></br>
            <br></br>
            <div className='description'>Feel free to search for a specific Cryptocurrency, sort through them, or click one for more details about it.</div>
            <br></br>
            <div className='description'>There is also Dark Mode toggle in the top right corner.</div>
        </div>
    )
}
