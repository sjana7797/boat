import DailyDeals from "@/components/DailyDeals";
import Hero from "@/components/Hero";
import ProductsGallery from "@/components/ProductsGallery";
import PromiseCTA from "@/components/PromiseCTA";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <main>
      <Hero />
      <PromiseCTA />
      <DailyDeals />
      <ProductsGallery />
    </main>
  );
}
