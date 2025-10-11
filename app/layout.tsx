"use client";

import '@/app/ui/globals.css';
import { lusitana } from '@/app/ui/fonts';
import type { Metadata } from "next";
import Navbar  from '@/app/ui/main/topnavbar';
import { useLanguage } from '@/lib/useLanguage';
import { useState } from "react";
import LanguageModal from './ui/main/language-modal';
import LanguageToggleButton from './ui/main/language-toggle';
import { LanguageProvider } from '@/contexts/LanguageContext';



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    const { language, saveLanguage, isLoading } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Show modal if no language is set and not loading
  const shouldShowModal = !isLoading && !language;

  const handleLanguageSelect = (selectedLanguage: string) => {
    saveLanguage(selectedLanguage);
    setIsModalOpen(false);
    window.location.reload();
  };

  const handleToggleClick = () => {
    setIsModalOpen(true);
  };
  return (

    <html lang="en">
      <body className={`${lusitana.className} antialiased`}
       style={{
         backgroundColor: "#FFFFFF",
       }}
      >
        {language && !isModalOpen && (
          <LanguageToggleButton onClick={handleToggleClick} />
        )}
        <LanguageProvider>
          {/* Show modal on first visit or when toggle is clicked */}
        <LanguageModal
          isOpen={shouldShowModal || isModalOpen}
          onClose={handleLanguageSelect}
          currentLanguage={language || undefined}
        />

        {/* Show toggle button only after language is selected */}
        <Navbar></Navbar>
        {children}
        </LanguageProvider>
        </body>
    </html>
  );
}
