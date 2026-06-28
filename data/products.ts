export type ProductCategory =
  | "mystery-pack"
  | "single-card"
  | "graded-card"
  | "accessories";

export type ProductBadge = "HOT" | "LIMITED" | "NEW" | "RARE";

export type Product = {
  id: string;
  sku: string;
  name: string;
  category: ProductCategory;
  price: number;
  stock: number;
  badge: ProductBadge;
  image: string;
  imageAlt: string;
};

export const products: Product[] = [
  {
    id: "oks-v1",
    sku: "OKS-V1",
    name: "OKS V1 100% HIT 神秘盲包",
    category: "mystery-pack",
    price: 35,
    stock: 99,
    badge: "HOT",
    image: "/images/products/oks-v1.png",
    imageAlt: "OKS V1 100% HIT RM35 神秘盲包",
  },
  {
    id: "oks-v2",
    sku: "OKS-V2",
    name: "OKS V2 神秘盲包",
    category: "mystery-pack",
    price: 0,
    stock: 0,
    badge: "LIMITED",
    image: "/images/products/oks-v2-sold.png",
    imageAlt: "OKS V2 已售罄神秘盲包",
  },
  {
    id: "oks-v3",
    sku: "OKS-V3",
    name: "OKS V3 100% HIT 神秘盲包",
    category: "mystery-pack",
    price: 58,
    stock: 58,
    badge: "NEW",
    image: "/images/products/oks-v3.png",
    imageAlt: "OKS V3 100% HIT RM58 神秘盲包",
  },
  {
    id: "sc001",
    sku: "SC001",
    name: "热门收藏单卡",
    category: "single-card",
    price: 89,
    stock: 1,
    badge: "NEW",
    image: "/images/products/sc001.svg",
    imageAlt: "热门收藏单卡",
  },
  {
    id: "psa001",
    sku: "PSA001",
    name: "热门 PSA 评级卡",
    category: "graded-card",
    price: 1280,
    stock: 1,
    badge: "RARE",
    image: "/images/products/psa001.svg",
    imageAlt: "热门 PSA 评级收藏卡",
  },
  {
    id: "bx001",
    sku: "BX001",
    name: "日版收藏卡盒",
    category: "accessories",
    price: 420,
    stock: 6,
    badge: "NEW",
    image: "/images/products/bx001.svg",
    imageAlt: "日版收藏卡盒",
  },
];
