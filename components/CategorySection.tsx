"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { categories } from "@/data/categories";
import type { ProductCategory } from "@/data/products";
import { cn, scrollToSection } from "@/lib/utils";

type CategorySectionProps = {
  activeCategory: ProductCategory | "all";
  onCategorySelect: (category: ProductCategory) => void;
};

export function CategorySection({
  activeCategory,
  onCategorySelect,
}: CategorySectionProps) {
  const reduceMotion = useReducedMotion();

  const selectCategory = (category: ProductCategory) => {
    onCategorySelect(category);
    scrollToSection("products");
  };

  return (
    <section
      id="categories"
      data-category-section
      className="section-pad pb-7 pt-8 md:pb-20 md:pt-10"
    >
      <div className="section-inner">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-yellow-200/65">
              Collections
            </p>

            <h2 className="text-3xl font-black text-white md:text-5xl">
              热门分类
            </h2>

            <p className="mt-3 max-w-xs text-sm leading-6 text-white/62 md:max-w-xl">
              盲包、单卡、评级卡和卡盒周边，一眼找到要收藏的商品。
            </p>
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

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {categories.map((category, index) => {
            const isActive = activeCategory === category.id;

            return (
              <motion.button
                key={category.id}
                type="button"
                onClick={() => selectCategory(category.id)}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={
                  reduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.45,
                  ease: "easeOut",
                }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-[18px] border p-2.5 text-left transition md:rounded-[22px] md:p-3",
                  isActive
                    ? "border-yellow-300/42 bg-yellow-300/10"
                    : "border-white/12 bg-white/[0.045] hover:border-yellow-200/28",
                )}
              >
                <div className="relative mb-3 aspect-[4/5] w-full overflow-hidden rounded-[14px] bg-[#080b16] md:rounded-[18px]">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    width={460}
                    height={575}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex w-full items-center justify-between gap-2 px-1 pb-1">
                  <div className="min-w-0">
                    <h3 className="text-sm font-black leading-tight text-white md:text-lg">
                      {category.name}
                    </h3>

                    <p className="mt-1 text-[9px] font-black leading-tight tracking-[0.1em] text-yellow-100/55 md:text-[11px]">
                      {category.englishName}
                    </p>
                  </div>

                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-yellow-300/28 bg-yellow-300/10 text-[var(--gold)] transition group-hover:rotate-12 group-hover:bg-yellow-300/18">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
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