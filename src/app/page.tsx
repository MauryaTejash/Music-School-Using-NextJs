import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructure from "@/components/Instructure";
import MusicTestimonial from "@/components/MovingCard";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white[0.02]">
      {/* <h1 className="text-2xl text-center text-white">Hello Tejash</h1> */}
      <HeroSection />
      <Featured />
      <WhyChooseUs />
      <MusicTestimonial />
      <UpcomingWebinar />
      <Instructure />
      <Footer />
    </main>
  );
}
