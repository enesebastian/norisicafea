'use client';

import { useState, useEffect } from 'react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'ro', name: 'Romanian', nativeName: 'Română', flag: '🇷🇴' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
];

interface LanguageModalProps {
  isOpen: boolean;
  onClose: (language: string) => void;
  currentLanguage?: string;
}

export default function LanguageModal({ isOpen, onClose, currentLanguage }: LanguageModalProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(
    currentLanguage || null
  );

  useEffect(() => {
    if (currentLanguage) {
      setSelectedLanguage(currentLanguage);
    }
  }, [currentLanguage]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    return () => {
      // Cleanup on unmount
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleConfirm = () => {
    if (selectedLanguage) {
      onClose(selectedLanguage);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 p-5 animate-fadeIn overflow-y-auto"
      style={{ touchAction: 'none' }}
    >
      <div 
        className="bg-gradient-to-br from-[#F5E6D3] to-[#E8D5C4] rounded-3xl p-10 max-w-[500px] w-full shadow-2xl animate-scaleIn my-auto"
        style={{ touchAction: 'auto' }}
      >

        {/* Title */}
        <h2 className="text-center text-[#3E2723] text-2xl mb-2 font-bold">
          Welcome to NoriSiCafea
        </h2>
        <p className="text-center text-[#6B4423] text-base mb-8">
          Select your language
        </p>

        {/* Language Options */}
        <div className="grid gap-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelectedLanguage(lang.code)}
              className={`
                bg-white rounded-xl p-3 cursor-pointer transition-all duration-300
                flex items-center gap-4 border-3
                hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(107,68,35,0.3)]
                ${
                  selectedLanguage === lang.code
                    ? 'border-[#6B4423] bg-[#FFF8F0] border-[3px]'
                    : 'border-transparent border-[3px] hover:border-[#8B6F47]'
                }
              `}
            >
              <div className="text-2xl min-w-[50px] text-center">{lang.flag}</div>
              <div className="flex-1 text-left">
                <div className="text-md font-semibold text-[#3E2723] mb-1">
                  {lang.name}
                </div>
                <div className="text-sm text-[#8B6F47]">{lang.nativeName}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          disabled={!selectedLanguage}
          className={`
            w-full bg-gradient-to-br from-[#6B4423] to-[#8B6F47] text-white
            border-none rounded-xl p-5 text-sm font-semibold cursor-pointer
            mt-6 transition-all duration-300 uppercase tracking-wider
            hover:translate-y-[-2px] hover:shadow-[0_8px_20px_rgba(107,68,35,0.4)]
            hover:bg-gradient-to-br hover:from-[#8B6F47] hover:to-[#6B4423]
            active:translate-y-0
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
          `}
        >
          Confirm Selection
        </button>
      </div>
    </div>
  );
}