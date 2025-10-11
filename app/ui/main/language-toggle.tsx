'use client';

interface LanguageToggleButtonProps {
  onClick: () => void;
}

export default function LanguageToggleButton({ onClick }: LanguageToggleButtonProps) {
  return (
    <div className="fixed bottom-6 right-6 z-[1000] pointer-events-auto">
      <button
        onClick={onClick}
        className="bg-gradient-to-br from-[#6B4423] to-[#8B6F47] 
                   text-white border-none rounded-full w-14 h-14 sm:w-16 sm:h-16 
                   text-2xl sm:text-3xl cursor-pointer 
                   shadow-[0_8px_20px_rgba(0,0,0,0.3)] transition-transform duration-300 
                   hover:scale-110 active:scale-95
                   flex items-center justify-center"
        aria-label="Change language"
      >
        🌐
      </button>
    </div>
  );
}