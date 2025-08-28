// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import WhatsNewSection from '../components/WhatsNewSection';
import BestsellersSection from '../components/BestsellersSection';
import CategoriesSection from '../components/CategoriesSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhatsNewSection />
      <BestsellersSection />
      <CategoriesSection />
    </>
  );
};

export default HomePage;