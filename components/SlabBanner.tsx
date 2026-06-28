"use client";

import Image from "next/image";

export function SlabBanner() {
  return (
    <section className="section-pad py-4 md:py-8" aria-label="RM399 Slab 包推荐">
      <div className="section-inner flex justify-center">
        <button
          type="button"
          onClick={() => {
            document.getElementById("slab-pack-399")?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }}
          className="group block w-[calc(100vw-32px)] max-w-[1180px] overflow-hidden rounded-[22px] border border-yellow-200/18 bg-black/28 shadow-[0_24px_70px_rgba(0,0,0,0.32)] transition hover:border-yellow-200/32 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-200"
          aria-label="查看 RM399 Slab 包相关商品"
        >
          <Image
            src="/images/banners/slab-pack-399-mobile.png"
            alt="RM399 Slab mystery pack"
            width={1600}
            height={900}
            priority
            className="h-auto w-full rounded-[22px] transition duration-500 group-hover:scale-[1.01]"
          />
        </button>
      </div>
    </section>
  );
}
