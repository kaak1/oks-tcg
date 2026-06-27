"use client";

import { Menu, MessageCircle, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { generateWhatsAppContactLink } from "@/lib/whatsapp";
import { cn, scrollToSection } from "@/lib/utils";

const navItems = [
  { id: "home", label: "首页", target: "home" },
  { id: "mystery", label: "盲包", target: "categories" },
  { id: "cards", label: "宝可梦卡牌", target: "products" },
  { id: "psa", label: "PSA卡牌", target: "products" },
  { id: "about", label: "关于我们", target: "about" },
  { id: "faq", label: "常见问题", target: "faq" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (target: string) => {
    setIsOpen(false);
    scrollToSection(target);
  };

  const openWhatsApp = () => {
    window.open(generateWhatsAppContactLink(), "_blank", "noopener,noreferrer");
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-white/10 bg-[#05050a]/72 shadow-[0_10px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <nav className="section-pad mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => handleNav("home")}
          className="group flex min-h-11 items-center gap-3 rounded-full pr-2 text-left"
          aria-label="返回首页"
        >
          <span className="relative grid h-11 w-11 place-items-center rounded-2xl border border-yellow-300/35 bg-gradient-to-br from-[#211704] via-[#090b14] to-[#1b102c] shadow-[0_0_28px_rgba(246,198,71,0.18)]">
            <Sparkles className="h-5 w-5 text-[var(--gold)]" aria-hidden="true" />
            <span className="absolute inset-1 rounded-xl border border-white/10" />
          </span>
          <span>
            <span className="block text-base font-black tracking-[0.14em] text-white">OKS-TCG</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-yellow-200/65">
              OVERKISS MY TOYS
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.label}
              type="button"
              data-testid={`nav-desktop-${item.id}`}
              onClick={() => handleNav(item.target)}
              className="min-h-11 rounded-full px-4 text-sm font-medium text-white/72 transition hover:bg-white/8 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={openWhatsApp}
            className="gold-button hidden min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#f6c647] to-[#f0a928] px-5 text-sm font-black text-[#171007] shadow-[0_0_28px_rgba(246,198,71,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_0_38px_rgba(246,198,71,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp 下单
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/7 text-white transition hover:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-300 lg:hidden"
            aria-label={isOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "section-pad grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 lg:hidden",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="glass-panel mb-4 rounded-[22px] p-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                data-testid={`nav-mobile-${item.id}`}
                onClick={() => handleNav(item.target)}
                className="flex min-h-12 w-full items-center justify-between rounded-2xl px-4 text-sm font-semibold text-white/78 transition hover:bg-white/8 hover:text-white"
              >
                {item.label}
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
              </button>
            ))}
            <button
              type="button"
              onClick={openWhatsApp}
              className="gold-button mt-2 flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#f6c647] to-[#f0a928] px-4 text-sm font-black text-[#171007]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp 下单
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
