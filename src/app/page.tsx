import Hero from "@/components/Hero";
import AboutSection from "@/views/AboutSection";
import ServicesSection from "@/views/ServicesSection";
import ProcessSection from "@/views/ProcessSection";
import FeaturedProjectsSection from "@/views/FeaturedProjectsSection";
import TestimonialsSection from "@/views/TestimonialsSection";
import ContactSection from "@/views/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Innovative Solutions for Modern Businesses"
        subtitle="Welcome to YK Innovations"
        description="We transform ideas into powerful digital experiences that drive growth and exceed expectations."
        primaryCTA={{
          text: "Get Started",
          href: "#contact",
        }}
        secondaryCTA={{
          text: "View Our Work",
          href: "#projects",
        }}
        backgroundImage="https://picsum.photos/1920/1080?random=1"
        overlay={true}
        overlayOpacity={50}
      />

      {/* About Section */}
      <AboutSection
        title="Building the Future Together"
        subtitle="About Us"
        description="At YK Innovations, we're passionate about creating cutting-edge solutions that empower businesses to thrive in the digital age. With a team of expert developers, designers, and strategists, we deliver exceptional results that exceed expectations."
        stats={[
          { value: "100+", label: "Projects Completed" },
          { value: "50+", label: "Happy Clients" },
          { value: "5+", label: "Years Experience" },
        ]}
        cta={{
          text: "Learn More About Us",
          href: "#about",
        }}
        imagePosition="right"
      />

      {/* Featured Projects Section */}
      <FeaturedProjectsSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
