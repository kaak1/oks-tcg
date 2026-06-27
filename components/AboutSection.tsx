"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock3, Gem, MapPinned, PackageCheck } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "马来西亚现货", icon: MapPinned },
  { label: "精选收藏卡", icon: Gem },
  { label: "安全保护包装", icon: PackageCheck },
  { label: "快速客服回复", icon: Clock3 },
];

const events = [
  { name: "Sutera", image: "/images/events/sutera.svg" },
  { name: "Toppen", image: "/images/events/toppen.svg" },
  { name: "Eco Galleria", image: "/images/events/eco-galleria.svg" },
  { name: "Austin", image: "/images/events/austin.svg" },
];

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-pad py-14 md:py-20">
      <div className="section-inner grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.48, ease: "easeOut" }}
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-yellow-200/65">About OKS-TCG</p>
          <h2 className="text-balance text-3xl font-black leading-tight text-white md:text-5xl">
            我们不只是卖卡，而是在经营收藏体验
          </h2>
          <p className="mt-6 text-base leading-8 text-white/64">
            OKS-TCG 由 OVERKISS MY TOYS 运营，专注收藏卡牌、神秘盲包、热门单卡及 PSA
            评级卡。我们提供马来西亚现货、安全包装、邮寄服务及 WhatsApp 快速下单。
          </p>

          <div className="mt-7 grid grid-cols-2 gap-3">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="rounded-[20px] border border-white/10 bg-white/[0.045] p-4">
                  <Icon className="mb-3 h-5 w-5 text-[var(--gold)]" aria-hidden="true" />
                  <p className="text-sm font-black text-white">{item.label}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {events.map((event, index) => (
            <motion.figure
              key={event.name}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.07, duration: 0.45, ease: "easeOut" }}
              className="group overflow-hidden rounded-[24px] border border-white/12 bg-white/[0.045]"
            >
              <div className="relative aspect-[1.15] overflow-hidden">
                <Image
                  src={event.image}
                  alt={`${event.name} 市集活动占位图片`}
                  width={520}
                  height={452}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="border-t border-white/10 px-4 py-3 text-sm font-black text-white">
                {event.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
