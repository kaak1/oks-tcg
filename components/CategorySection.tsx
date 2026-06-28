"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { categories } from "@/data/categories";
import type { ProductCategory } from "@/data/products";
import { cn, scrollToSection } from "@/lib/utils";

type CategorySectionProps = {
  activeCategory: ProductCategory | "all";
  onCategorySelect: (category: ProductCategory) => void;
};

export function CategorySection({ activeCategory, onCategorySelect }: CategorySectionProps) {
  const reduceMotion = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      scrollerRef.current?.scrollTo({ left: 0, behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const selectCategory = (category: ProductCategory) => {
    onCategorySelect(category);
    scrollToSection("products");
  };

  return (
    <section id="categories" className="section-pad pb-7 pt-8 md:pb-20 md:pt-10">
      <div className="section-inner">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-yellow-200/65">Collections</p>
            <h2 className="text-3xl font-black text-white md:text-5xl">热门分类</h2>
          </div>
          <button
            type="button"
            onClick={() => scrollToSection("products")}
            className="hidden min-h-11 rounded-full border border-white/12 bg-white/7 px-5 text-sm font-bold text-white/78 transition hover:bg-white/12 hover:text-white md:inline-flex md:items-center md:gap-2"
          >
            查看商品
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div
          ref={scrollerRef}
          className="scrollbar-hide -mx-4 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-3 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0 md:scroll-px-0"
        >
          {categories.map((category, index) => {
            const isActive = activeCategory === category.id;

            return (
              <motion.button
                key={category.id}
                type="button"
                onClick={() => selectCategory(category.id)}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
                whileHover={reduceMotion ? undefined : { y: -7, rotateX: 3, rotateY: -3 }}
                className={cn(
                  "glow-border holo-surface group relative min-h-[280px] w-[calc(100vw-48px)] max-w-[380px] shrink-0 snap-start snap-always scroll-ml-8 overflow-hidden rounded-[24px] border p-4 text-left transition sm:w-[310px] md:w-auto md:max-w-none md:min-w-0 md:scroll-ml-0",
                  isActive
                    ? "border-yellow-300/42 bg-yellow-300/10"
                    : "border-white/12 bg-white/[0.045] hover:border-yellow-200/28",
                )}
              >
                <div className="relative mb-5 aspect-[1.18] overflow-hidden rounded-[18px] border border-white/10 bg-[#080b16]">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    width={460}
                    height={390}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-xl font-black text-white">{category.name}</h3>
                    <p className="mt-1 break-words text-xs font-black leading-tight tracking-[0.16em] text-yellow-100/58">
                      {category.englishName}
                    </p>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-yellow-300/28 bg-yellow-300/12 text-[var(--gold)] transition group-hover:rotate-12 group-hover:bg-yellow-300/18">
                    <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
