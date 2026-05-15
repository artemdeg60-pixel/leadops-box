import { useEffect } from "react";
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
import InlineCTA from "./components/InlineCTA";
import PilotRequirements from "./components/PilotRequirements";
import Pricing from "./components/Pricing";
import ReadyForDemo from "./components/ReadyForDemo";
import { inlineCtas } from "./data/siteData";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const { hash } = window.location;

    if (!hash) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ block: "start" });
    });
  }, []);

  return (
    <div className="app-shell">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AudienceCards />
        <InlineCTA {...inlineCtas.audience} />
        <HowItWorks />
        <ClientArchitecture />
        <ReadyForDemo />
        <DemoSection />
        <Benefits />
        <PilotRequirements />
        <Pricing />
        <InlineCTA {...inlineCtas.pricing} />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
