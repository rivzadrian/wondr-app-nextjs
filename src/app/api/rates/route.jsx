import db from '../../../../db.json'

import { NextResponse } from 'next/server'

const dbFilePath = Path2D.join(process.cwd(), "db.json")

export async function GET() {
    return NextResponse.json(db.rates)
    // return NextResponse.json({ data: {message: "Testing API"}})
}

export async function POST(request) {
    const newRate = await request.json()

    db.rates.push(newRate);

    fs.writeFileSync(dbFilePath, JSON.stringify(db, null, 2))
    
    return NextResponse.json(
        {message: 'Rate added', data: newRate},
        {status: 201}
    );
}