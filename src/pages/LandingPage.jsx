import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import BottomCTA from "../components/BottomCTA.jsx";
import UploadCnhModal from "../components/UploadCnhModal";
import { useState } from "react";
import "../styles/landing.css";

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Header />
      <Hero />
      <BottomCTA onOpenModal={() => setModalOpen(true)} />
      <UploadCnhModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
