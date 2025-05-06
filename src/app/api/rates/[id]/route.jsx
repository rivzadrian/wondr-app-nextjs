import db from '../../../../../db.json'

import { NextResponse } from 'next/server'

export async function GET(_,{ params }) {
    const {id} = await params
    console.log(id);

    const rate = db.rates.find((rate)=> rate.id === parseInt(id))
   
    if (!rate) {
        return NextResponse.json({message: "Rate not found"}, {status: 404})
    }
    
    return NextResponse.json({message: 'success', data: rate})
}