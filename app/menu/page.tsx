"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/types";
import { PRODUCTS } from "@/lib/data";
import { CATEGORIES } from "@/lib/data";
import SearchBar from "@/app/ui/menu/searchbar";
import MenuSection from "@/app/ui/menu/menugrid";
import Hero from "@/app/ui/menu/hero";
import { useTranslation } from "@/contexts/LanguageContext";

export default function MenuPage() {
  const {translations} = useTranslation();
  const [query, setQuery] = useState("");

  const categories = useMemo(
    () => Array.from(new Set(PRODUCTS.map((p) => p.category))),
    []
  );

  const grouped = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = q
      ? PRODUCTS.filter(
          (p) =>
            p.name.toLowerCase().includes(q) ||
            p.description?.toLowerCase().includes(q) ||
            String(p.price).includes(q)
        )
      : PRODUCTS;

    const map = new Map<string, Product[]>();
    for (const c of categories) map.set(c, []);
    for (const p of base) map.get(p.category)!.push(p);
    return map;
  }, [query, categories]);

    return (
    <main className="relative min-h-screen m-0 p-0">
      {/* Background hero image */}
      <Hero />

      {/* Overlay layer for readability */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

      {/* Menu content on top */}
      <div className="relative z-10 py-25 mx-5 md:mx-auto max-w-7xl sm:p-6 md:py-30">
        <h1 className="mb-4 text-2xl font-bold text-orange-400">{translations.menuHeaderTitle}</h1>

        <SearchBar query={query} onChange={setQuery} />

        <main>
          {categories.map((cat) => (
            <MenuSection
              key={cat}
              title={cat}
              description={
                CATEGORIES.find((category) => category.name === cat)?.description ?? ""
              }
              items={grouped.get(cat) ?? []}
            />
          ))}

          {Array.from(grouped.values()).every((arr) => arr.length === 0) && (
            <div className="rounded-2xl border bg-white/90 p-8 text-center text-neutral-600">
              {translations.menuNoItems}
            </div>
          )}

          <footer className="mt-10 rounded-2xl border bg-white/90 p-6 text-center text-sm text-neutral-500">
          {translations.menuTVA}{" "} {new Date().toLocaleDateString()}
          </footer>
        </main>
      </div>
    </main>
  );
}
