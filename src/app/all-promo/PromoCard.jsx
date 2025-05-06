'use client';

import Link from 'next/link';

export default function PromoCard({ promo }) {
  return (
    <Link href={`/promo/${promo.id}`}>
      <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
        <img
          src={promo.imageUrl}
          alt={promo.name}
          className="rounded-lg w-full h-40 object-cover mb-3"
        />
        <h2 className="text-lg font-semibold mb-2">{promo.name}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{promo.details}</p>
      </div>
    </Link>
  );
}
