"use client";
import { useTranslation } from "@/contexts/LanguageContext";
import CardNav from '@/app/ui/main/cardnav'
export default function Navbar() {
  const {translations} = useTranslation();
     const items = [
    {
      label: translations.navAbout,
      bgColor: "#6C2C25",
      textColor: "#fff",
      links: [
        { label: translations.navHowItAll, ariaLabel: "How it all started...", href: '#aboutus' },
        { label: translations.navWhereTo, ariaLabel: "Location", href: '#location' }
      ]
    },
    {
      label: translations.navMenu,
      bgColor: "#6C2C25",
      textColor: "#fff",
      links: [
        { label: translations.navTakeHome, ariaLabel: "Our store", href: '/our-store' },
        { label: translations.navMenu, ariaLabel: "In-house menu", href: '/menu' }
      ]
    },
    {
      label: translations.navCheckUsOn,
      bgColor: "#6C2C25",
      textColor: "#fff",
      links: [
        { label: "Tiktok", ariaLabel: "Tiktok", href: '#socialmedia' },
        { label: "Instagram", ariaLabel: "Instagram", href: '#socialmedia' },
        { label: translations.navLeaveReview, ariaLabel: "Leave a review", href: '#socialmedia' }
      ]
    },
        {
      label: "Justatest",
      bgColor: "#6C2C25",
      textColor: "#fff",
      links: [
        { label: "Tiktok", ariaLabel: "Tiktok", href: '' },
        { label: "Instagram", ariaLabel: "Instagram", href: '' },
        { label: "Facebook", ariaLabel: "Facebook", href: '' }
      ]
    }
  ];

  return (
    <CardNav
      logo='/main/logo.png'
      logoAlt="logonori"
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#EB5E3A"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
  }