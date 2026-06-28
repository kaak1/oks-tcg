"use client";

import { ArrowLeft, ArrowRight, Grid2X2, Rows3 } from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { categories } from "@/data/categories";
import type { ProductCategory } from "@/data/products";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";
import { ProductCard } from "./ProductCard";

type ProductSectionProps = {
  activeCategory: ProductCategory | "all";
  onCategorySelect: (category: ProductCategory | "all") => void;
};

export function ProductSection({ activeCategory, onCategorySelect }: ProductSectionProps) {
  const [showGrid, setShowGrid] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  const scrollProducts = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section id="products" data-product-section className="section-pad py-14 md:py-20">
      <div className="section-inner">
        <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-yellow-200/65">Best Sellers</p>
            <h2 className="text-3xl font-black text-white md:text-5xl">热销推荐</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62 md:text-base">
              精选现货、限量盲包及人气收藏卡
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              data-testid="toggle-product-layout"
              onClick={() => setShowGrid((value) => !value)}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 bg-white/7 px-4 text-sm font-bold text-white/76 transition hover:bg-white/12 hover:text-white"
            >
              {showGrid ? <Rows3 className="h-4 w-4" /> : <Grid2X2 className="h-4 w-4" />}
              {showGrid ? "横向浏览" : "查看全部"}
            </button>
            {!showGrid && (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => scrollProducts("left")}
                  aria-label="向左切换商品"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/7 text-white transition hover:bg-white/12"
                >
                  <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollProducts("right")}
                  aria-label="向右切换商品"
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/12 bg-white/7 text-white transition hover:bg-white/12"
                >
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="scrollbar-hide mb-6 flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            data-testid="filter-all"
            onClick={() => onCategorySelect("all")}
            className={cn(
              "min-h-10 shrink-0 rounded-full border px-4 text-sm font-bold transition",
              activeCategory === "all"
                ? "border-yellow-300/42 bg-yellow-300/14 text-yellow-50"
                : "border-white/12 bg-white/6 text-white/62 hover:bg-white/10 hover:text-white",
            )}
          >
            全部商品
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              data-testid={`filter-${category.id}`}
              onClick={() => onCategorySelect(category.id)}
              className={cn(
                "min-h-10 shrink-0 rounded-full border px-4 text-sm font-bold transition",
                activeCategory === category.id
                  ? "border-yellow-300/42 bg-yellow-300/14 text-yellow-50"
                  : "border-white/12 bg-white/6 text-white/62 hover:bg-white/10 hover:text-white",
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {showGrid ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        ) : (
          <div
            ref={scrollRef}
            className="scrollbar-hide -mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:px-0"
          >
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="min-w-[82vw] max-w-[342px] snap-start sm:min-w-[318px]">
                <ProductCard product={product} index={index} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
