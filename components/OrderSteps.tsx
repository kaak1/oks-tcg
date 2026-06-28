"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageSquareText, MousePointerClick, PackageCheck, QrCode } from "lucide-react";

const steps = [
  {
    title: "选择商品",
    description: "浏览盲包、单卡、评级卡或卡盒，选择数量。",
    icon: MousePointerClick,
  },
  {
    title: "WhatsApp确认库存",
    description: "系统自动带入商品资料，客服确认现货和邮费。",
    icon: MessageSquareText,
  },
  {
    title: "DuitNow付款",
    description: "确认订单后通过 DuitNow QR 或银行转账付款。",
    icon: QrCode,
  },
  {
    title: "安排包装发货",
    description: "使用保护包装处理卡牌，并安排邮寄。",
    icon: PackageCheck,
  },
];

export function OrderSteps() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="order-flow" className="section-pad py-14 md:py-20">
      <div className="section-inner">
        <div className="mb-8">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-yellow-200/65">How to Order</p>
          <h2 className="text-3xl font-black text-white md:text-5xl">简单四步完成下单</h2>
        </div>

        <div className="grid gap-3 md:gap-4 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
                className="glass-panel relative overflow-hidden rounded-[20px] p-4 md:rounded-[24px] md:p-5"
              >
                <span className="absolute right-4 top-3 text-4xl font-black text-white/[0.035] md:right-5 md:top-4 md:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-yellow-300/12 text-[var(--gold)] md:mb-5 md:h-12 md:w-12 md:rounded-2xl">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
                </div>
                <h3 className="text-base font-black text-white md:text-lg">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/58 md:mt-3">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
