import db from '../../../../../db.json'

import { NextResponse } from 'next/server'

export async function GET(_,{ params }) {
    const {id} = await params
    console.log(id);

    const promo = db.promo.find((promo)=> promo.id === parseInt(id))
   
    if (!promo) {
        return NextResponse.json({message: "Rate not found"}, {status: 404})
    }
    
    return NextResponse.json(promo)
}