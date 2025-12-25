import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { MembershipSection } from "@/components/sections/MembershipSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>CONEC | Council of Next Economy Creators</title>
        <meta
          name="description"
          content="CONEC is a multinational innovation, entrepreneurship, and economic development organization supporting founders, mobilizing capital, and producing leadership talent."
        />
        <meta
          name="keywords"
          content="CONEC, innovation, entrepreneurship, economic development, startup accelerator, venture capital, leadership"
        />
        <link rel="canonical" href="https://conec.global" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProgramsSection />
          <TestimonialsSection />
          <MembershipSection />
          <CTASection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
