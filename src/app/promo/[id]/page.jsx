export const dynamic = 'force-dynamic'// tell next js to make the page static

async function getPromo() {
    const res = await fetch('http://localhost:3001/api/promo',{
        cache: 'no-cache'
    })
    return res.json();
}

export default async function PromoDetail(props) {

    const promo = await getPromo()
    const { id } = await props.params; // ✅ await here
  
    const numericId = parseInt(id-1, 10);
  
    console.log("Promo ID:", numericId);
    
    return (
        <div>
          <div className="heading">
            <h2 className="text-[#141414] text-[40px] md:text-[80px] font-demibold">
            {promo[numericId].name}
            </h2>
          </div>
          <div className="flex justify-center">
          <img
                          className="rounded-[24px] w-150 h-[400px] mt-9"
                          src={promo[numericId].imageUrl}
                          alt=""
                        />

          </div>
          <div className="flex items-center justify-between w-full pt-[40px] pb-[16px] md:pt-[50px] padding-bottom-faq active font-medium rtl:text-right md:gap-3">
            
            <span className="flex items-center justify-between">
            
              <div className="font-demibold ms-[16px] md:ms-0  text-[#141414] text-[16px] leading-[24px] md:text-[32px] text-left md:leading-[40px]">
                {promo[numericId].details}
              </div>
            </span>
            </div>
          
        </div>


    )

  }