export type SlabGrade = "A" | "B" | "C" | "D";

export type SlabCard = {
  grade: SlabGrade;
  number: string;
  image: string;
};

export type SlabPool = {
  productId: string;
  totalPacks: number;
  guarantee: string;
  cards: SlabCard[];
};

export const slabPool: SlabPool = {
  productId: "slab-pack-399",
  totalPacks: 55,
  guarantee: "每包保底 1 张宝可梦 Slab",
  cards: [
    { grade: "A", number: "A1", image: "/images/slab-pool/a1.png" },
    { grade: "A", number: "A2", image: "/images/slab-pool/a2.png" },
    { grade: "A", number: "A3", image: "/images/slab-pool/a3.png" },
    { grade: "A", number: "A4", image: "/images/slab-pool/a4.png" },
    { grade: "B", number: "B1", image: "/images/slab-pool/b1.png" },
    { grade: "B", number: "B2", image: "/images/slab-pool/b2.png" },
    { grade: "C", number: "C1", image: "/images/slab-pool/c1.png" },
    { grade: "C", number: "C2", image: "/images/slab-pool/c2.png" },
    { grade: "C", number: "C3", image: "/images/slab-pool/c3.png" },
    { grade: "C", number: "C4", image: "/images/slab-pool/c4.png" },
    { grade: "C", number: "C5", image: "/images/slab-pool/c5.png" },
    { grade: "C", number: "C6", image: "/images/slab-pool/c6.png" },
    { grade: "C", number: "C7", image: "/images/slab-pool/c7.png" },
    { grade: "C", number: "C8", image: "/images/slab-pool/c8.png" },
    { grade: "C", number: "C10", image: "/images/slab-pool/c10.png" },
    { grade: "D", number: "D1", image: "/images/slab-pool/d1.png" },
    { grade: "D", number: "D2", image: "/images/slab-pool/d2.png" },
    { grade: "D", number: "D3", image: "/images/slab-pool/d3.png" },
    { grade: "D", number: "D4", image: "/images/slab-pool/d4.png" },
    { grade: "D", number: "D5", image: "/images/slab-pool/d5.png" },
  ],
};

export const gradeOrder: SlabGrade[] = ["A", "B", "C", "D"];

export const gradeLabel: Record<SlabGrade, string> = {
  A: "A 级",
  B: "B 级",
  C: "C 级",
  D: "D 级",
};

export const gradeTag: Record<SlabGrade, string> = {
  A: "TOP CHASE",
  B: "PREMIUM",
  C: "COLLECTOR",
  D: "STANDARD",
};

export const gradeBorder: Record<SlabGrade, string> = {
  A: "border-[#f6c647]/40",
  B: "border-purple-400/40",
  C: "border-sky-400/40",
  D: "border-slate-300/30",
};

export const gradeTagClass: Record<SlabGrade, string> = {
  A: "border-[#f6c647]/40 bg-[#f6c647]/10 text-[#f6c647]",
  B: "border-purple-400/40 bg-purple-400/10 text-purple-200",
  C: "border-sky-400/40 bg-sky-400/10 text-sky-200",
  D: "border-slate-300/30 bg-slate-300/10 text-slate-200",
};

export const cardSuffix: Record<SlabGrade, string> = {
  A: "重点大奖",
  B: "精选卡池",
  C: "收藏卡池",
  D: "保底升级卡",
};

export const gradeCounts: Record<SlabGrade, number> = {
  A: 4,
  B: 2,
  C: 9,
  D: 5,
};
