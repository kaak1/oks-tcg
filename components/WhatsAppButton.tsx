"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { generateWhatsAppContactLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function WhatsAppButton() {
  const [isHeroCompact, setIsHeroCompact] = useState(true);

  useEffect(() => {
    const updateMode = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const hero = document.getElementById("home");

      if (!isMobile || !hero) {
        setIsHeroCompact(false);
        return;
      }

      const heroBottom = hero.offsetTop + hero.offsetHeight;
      setIsHeroCompact(window.scrollY < heroBottom - 24);
    };

    updateMode();
    window.addEventListener("scroll", updateMode, { passive: true });
    window.addEventListener("resize", updateMode);

    return () => {
      window.removeEventListener("scroll", updateMode);
      window.removeEventListener("resize", updateMode);
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
      title="需要帮助？联系我们"
      className={cn(
        "fixed z-50 inline-flex max-w-[calc(100vw-2rem)] items-center justify-center gap-2 rounded-full bg-[#21b65a] text-xs font-black text-[#04150a] shadow-[0_14px_34px_rgba(33,182,90,0.22)] transition hover:-translate-y-0.5 hover:bg-[#2fca6b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200 md:bottom-5 md:right-5 md:min-h-10 md:px-4 md:text-xs",
        isHeroCompact
          ? "right-4 top-[82px] h-10 w-10 p-0"
          : "bottom-[calc(0.9rem+env(safe-area-inset-bottom))] right-4 min-h-11 px-4",
      )}
    >
      <MessageCircle className="h-[18px] w-[18px] md:h-4 md:w-4" aria-hidden="true" />
      <span className={cn(isHeroCompact ? "hidden" : "hidden sm:inline")}>WhatsApp 客服下单</span>
      <span className={cn(isHeroCompact ? "hidden" : "sm:hidden")}>客服下单</span>
    </button>
  );
}
