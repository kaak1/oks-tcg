"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  return (
    <section id="faq" className="section-pad py-14 md:py-20">
      <div className="section-inner grid gap-7 lg:grid-cols-[0.42fr_0.58fr]">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-yellow-200/65">FAQ</p>
          <h2 className="text-3xl font-black text-white md:text-5xl">常见问题</h2>
          <p className="mt-5 text-sm leading-7 text-white/58">
            盲包、单卡、付款和邮寄规则都可以先看这里。仍不确定时，WhatsApp 客服会在下单前确认细节。
          </p>
        </div>

        <div className="space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="glass-panel overflow-hidden rounded-[22px]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex min-h-16 w-full items-center justify-between gap-4 px-5 text-left text-base font-black text-white"
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <ChevronDown
                    className={cn("h-5 w-5 shrink-0 text-[var(--gold)] transition", isOpen && "rotate-180")}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={reduceMotion ? undefined : { height: "auto", opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: "easeOut" }}
                    >
                      <p className="border-t border-white/10 px-5 py-5 text-sm leading-7 text-white/62">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
