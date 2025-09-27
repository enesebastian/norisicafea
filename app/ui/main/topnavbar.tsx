
import CardNav from '@/app/ui/main/cardnav'
export default function Navbar() {
     const items = [
    {
      label: "About",
      bgColor: "#6C2C25",
      textColor: "#fff",
      links: [
        { label: "How it all started...", ariaLabel: "How it all started...", href: '#aboutus' },
        { label: "Where to find us", ariaLabel: "Location", href: '#location' }
      ]
    },
    {
      label: "Menu",
      bgColor: "#6C2C25",
      textColor: "#fff",
      links: [
        { label: "Take home", ariaLabel: "Our store", href: '/our-store' },
        { label: "Menu", ariaLabel: "In-house menu", href: '/menu' }
      ]
    },
    {
      label: "Check us on",
      bgColor: "#6C2C25",
      textColor: "#fff",
      links: [
        { label: "Tiktok", ariaLabel: "Tiktok", href: '#socialmedia' },
        { label: "Instagram", ariaLabel: "Instagram", href: '#socialmedia' },
        { label: "Leave a review", ariaLabel: "Leave a review", href: '#socialmedia' }
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