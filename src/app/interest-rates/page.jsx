export const dynamic = 'force-static'; // tell next js to make the page static

async function getRates() {
    const res = await fetch('http://localhost:3001/api/rates',{
        // cache: 'force-cache'
    })
    return res.json();
}

export default async function InterestRates() {
    const rates = await getRates()
    return (
        <div>
            <h1>Suku Bunga Tabungan</h1>
            <ul>
                {rates.map(rate=>(
                    <li key={rate.id}>
                        {rate.name}: {rate.value}%
                    </li>
                ))}
            </ul>
        </div>
    )
}