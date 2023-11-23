import React from 'react';
import Navbar from '../Navbar/Navbar';
import CaptionCarousel from '../Carousel/CaptionCarousel'; // Asumiendo que el componente se llama CaptionCarousel
import Footer from '../Footer/Footer';

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <CaptionCarousel />
      <Footer />
    </div>
  );
}
