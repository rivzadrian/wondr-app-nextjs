export const dynamic = 'force-dynamic'// tell next js to make the page static

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;



async function getPromoImage(id) {
  const res = await fetch(`${baseUrl}/api/promo/${id}`,{
      cache: 'force-cache'
  })
  return res.json();
}

async function getPromo(id) {
    const res = await fetch(`${baseUrl}/api/promo/${id}`,{
        cache: 'no-cache'
    })
    return res.json();
}

export default async function PromoDetail(props) {

   
    const { id } = await props.params; // ✅ await here

    const promo = await getPromo(id)
    const promoImage = await getPromoImage(id)
  
    // const numericId = parseInt(id-1, 10);
  
    // console.log("Promo ID:", promo);
    
    return (
        <div>
          <div className="heading">
            <h2 className="text-[#141414] text-[40px] md:text-[80px] font-demibold">
            {promo.name}
            </h2>
          </div>
          <div className="flex justify-center">
          <img
                          className="rounded-[24px] w-150 h-[400px] mt-9"
                          src={promoImage.imageUrl}
                          alt=""
                        />

          </div>
          <div className="flex items-center justify-between w-full pt-[40px] pb-[16px] md:pt-[50px] padding-bottom-faq active font-medium rtl:text-right md:gap-3">
            
            <span className="flex items-center justify-between">
            
              <div className="font-demibold ms-[16px] md:ms-0  text-[#141414] text-[16px] leading-[24px] md:text-[32px] text-left md:leading-[40px]">
                {promo.details}
              </div>
            </span>
            </div>
          
        </div>


    )

  }