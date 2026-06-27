"use client";

import { Camera, Globe2, MessageCircle, Music2, Sparkles } from "lucide-react";
import { generateWhatsAppContactLink } from "@/lib/whatsapp";
import { scrollToSection } from "@/lib/utils";

const quickLinks = [
  { label: "首页", target: "home" },
  { label: "盲包", target: "categories" },
  { label: "单卡", target: "products" },
  { label: "PSA卡牌", target: "products" },
  { label: "关于我们", target: "about" },
];

const helpLinks = [
  { label: "购买流程", target: "order-flow" },
  { label: "配送方式", target: "faq" },
  { label: "退换规则", target: "faq" },
  { label: "常见问题", target: "faq" },
];

const socials = [
  { label: "Facebook", icon: Globe2 },
  { label: "Instagram", icon: Camera },
  { label: "TikTok", icon: Music2 },
  { label: "WhatsApp", icon: MessageCircle },
];

export function Footer() {
  const openWhatsApp = () => {
    window.open(generateWhatsAppContactLink(), "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="section-pad border-t border-white/10 bg-black/22 pb-[calc(5rem+env(safe-area-inset-bottom))] pt-12 md:py-12">
      <div className="section-inner">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.8fr_0.8fr_0.85fr_0.85fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl border border-yellow-300/35 bg-gradient-to-br from-[#211704] via-[#090b14] to-[#1b102c]">
                <Sparkles className="h-5 w-5 text-[var(--gold)]" aria-hidden="true" />
              </span>
              <div>
                <p className="font-black tracking-[0.14em] text-white">OKS-TCG</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-yellow-200/65">
                  OVERKISS MY TOYS
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-7 text-white/58">
              专注收藏卡牌、神秘盲包、单卡及PSA评级卡。
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black text-white">快速链接</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => scrollToSection(link.target)}
                  className="block min-h-8 text-sm text-white/58 transition hover:text-white"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black text-white">客户帮助</h3>
            <div className="space-y-2">
              {helpLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => scrollToSection(link.target)}
                  className="block min-h-8 text-sm text-white/58 transition hover:text-white"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black text-white">付款方式</h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-white/12 bg-white/7 px-3 py-2 text-xs font-bold text-white/68">
                DuitNow QR
              </span>
              <span className="rounded-full border border-white/12 bg-white/7 px-3 py-2 text-xs font-bold text-white/68">
                银行转账
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black text-white">社交平台</h3>
            <div className="grid grid-cols-2 gap-2">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <button
                    key={social.label}
                    type="button"
                    onClick={social.label === "WhatsApp" ? openWhatsApp : undefined}
                    className="flex min-h-10 items-center gap-2 rounded-full border border-white/12 bg-white/7 px-3 text-xs font-bold text-white/64 transition hover:bg-white/12 hover:text-white"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {social.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs leading-6 text-white/42">
          <p>
            Pokémon and related trademarks belong to their respective owners. OKS-TCG is an independent reseller and is
            not affiliated with or endorsed by The Pokémon Company.
          </p>
          <p className="mt-3">© 2026 OKS-TCG · OVERKISS MY TOYS</p>
        </div>
      </div>
    </footer>
  );
}
