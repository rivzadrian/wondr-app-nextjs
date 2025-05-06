import AllPromoClient from './AllPromoClient';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const revalidate = 60;

async function getPromo() {
  const res = await fetch(`${baseUrl}/api/promo`, {
    next: { revalidate },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch promo data");
  }

  return res.json();
}

export default async function AllPromoServer() {
  const promos = await getPromo();
  return <AllPromoClient promos={promos} />;
}
