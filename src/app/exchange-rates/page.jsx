export const revalidate = 60;

async function getExchangeRates() {
    const res = await fetch('http://localhost:3000/exchange',{
        next: {revalidate: revalidate},
    })
    return res.json()
}

export default async function ExchangeRates() {
    const data = await getExchangeRates()

    return (
        <div>
            <h1>Kurs Hari Ini</h1>
            <ul>
{data.map((rate) => (
  <li key={rate.currency}>
    {rate.currency}: Rp {rate.value.toLocaleString()}
  </li>
))}
            </ul>
        </div>
    )
}