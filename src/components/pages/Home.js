import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Company_Footer from '../elysian_softech_footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
      <Company_Footer />

    </>
  );
}

export default Home;