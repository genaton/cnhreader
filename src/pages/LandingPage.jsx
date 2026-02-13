import Header from "../components/Header";
import Hero from "../components/Hero";
import BottomCTA from "../components/BottomCTA";
import "../styles/landing.css";

export default function LandingPage() {
  return (
    <div className="layout">
      <Header />
      <Hero />
      <BottomCTA />
    </div>
  );
}