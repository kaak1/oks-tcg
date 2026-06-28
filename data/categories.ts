import type { ProductCategory } from "./products";

export type Category = {
  id: ProductCategory;
  name: string;
  englishName: string;
  image: string;
  imageAlt: string;
};

export const categories: Category[] = [
  {
    id: "mystery-pack",
    name: "盲包系列",
    englishName: "MYSTERY PACKS",
    image: "/images/categories/mystery-packs.png",
    imageAlt: "Black gold mystery pack category placeholder",
  },
  {
    id: "single-card",
    name: "宝可梦单卡",
    englishName: "SINGLE CARDS",
    image: "/images/categories/single-cards.png",
    imageAlt: "Holographic single card category placeholder",
  },
  {
    id: "graded-card",
    name: "PSA评级卡",
    englishName: "GRADED CARDS",
    image: "/images/categories/graded-cards.png",
    imageAlt: "Graded slab card category placeholder",
  },
  {
    id: "accessories",
    name: "卡盒与周边",
    englishName: "BOXES & ACCESSORIES",
    image: "/images/categories/boxes-accessories.png",
    imageAlt: "Card box and accessories category placeholder",
  },
];
