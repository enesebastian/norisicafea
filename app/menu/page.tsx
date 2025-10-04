"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/types";
import { PRODUCTS } from "@/lib/data";
import { CATEGORIES } from "@/lib/data";
import SearchBar from "@/app/ui/menu/searchbar";
import MenuSection from "@/app/ui/menu/menugrid";

export default function MenuPage() {
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
    <div className="m-10 md:mx-auto max-w-7xl sm:p-6 py-30 md:py-30">
      <h1 className="mb-4 text-2xl font-bold text-orange-400">In-house Menu</h1>

      <SearchBar query={query} onChange={setQuery} />

      <div className="">
        <main>
          
          {categories.map((cat) => (
            <MenuSection key={cat} title={cat} description={CATEGORIES.find((category) => category.name===cat)?.description ?? ""} items={grouped.get(cat) ?? []} />
          ))}

          {Array.from(grouped.values()).every((arr) => arr.length === 0) && (
            <div className="rounded-2xl border bg-white p-8 text-center text-neutral-600">
              No items match your search.
            </div>
          )}

          <footer className="mt-10 rounded-2xl border bg-white p-6 text-center text-sm text-neutral-500">
            Preturile includ TVA · Ultima actualizare {new Date().toLocaleDateString()}
          </footer>
        </main>
      </div>
    </div>
  );
}
