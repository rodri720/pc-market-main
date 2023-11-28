import React from 'react';
import Navbar from '../Navbar/Navbar';
import CaptionCarousel from '../Carousel/CaptionCarousel'; // Asumiendo que el componente se llama CaptionCarousel
import Footer from '../Footer/Footer';
import Inicio from '../Inicio/Inicio';
export default function LandingPage() {
  return (
    <div>
      <Inicio />
      <Navbar />
      <CaptionCarousel />
      <Footer />
    </div>
  );
}
