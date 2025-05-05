export const revalidate = 60;
async function getExchangeRates() {
    const res = await fetch('http://localhost:3000/exchange')
    return res.json()
}

export default async function ExchangeRates() {
    const data = await getExchangeRates()

    return (
        <div>
            <h1>Kurs Hari Ini</h1>
            <ul>
                {data.map((rate)=>{
                    <li key= {rate.currency}>
                        
                    </li>
                })}
            </ul>
        </div>
    )
}