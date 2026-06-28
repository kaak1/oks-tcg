"use client";

import Image from "next/image";

export function ModelPromoBanner() {
  const handleClick = () => {
    document.getElementById("products")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="section-pad py-5 md:py-8">
      <div className="section-inner">
        <button
          type="button"
          onClick={handleClick}
          className="group block w-full overflow-hidden rounded-[20px] border border-yellow-200/20 bg-black/30 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition hover:border-yellow-200/35"
          aria-label="查看 OKS TCG 热卖商品"
        >
          <Image
            src="/images/banners/oks-v1-model-banner.png"
            alt="OKS TCG 真人实拍热卖宣传"
            width={1600}
            height={900}
            className="h-auto w-full transition duration-500 group-hover:scale-[1.01]"
          />
        </button>
      </div>
    </section>
  );
}