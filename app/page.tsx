import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import PhilosophySection from "@/components/sections/philosophy-section";
import ContactSection from "@/components/sections/contact-section";
import ConnectSection from "@/components/sections/connect-section";
import BrandKitSection from "@/components/sections/brand-kit-section";

export default function Home() {
  return (
    <main className="bg-[#030303] text-white overflow-hidden">
      <HeroSection />
      <AboutSection />
      <PhilosophySection />
      <ConnectSection />
      <BrandKitSection />
      <ContactSection />
    </main>
  );
}
