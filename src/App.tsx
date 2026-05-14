import AudienceCards from "./components/AudienceCards";
import Benefits from "./components/Benefits";
import ClientArchitecture from "./components/ClientArchitecture";
import CTA from "./components/CTA";
import DemoSection from "./components/DemoSection";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <AudienceCards />
        <HowItWorks />
        <ClientArchitecture />
        <DemoSection />
        <Benefits />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
