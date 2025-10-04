import '@/app/ui/globals.css';
import { lusitana } from '@/app/ui/fonts';
import type { Metadata } from "next";
import Navbar  from '@/app/ui/main/topnavbar';

export const metadata: Metadata = {
  title: "NoriSiCafea",
  description: "descriptiooon",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body className={`${lusitana.className} antialiased`}
       style={{
         backgroundColor: "#FFFFFF",
       }}
      >
        <Navbar></Navbar>
        {children}</body>
    </html>
  );
}
