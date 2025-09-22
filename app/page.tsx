import LocationHero from '@/app/ui/main/location-hero'
import SocialMediaGrid from '@/app/ui/main/socialmedia-grid'
import AboutUs from '@/app/ui/main/aboutus'
import ImageBetween from '@/app/ui/main/image-between'
import Navbar  from '@/app/ui/main/topnavbar'
import ReservationCard from '@/app/ui/main/reservations-card'
export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <ImageBetween image="/main/coffee-1.png"></ImageBetween>
      <AboutUs></AboutUs>
      <LocationHero></LocationHero>
      <ImageBetween image="/main/coffee-2.png"></ImageBetween>
      <ReservationCard></ReservationCard>
      <SocialMediaGrid></SocialMediaGrid>
    </>
  );
}
