
"use client";
import { useState } from "react";
import Image from 'next/image'
import SocialmediaButton from '@/app/ui/main/socialmedia-button'
import { FaInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";

export default function SocialMediaGrid() {

      return (
          <section className="py-24 bg-[#fff7ec] w-full min-h-screen overflow-x-hidden border-2 border-red">
              <div className="mx-2 md:mx-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-brown-900 mb-12 relative inline-block">
                  Follow us on
                  <span className="block w-16 h-1 bg-amber-500 mx-auto mt-2 rounded-full" />
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {/* Instagram Card */}
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center">
                    <img src="/socialmedia/noriinsta.png" alt="Instagram Dog" className="w-28 h-28 mb-4" />
                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.instagram.com/norisicafea/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-brown-800 hover:text-blue-400 text-lg font-medium transition"
                      >
                    <FaInstagram className="text-2xl font-bold text-brown-800 mb-2"></FaInstagram>
                    <p>@norisicafea</p>
                        </a>
                    </div>
                    <a
                      href="#"
                      className="mt-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2 rounded-full transition"
                    >
                      View Our Latest Post
                    </a>
                  </div>

                  {/* TikTok Card */}
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center">
                    <img src="/socialmedia/noritiktok.png" alt="Instagram Dog" className="w-28 h-28 mb-4" />
                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.tiktok.com/@norisicafea"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-brown-800 hover:text-blue-400 text-lg font-medium transition"
                      >
                    <AiFillTikTok className="text-2xl font-bold text-brown-800 mb-2"></AiFillTikTok>
                    <p>@norisicafea</p>
                        </a>
                    </div>
                    <a
                      href="#"
                      className="mt-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2 rounded-full transition"
                    >
                      View Our Latest Post
                    </a>
                  </div>

                  {/* Review Card */}
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col items-center text-center">
                    <img src="/socialmedia/norireview.png" alt="Instagram Dog" className="w-28 h-28 mb-4" />
                    <div className="flex items-center gap-2">
                      <a
                        href="https://www.tiktok.com/@norisicafea"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-brown-800 hover:text-blue-400 text-lg font-medium transition"
                      >
                    <FaGoogle className="text-2xl font-bold text-brown-800 mb-2"></FaGoogle>
                    <p>NoriSiCafea</p>
                        </a>
                    </div>
                    <a
                      href="#"
                      className="mt-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2 rounded-full transition"
                    >
                      View Our Latest Post
                    </a>
                  </div>

                </div>
              </div>
            </section>
    );
  }