"use client";
import { useTranslation } from "@/contexts/LanguageContext";

export default function SearchBar({
  query,
  onChange,
}: {
  query: string;
  onChange: (v: string) => void;
}) {
  const {translations} = useTranslation();
  return (
    <div className="mx-auto mb-6 max-w-2xl">
      <label className="block text-sm font-medium">{translations.menuHeaderSearchTitle}</label>
      <input
        value={query}
        onChange={(e) => onChange(e.target.value)}
        placeholder={translations.menuHeaderSearchLabel}
        className="mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  );
}
