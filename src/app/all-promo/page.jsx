const revalidate = 60;

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
async function getPromo() {
  const res = await fetch(`${baseUrl}/api/promo`, {
    next: {revalidate: revalidate}
  });
  return res.json();
}

export default async function AllPromo() {
  const data = await getPromo();

  // console.log("Promo List:", baseUrl);

  return (
    <section className=" md:pt-[5px] bg-[#6350F8] relative">
      <div className="relative z-[5] overflow-x-hidden pb-0 sm:pb-32 md:pb-0">
        <section className=" md:pt-[5px] bg-[#6350F8] relative">
          <div className="relative z-[5] overflow-x-hidden pb-0 sm:pb-32 md:pb-0">
            <img src="" alt="" />
            <div className="pt-[64px] max-w-screen-xl md:max-w-screen-sm lg:max-w-screen-xl px-[24px] md:px-[30px] mx-auto"></div>
            <div className="mt-[2px] md:mt-[5px] max-w-screen-xl md:max-w-screen-sm lg:max-w-screen-xl px-[24px] md:px-[30px] mx-auto">
              <div className="flex items-center justify-between ">
                <h2 className="text-white text-[40px] leading-[48px] md:text-[80px] font-demibold md:leading-[88px] w-32 md:w-auto w-[60%] md:w-auto">
                  Semua Promo
                </h2>
              </div>
            </div>

            <div className="flex flex-wrap">
              {data.map((promo) => (
                <div
                  key={promo.id}
                  className="font-bold swiper swiper-initialized swiper-horizontal mySwiperPromo mt-[32px] md:mt-[80px] max-w-screen-xl md:max-w-screen-sm lg:max-w-screen-xl mx-auto flex items-center justify-between px-[24px] md:px-[30px] swiper-backface-hidden"
                >
                  <div
                    className="swiper-wrapper"
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  >
                    <div
                      className="swiper-slide swiper-slide-active"
                      style={{ width: "420px", marginRight: "16px" }}
                    >
                      <a href={promo.href}>
                        <img
                          className="rounded-[24px] w-full h-full"
                          src={promo.imageUrl}
                          alt=""
                        />
                        <div className="mt-[24px]">
                          <div className="quill mb-10 font-demibold text-[16px] leading-[24px] md:text-[24px] md:leading-[32px] text-white line-clamp-4">
                            <div className="quill">
                              <p className="">
                                {promo.name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
