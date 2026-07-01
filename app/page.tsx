import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
// import SocialProof from "./components/SocialProof"; // Temporarily hidden for startup phase.
// import Stats from "./components/Stats"; // Temporarily hidden for startup phase.
import Features from "./components/Features";
import PlatformShowcase from "./components/PlatformShowcase";
import WhyTechHind from "./components/WhyTechHind";
import ProcessFlow from "./components/ProcessFlow";
import ValueProposition from "./components/ValueProposition";
import UseCases from "./components/UseCases";
import About from "./components/About";
// import Testimonials from "./components/Testimonials"; // Temporarily hidden for startup phase.
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomeStructuredData from "./components/structured-data/HomeStructuredData";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeStructuredData />
      <Header />
      <Hero />
      <Highlights />
      {/* <SocialProof /> Temporarily hidden for startup phase. */}
      {/* <Stats /> Temporarily hidden for startup phase. */}
      <Features />
      <PlatformShowcase />
      <WhyTechHind />
      <ProcessFlow />
      <ValueProposition />
      <UseCases />
      <About />
      {/* <Testimonials /> Temporarily hidden for startup phase. */}
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
