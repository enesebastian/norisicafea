import type { Product } from "@/lib/types";

const formatPrice = (n: number, currency = "RON") =>
  new Intl.NumberFormat(undefined, { style: "currency", currency }).format(n);

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold">{product.name}</h3>
        <span className="font-medium text-orange-400">{formatPrice(product.price)}</span>
      </div>
      {product.description && (
        <p className="mt-1 text-sm text-neutral-600">{product.description}</p>
      )}
    </article>
  );
}
