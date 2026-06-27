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
    id: "mp001",
    sku: "MP001",
    name: "RM35 神秘盲包",
    category: "mystery-pack",
    price: 35,
    stock: 38,
    badge: "HOT",
    image: "/images/products/mp001.svg",
    imageAlt: "OKS-TCG black gold mystery pack placeholder",
  },
  {
    id: "mp002",
    sku: "MP002",
    name: "人气 AR / IR 盲包",
    category: "mystery-pack",
    price: 65,
    stock: 20,
    badge: "HOT",
    image: "/images/products/mp002.svg",
    imageAlt: "OKS-TCG purple gold premium mystery pack placeholder",
  },
  {
    id: "mp003",
    sku: "MP003",
    name: "高阶 SAR / PSA 盲包",
    category: "mystery-pack",
    price: 129,
    stock: 12,
    badge: "LIMITED",
    image: "/images/products/mp003.svg",
    imageAlt: "OKS-TCG limited collector mystery pack placeholder",
  },
  {
    id: "sc001",
    sku: "SC001",
    name: "皮卡丘 AR 单卡",
    category: "single-card",
    price: 89,
    stock: 1,
    badge: "NEW",
    image: "/images/products/sc001.svg",
    imageAlt: "Generic holographic single card placeholder",
  },
  {
    id: "psa001",
    sku: "PSA001",
    name: "喷火龙评级卡",
    category: "graded-card",
    price: 1280,
    stock: 1,
    badge: "RARE",
    image: "/images/products/psa001.svg",
    imageAlt: "Generic graded card slab placeholder",
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
    imageAlt: "Generic sealed trading card box placeholder",
  },
];
