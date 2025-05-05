export default async function PromoDetail(props) {
    const { id } = await props.params; // ✅ await here
  
    const numericId = parseInt(id, 10);
  
    console.log("Promo ID:", numericId);
  
    if (numericId === 1) {
      return <h1>Promo ID: {numericId}</h1>;
    }
  
    return <h1>Promo Not Found</h1>;
  }