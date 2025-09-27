
"use client";
import { useState } from "react";
import Image from 'next/image'
import SocialmediaButton from '@/app/ui/main/socialmedia-button'

export default function SocialMediaGrid() {

      return (
          <section id="socialmedia" className="flex items-center bg-white dark:bg-gray-900 min-h-screen py-24">
              <div className="container mx-auto px-6 py-10">
                <h1 className="mx-auto h-2 w-78 rounded-lg text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl text-center">Follow us on</h1>
                <p className="mx-auto mt-4 h-2 w-64 rounded-lg" />
                <p className="mx-auto mt-4 h-2 w-64 rounded-lg bg-yellow-400 sm:w-80 dark:bg-gray-700" />

                <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:mt-12 xl:gap-12 items-center">

                    <div className="w-full flex flex-col">
                      <div className="h-64 rounded-lg relative bg-gray-300 md:h-72 xl:h-140 dark:bg-gray-600">
                        <Image src="/socialmedia/noriinsta.png" alt="text"
                               fill
                               className="object-cover" // cover makes it fill without distortion
                               ></Image>
                      </div>
                      <SocialmediaButton text="View our latest instagram post" href="http://www.google.com"></SocialmediaButton>
                    </div>

                    <div className="w-full flex flex-col">
                      <div className="h-64 w-full rounded-lg relative bg-gray-300 md:h-72 xl:h-140 dark:bg-gray-600">
                        <Image src="/socialmedia/noritiktok.png" alt="text"
                               fill
                               className="object-cover"// cover makes it fill without distortion
                               ></Image>
                      </div>
                      <SocialmediaButton text="View our latest tiktok post" href="http://www.google.com"></SocialmediaButton>
                    </div>

                    <div className="w-full flex flex-col">
                      <div className="h-64 w-full rounded-lg relative bg-gray-300 md:h-72 xl:h-140 dark:bg-gray-600">
                        <Image src="/socialmedia/norireview.png" alt="text"
                               fill
                               className="object-cover" // cover makes it fill without distortion
                               ></Image>
                      </div>
                      <SocialmediaButton text="Leave a review" href="http://www.google.com"></SocialmediaButton>
                    </div>

                </div>
              </div>
            </section>
    );
  }