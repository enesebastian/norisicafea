"use client";
import Image from 'next/image'
import ButtonX from '@/app/ui/main/button'
import { useTranslation } from "@/contexts/LanguageContext";

export default function ImageBetween({image} : {image: string}) {
  const {translations} = useTranslation();
  const headerText = translations.heroTitle;
  const paragraphText = translations.heroHeader;
    return (
        <section className="relative w-full h-screen">

            <Image
              src={image}
              alt="NorisiCafea Hero"
              fill
              className="absolute inset-0 w-full h-full object-cover z-0"
            />


            <div className="absolute inset-0 bg-black/40 z-10"></div>


            <div className="overflow-x-hidden relative z-20 flex flex-col justify-center items-start h-full px-4 md:px-16 text-white max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{headerText}</h1>
              <p className="text-lg md:text-xl mb-6">
                {paragraphText}
              </p>
              <ButtonX name={translations.heroMenu} href="/menu"></ButtonX>
            </div>
          </section>
        );
}