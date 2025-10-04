import type { Product } from "@/lib/types";
import ProductCard from "@/app/ui/menu/productcard";

export default function MenuSection({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: Product[];
}) {
  if (!items.length) return null;
  return (
    <section id={`cat-${title}`} className="mb-10 scroll-mt-24">
      <h2 className="mb-3 text-lg font-bold tracking-tight">{title} - {description}</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
