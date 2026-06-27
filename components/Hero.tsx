"use client";

import { motion, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import type { CSSProperties, MouseEvent } from "react";
import { generateWhatsAppContactLink } from "@/lib/whatsapp";
import { scrollToSection } from "@/lib/utils";

const salesTags = ["RM35 起", "马来西亚现货", "限量盲包"];

export function Hero() {
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const packX = useTransform(mouseX, [-0.5, 0.5], [-16, 16]);
  const packY = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);
  const cardRotate = useTransform(mouseX, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const openWhatsApp = () => {
    window.open(generateWhatsAppContactLink(), "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="home"
      className="section-pad relative overflow-hidden pb-3 pt-[74px] md:pb-4 md:pt-[88px]"
    >
      <div
        aria-hidden="true"
        className="absolute left-[62%] top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-300/10 blur-3xl md:h-[28rem] md:w-[28rem]"
      />
      <div className="mx-auto grid w-full max-w-[1360px] items-center gap-4 md:min-h-[500px] md:gap-5 lg:grid-cols-[0.46fr_0.54fr]">
        <div className="relative z-10 max-w-[650px]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-300/24 bg-yellow-300/8 px-4 py-2 text-[11px] font-black tracking-[0.22em] text-yellow-100 shadow-[0_0_26px_rgba(246,198,71,0.1)] md:mb-5"
          >
            <Sparkles className="h-4 w-4 text-[var(--gold)]" aria-hidden="true" />
            OKS-TCG · MYSTERY PACK
          </motion.div>

          <h1 className="max-w-[650px] text-[clamp(2.18rem,10vw,3rem)] font-black leading-[0.96] tracking-normal text-white md:text-[clamp(3.3rem,5.4vw,6.2rem)] lg:leading-[0.94]">
            <motion.span
              className="block"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.68, ease: "easeOut" }}
            >
              拆开的不只是
            </motion.span>
            <motion.span
              className="block"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.27, duration: 0.68, ease: "easeOut" }}
            >
              一包卡
            </motion.span>
            <motion.span
              className="block whitespace-nowrap bg-gradient-to-r from-[#fff3af] via-[#f6c647] to-[#d8a729] bg-clip-text text-transparent drop-shadow-[0_0_28px_rgba(246,198,71,0.24)]"
              initial={reduceMotion ? false : { opacity: 0, y: 28 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.39, duration: 0.68, ease: "easeOut" }}
            >
              而是下一张惊喜
            </motion.span>
          </h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.58, ease: "easeOut" }}
            className="mt-4 max-w-xl text-[0.92rem] leading-7 text-white/82 md:mt-5 md:text-[1.05rem]"
          >
            宝可梦盲包 · 热门单卡 · PSA评级卡
            <br />
            马来西亚现货 · 支持邮寄 · WhatsApp快速下单
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.58, ease: "easeOut" }}
            className="mt-5 flex flex-row flex-wrap gap-3 md:mt-6"
          >
            <button
              type="button"
              onClick={() => scrollToSection("products")}
              className="gold-button inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f6c647] to-[#f0a928] px-6 text-sm font-black text-[#171007] shadow-[0_0_28px_rgba(246,198,71,0.24)] transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200 sm:flex-none"
            >
              立即选购
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={openWhatsApp}
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-yellow-200/18 bg-[#080c1c]/72 px-6 text-sm font-bold text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-yellow-200/28 hover:bg-[#10162c]/78 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200 sm:flex-none"
            >
              <MessageCircle className="h-4 w-4 text-[#5ee084]" aria-hidden="true" />
              联系客户服务
            </button>
          </motion.div>
        </div>

        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={resetMouse}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ delay: 0.26, duration: 0.78, ease: "easeOut" }}
          className="relative mx-auto mt-[-2px] h-[150px] w-full max-w-[360px] touch-pan-y md:mt-0 md:h-[500px] md:max-w-[670px] lg:translate-x-3 xl:h-[520px] xl:max-w-[720px] xl:translate-x-0"
        >
          <div aria-hidden="true" className="absolute inset-[9%] rounded-full bg-yellow-300/12 blur-3xl" />
          <div aria-hidden="true" className="energy-ring absolute inset-[8%] rounded-full opacity-45 blur-[1px]" />
          <div aria-hidden="true" className="absolute left-[15%] top-[10%] h-24 w-24 rounded-full bg-purple-500/16 blur-3xl" />
          <div aria-hidden="true" className="absolute bottom-[14%] right-[9%] h-36 w-36 rounded-full bg-yellow-300/18 blur-3xl" />

          <motion.div
            style={reduceMotion ? undefined : { x: packX, y: packY }}
            className="mobile-soft-motion absolute left-[32%] top-[0%] z-30 w-[36%] drop-shadow-[0_34px_64px_rgba(0,0,0,0.6)] md:left-[26%] md:top-[7%] md:w-[52%] md:drop-shadow-[0_42px_82px_rgba(0,0,0,0.62)]"
          >
            <Image
              src="/images/products/hero-pack.svg"
              alt="原创黑金 OKS-TCG 神秘盲包包装"
              width={430}
              height={560}
              priority
              className="h-auto w-full"
            />
          </motion.div>

          <motion.div
            style={reduceMotion ? undefined : { rotate: cardRotate }}
            className="animate-float-card holo-surface absolute left-[10%] top-[18%] z-10 w-[19%] rounded-[12px] border border-white/12 shadow-[0_24px_45px_rgba(0,0,0,0.36)] md:left-[2%] md:top-[20%] md:w-[28%] md:rounded-[16px]"
          >
            <Image
              src="/images/products/card-orbit-a.svg"
              alt="原创全息收藏卡占位图"
              width={220}
              height={308}
              className="h-auto w-full"
            />
          </motion.div>

          <div
            className="animate-float-card holo-surface absolute right-[11%] top-[7%] z-20 hidden w-[20%] rounded-[12px] border border-white/12 shadow-[0_24px_45px_rgba(0,0,0,0.36)] md:block md:right-[4%] md:top-[8%] md:w-[23%] md:rounded-[16px]"
            style={{ "--rotate": "12deg", animationDelay: "0.6s", right: "4%", top: "0%" } as CSSProperties}
          >
            <Image
              src="/images/products/card-orbit-b.svg"
              alt="原创紫金收藏卡占位图"
              width={220}
              height={308}
              className="h-auto w-full"
            />
          </div>

          <div
            className="animate-float-card holo-surface absolute bottom-[15%] left-[24%] z-40 hidden w-[16%] rounded-[10px] border border-white/12 shadow-[0_24px_45px_rgba(0,0,0,0.38)] md:block md:bottom-[30%] md:left-[17%] md:w-[18%] md:rounded-[14px]"
            style={{ "--rotate": "-8deg", animationDelay: "1.2s", bottom: "32%", left: "17%" } as CSSProperties}
          >
            <Image
              src="/images/products/card-orbit-c.svg"
              alt="原创蓝金收藏卡占位图"
              width={220}
              height={308}
              className="h-auto w-full"
            />
          </div>

          <div className="absolute right-[7%] top-[39%] z-40 hidden w-[154px] space-y-2 md:block">
            {salesTags.map((tag) => (
              <div
                key={tag}
                className="rounded-full border border-yellow-200/28 bg-[#080c1c]/72 px-4 py-2 text-center text-xs font-black text-yellow-50 shadow-[0_14px_34px_rgba(0,0,0,0.25)] backdrop-blur-md"
              >
                {tag}
              </div>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="absolute left-[18%] top-[12%] h-px w-36 rotate-[-16deg] bg-gradient-to-r from-transparent via-yellow-200/50 to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute bottom-[25%] right-[9%] h-px w-32 rotate-[16deg] bg-gradient-to-r from-transparent via-purple-200/35 to-transparent"
          />

          <div className="absolute bottom-0 left-1/2 z-40 flex w-[96%] -translate-x-1/2 justify-center gap-1.5 md:hidden">
            {salesTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-yellow-200/22 bg-[#080c1c]/78 px-2.5 py-1.5 text-[10px] font-black text-yellow-50 backdrop-blur-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
