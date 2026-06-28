"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/data/products";
import { formatRM, generateWhatsAppOrderLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
  index?: number;
};

const badgeStyles: Record<Product["badge"], string> = {
  HOT: "bg-red-500/16 text-red-100 border-red-300/30",
  LIMITED: "bg-yellow-300/16 text-yellow-100 border-yellow-200/36",
  NEW: "bg-cyan-400/14 text-cyan-100 border-cyan-200/30",
  RARE: "bg-purple-400/18 text-purple-100 border-purple-200/34",
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);
  const reduceMotion = useReducedMotion();
  const isSoldOut = product.stock <= 0;
  const stockLabel = isSoldOut ? "已售罄" : product.stock === 1 ? "仅剩 1 件" : `现货 ${product.stock} 件`;

  const changeQuantity = (delta: number) => {
    if (isSoldOut) {
      return;
    }

    setQuantity((current) => {
      const next = current + delta;
      return Math.min(Math.max(next, 1), product.stock);
    });
  };

  const buyNow = () => {
    if (isSoldOut) {
      return;
    }

    const orderLink = generateWhatsAppOrderLink(product, quantity);

    if (orderLink) {
      window.open(orderLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.article
      data-testid={`product-${product.id}`}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={{ delay: index * 0.05, duration: 0.48, ease: "easeOut" }}
      className={cn(
        "glow-border group flex h-full flex-col overflow-hidden rounded-[18px] border border-white/12 bg-[#080b16]/82 shadow-[0_18px_42px_rgba(0,0,0,0.24)] md:rounded-[24px] md:shadow-[0_26px_70px_rgba(0,0,0,0.28)]",
        isSoldOut && "border-white/10 bg-[#080b16]/72",
      )}
    >
      <div className="relative m-2 aspect-square overflow-hidden rounded-[16px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-2 md:m-3 md:rounded-[20px] md:p-3 lg:p-4">
        <Image
          src={product.image}
          alt={product.imageAlt}
          width={520}
          height={480}
          className={cn(
            "h-full w-full object-contain transition duration-500",
            isSoldOut ? "brightness-75 saturate-[0.9]" : "group-hover:scale-105",
          )}
        />
        <span
          className={cn(
            "animate-badge absolute left-2 top-2 rounded-full border px-2 py-0.5 text-[9px] font-black tracking-[0.12em] md:left-3 md:top-3 md:px-3 md:py-1 md:text-[11px] md:tracking-[0.16em]",
            badgeStyles[product.badge],
          )}
        >
          {product.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-2.5 pb-2.5 md:px-4 md:pb-4">
        <div className="mb-2 md:mb-4">
          <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-black leading-snug text-white md:min-h-12 md:text-lg">
            {product.name}
          </h3>
          <p className="mt-1 hidden text-xs font-bold uppercase tracking-[0.18em] text-white/45 md:block">
            SKU {product.sku}
          </p>
        </div>

        <div className="mb-3 flex flex-col items-start gap-1.5 md:mb-4 md:flex-row md:items-end md:justify-between md:gap-3">
          <div className="min-w-0">
            <p className="hidden text-xs font-semibold text-white/46 md:block">{isSoldOut ? "状态" : "价格"}</p>
            <p
              className={cn(
                "text-lg font-black leading-tight md:text-2xl",
                isSoldOut ? "text-red-100" : "text-[var(--gold)]",
              )}
            >
              {isSoldOut ? "已售罄" : `RM${formatRM(product.price)}`}
            </p>
          </div>
          <span
            className={cn(
              "rounded-full border px-2 py-0.5 text-[10px] font-bold md:px-3 md:py-1 md:text-xs",
              isSoldOut
                ? "border-red-300/25 bg-red-500/10 text-red-100"
                : product.stock === 1
                  ? "border-yellow-200/32 bg-yellow-300/10 text-yellow-100"
                  : "border-emerald-200/24 bg-emerald-400/10 text-emerald-100",
            )}
          >
            {stockLabel}
          </span>
        </div>

        <div className="mb-4 hidden items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-2 md:flex">
          <span className="px-2 text-sm font-bold text-white/70">数量</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              data-testid={`decrease-${product.id}`}
              onClick={() => changeQuantity(-1)}
              disabled={quantity <= 1 || isSoldOut}
              aria-disabled={quantity <= 1 || isSoldOut}
              aria-label={`减少 ${product.name} 数量`}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/12 bg-white/7 text-white transition hover:bg-white/12 disabled:cursor-not-allowed disabled:border-white/8 disabled:bg-white/[0.04] disabled:text-white/34"
            >
              <Minus className="h-4 w-4" aria-hidden="true" />
            </button>
            <span
              data-testid={`quantity-${product.id}`}
              className="grid h-9 min-w-9 place-items-center rounded-full bg-black/28 px-3 text-sm font-black text-white"
            >
              {isSoldOut ? 0 : quantity}
            </span>
            <button
              type="button"
              data-testid={`increase-${product.id}`}
              onClick={() => changeQuantity(1)}
              disabled={quantity >= product.stock || isSoldOut}
              aria-disabled={quantity >= product.stock || isSoldOut}
              aria-label={`增加 ${product.name} 数量`}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/12 bg-white/7 text-white transition hover:bg-white/12 disabled:cursor-not-allowed disabled:border-white/8 disabled:bg-white/[0.04] disabled:text-white/34"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {product.id === "slab-pack-399" && (
          <Link
            href="/products/slab-pack-399"
            className="mb-2 inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3 text-xs font-black text-white transition hover:border-white/24 hover:text-white md:min-h-12 md:gap-2 md:px-5 md:text-sm"
          >
            查看卡池
          </Link>
        )}
        <button
          type="button"
          data-testid={`buy-${product.id}`}
          data-order-link={isSoldOut ? "" : generateWhatsAppOrderLink(product, quantity)}
          onClick={buyNow}
          disabled={isSoldOut}
          aria-disabled={isSoldOut}
          className={cn(
            "mt-auto inline-flex min-h-9 w-full items-center justify-center gap-1.5 rounded-full px-3 text-xs font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-200 md:min-h-12 md:gap-2 md:px-5 md:text-sm",
            isSoldOut
              ? "cursor-not-allowed border border-red-200/20 bg-red-500/12 text-red-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
              : "gold-button bg-gradient-to-r from-[#f6c647] to-[#f0a928] text-[#171007] shadow-[0_0_28px_rgba(246,198,71,0.22)] hover:-translate-y-0.5",
          )}
        >
          <ShoppingBag className="h-3.5 w-3.5 md:h-4 md:w-4" aria-hidden="true" />
          {isSoldOut ? "已售罄" : "立即购买"}
        </button>
      </div>
    </motion.article>
  );
}
