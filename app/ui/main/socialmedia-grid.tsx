
"use client";
import ButtonX from '@/app/ui/main/button'
import { FaInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import SocialmediaButton from './socialmedia-button';
import Image from "next/image";
import { useTranslation } from "@/contexts/LanguageContext";

export default function SocialMediaGrid() {

  const {translations} = useTranslation();
  const CTAText = translations.followUsOnHeader;
  const instaTag ="@norisicafea";
  const tiktokTag ="@norisicafea";
  const googleName ="NoriSiCafea";
  const instaLatestText = translations.followUsOnViewPost;
  const tiktokLatestText = translations.followUsOnViewPost;
  const googleLatestText = translations.followUsOnReview;

      return (
          <section className="py-24 bg-[#ffffff] w-full min-h-screen overflow-x-hidden border-2 border-red">
              <div className="mx-2 md:mx-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-brown-900 mb-12 relative inline-block">
                  {CTAText}
                  <span className="block w-16 h-1 bg-amber-500 mx-auto mt-2 rounded-full" />
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 h-[21vw]">
                  {/* Instagram Card */}
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center justify-between">
                    <Image src="/socialmedia/instagram_logo.svg" alt="Instagram Logo" width={100} height={100}></Image>
                      <a
                        href="https://www.tiktok.com/@norisicafea"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-brown-800 hover:text-blue-400 text-lg font-medium transition"
                      >
                    <p className="text-2xl">{instaTag}</p>
                        </a>
                    <ButtonX name={instaLatestText} href ="#"></ButtonX>
                  </div>

                  {/* TikTok Card */}
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center justify-between">
                    <Image src="/socialmedia/tiktok_logo.svg" alt="TikTok Logo" width={100} height={100}></Image>
                      <a
                        href="https://www.tiktok.com/@norisicafea"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-brown-800 hover:text-blue-400 text-lg font-medium transition"
                      >
                    <p className="text-2xl">{tiktokTag}</p>
                        </a>
                    <ButtonX name={tiktokLatestText} href ="#"></ButtonX>
                  </div>

                  {/* Review Card */}
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center justify-between">
                    <Image src="/socialmedia/google_logo.svg" alt="Google Logo" width={100} height={100}></Image>
                      <a
                        href="https://www.tiktok.com/@norisicafea"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-brown-800 hover:text-blue-400 text-lg font-medium transition"
                      >
                    <p className="text-2xl">{googleName}</p>
                        </a>
                    <ButtonX name={googleLatestText} href ="#"></ButtonX>
                  </div>
                </div>
              </div>
            </section>
    );
  }