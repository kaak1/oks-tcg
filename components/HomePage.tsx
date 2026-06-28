"use client";

import { useState } from "react";
import type { ProductCategory } from "@/data/products";
import { AboutSection } from "./AboutSection";
import { CategorySection } from "./CategorySection";
import { FAQSection } from "./FAQSection";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navbar } from "./Navbar";
import { OrderSteps } from "./OrderSteps";
import { ParticleBackground } from "./ParticleBackground";
import { ProductSection } from "./ProductSection";
import { SlabBanner } from "./SlabBanner";
import { TrustBar } from "./TrustBar";
import { WhatsAppButton } from "./WhatsAppButton";

export function HomePage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | "all">("all");

  return (
    <main className="page-shell">
      <ParticleBackground />
      <div className="content-layer">
        <Navbar />
        <Hero />
        <TrustBar />
        <SlabBanner />
        <CategorySection activeCategory={activeCategory} onCategorySelect={setActiveCategory} />
        <ProductSection activeCategory={activeCategory} onCategorySelect={setActiveCategory} />
        <OrderSteps />
        <AboutSection />
        <FAQSection />
        <Footer />
        <WhatsAppButton />
      </div>
    </main>
  );
}
