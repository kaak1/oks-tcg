"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { generateWhatsAppContactLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const [isHeroCompact, setIsHeroCompact] = useState(true);
  const [isProductSectionVisible, setIsProductSectionVisible] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    let productObserver: IntersectionObserver | undefined;

    const updateHeroMode = () => {
      const isMobile = mobileQuery.matches;
      const hero = document.getElementById("home");

      if (!isMobile || !hero) {
        setIsHeroCompact(false);
        return;
      }

      const heroBottom = hero.offsetTop + hero.offsetHeight;
      setIsHeroCompact(window.scrollY < heroBottom - 24);
    };

    const disconnectProductObserver = () => {
      productObserver?.disconnect();
      productObserver = undefined;
    };

    const updateProductObserver = () => {
      disconnectProductObserver();

      if (!mobileQuery.matches) {
        setIsProductSectionVisible(false);
        updateHeroMode();
        return;
      }

      const commerceSections = document.querySelectorAll("[data-category-section], [data-product-section]");

      if (commerceSections.length === 0 || typeof IntersectionObserver === "undefined") {
        setIsProductSectionVisible(false);
        updateHeroMode();
        return;
      }

      productObserver = new IntersectionObserver(
        (entries) => {
          setIsProductSectionVisible(entries.some((entry) => entry.isIntersecting));
        },
        { threshold: 0.01 },
      );
      commerceSections.forEach((section) => productObserver?.observe(section));
      updateHeroMode();
    };

    updateProductObserver();
    window.addEventListener("scroll", updateHeroMode, { passive: true });
    window.addEventListener("resize", updateProductObserver);
    mobileQuery.addEventListener("change", updateProductObserver);

    return () => {
      disconnectProductObserver();
      window.removeEventListener("scroll", updateHeroMode);
      window.removeEventListener("resize", updateProductObserver);
      mobileQuery.removeEventListener("change", updateProductObserver);
    };
  }, []);

  const openWhatsApp = () => {
    window.open(generateWhatsAppContactLink(), "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      data-testid="floating-whatsapp"
      onClick={openWhatsApp}
      aria-label="WhatsApp 客服下单"
      aria-hidden={isProductSectionVisible}
      tabIndex={isProductSectionVisible ? -1 : undefined}
      title="需要帮助？联系我们"
      className={cn(
        "fixed z-50 inline-flex max-w-[calc(100vw-2rem)] items-center justify-center gap-2 rounded-full bg-[#21b65a] text-xs font-black text-[#04150a] shadow-[0_14px_34px_rgba(33,182,90,0.22)] transition hover:-translate-y-0.5 hover:bg-[#2fca6b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:bottom-5 md:right-5 md:min-h-12 md:px-6 md:text-sm",
        isProductSectionVisible && "pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100",
        isHeroCompact
          ? "right-4 top-[82px] h-10 w-10 p-0"
          : "bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 h-12 px-4",
      )}
    >
      <MessageCircle className="h-[18px] w-[18px] md:h-4 md:w-4" aria-hidden="true" />
      <span className={cn(isHeroCompact ? "hidden" : "hidden sm:inline")}>WhatsApp 客服下单</span>
      <span className={cn(isHeroCompact ? "hidden" : "sm:hidden")}>客服下单</span>
    </button>
  );
}
