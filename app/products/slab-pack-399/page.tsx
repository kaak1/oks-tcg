import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatRM, generateWhatsAppOrderLink } from "@/lib/whatsapp";
import { slabPool, gradeOrder, gradeLabel, gradeTag, gradeBorder, gradeTagClass, cardSuffix } from "@/data/slabPool";
import { products } from "@/data/products";

const product = products.find((item) => item.id === "slab-pack-399");

export const metadata = {
  title: "RM399 Slab Mystery Pack 卡池 | OKS-TCG",
  description:
    "查看 OKS-TCG RM399 Slab Mystery Pack A–D 级重点卡池，每包保底 1 张宝可梦 Slab。",
};

export default function SlabPackDetailPage() {
  if (!product) {
    notFound();
  }

  const orderLink = generateWhatsAppOrderLink(product, 1);
  const remainingStock = product.stock;

  return (
    <main className="min-h-screen bg-[#050710] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-bold text-white/80 transition hover:border-white/24 hover:text-white md:text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
            返回首页
          </Link>
        </div>

        <section className="mb-10 rounded-[24px] border border-white/12 bg-[#080b16]/82 p-5 shadow-[0_26px_70px_rgba(0,0,0,0.28)] md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            <div className="md:w-1/2">
              <div className="relative aspect-square overflow-hidden rounded-[20px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-3">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-4 md:w-1/2">
              <div>
                <h1 className="text-2xl font-black leading-tight md:text-3xl">
                  {product.name}
                </h1>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-white/45">
                  SKU {product.sku}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-white/46">价格</p>
                <p className="text-2xl font-black leading-tight text-[var(--gold)] md:text-3xl">
                  RM{formatRM(product.price)}
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs font-semibold text-white/46">总包数</p>
                  <p className="text-lg font-black text-white">{slabPool.totalPacks} 包</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs font-semibold text-white/46">当前剩余</p>
                  <p className="text-lg font-black text-white">{remainingStock} 包</p>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-semibold text-white/46">保底规则</p>
                <p className="text-lg font-black text-white">{slabPool.guarantee}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm font-bold text-white/80">
                  本批次 RM399 Slab Mystery Pack 共 {slabPool.totalPacks} 包。
                </p>
                <p className="mt-2 text-sm font-bold text-white/80">
                  页面展示为 A–D 级重点卡池；其余包数均为宝可梦随机 Slab 保底池。
                </p>
                <p className="mt-2 text-sm font-bold text-white/80">
                  每包至少获得 1 张 Slab，卡款随机发出，不接受指定。实际剩余卡池与库存状态以网站更新为准。
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {remainingStock > 0 && orderLink ? (
                  <a
                    href={orderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f6c647] to-[#f0a928] px-5 py-3 text-sm font-black text-[#171007] shadow-[0_0_28px_rgba(246,198,71,0.22)] transition hover:-translate-y-0.5"
                  >
                    WhatsApp 立即购买
                  </a>
                ) : (
                  <span className="inline-flex items-center justify-center gap-2 rounded-full border border-red-200/20 bg-red-500/12 px-5 py-3 text-sm font-black text-red-50">
                    已售罄
                  </span>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-10">
          {gradeOrder.map((grade) => {
            const cards = slabPool.cards.filter((card) => card.grade === grade);
            return (
              <div
                key={grade}
                className={`rounded-[24px] border ${gradeBorder[grade]} bg-[#080b16]/82 p-5 shadow-[0_26px_70px_rgba(0,0,0,0.28)] md:p-8`}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h2 className="text-xl font-black md:text-2xl">
                      {gradeLabel[grade]} 卡池
                    </h2>
                    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-black md:px-3 md:py-1 md:text-xs ${gradeTagClass[grade]}`}>
                      {gradeTag[grade]}
                    </span>
                  </div>
                  <span className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs font-bold text-white/70">
                    展示 {cards.length} 张
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 md:gap-4">
                  {cards.map((card) => (
                    <div
                      key={card.number}
                      className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-2 md:p-3"
                    >
                      <div className="relative aspect-[3/4] overflow-hidden rounded-[16px] border border-white/10 bg-black/20">
                        <Image
                          src={card.image}
                          alt={`${gradeLabel[grade]} 展示卡 ${card.number}`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="mt-2 text-center text-xs font-black text-white/80 md:text-sm">
                        {card.number} {cardSuffix[grade]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        <section className="mt-10 rounded-[24px] border border-dashed border-white/12 bg-[#080b16]/82 p-5 shadow-[0_26px_70px_rgba(0,0,0,0.28)] md:p-8">
          <h2 className="mb-4 text-xl font-black md:text-2xl">其他宝可梦随机 Slab 保底池</h2>
          <div className="space-y-2 text-sm font-bold text-white/80">
            <p>其余包数均为宝可梦随机 Slab。</p>
            <p>每包至少获得 1 张 Slab。</p>
            <p>卡款随机发出，不接受指定。</p>
            <p>实际剩余卡池和库存状态以网站更新为准。</p>
          </div>
        </section>
      </div>
    </main>
  );
}