// src/components/HeroSection.jsx
import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="relative h-[80vh] bg-cover bg-center" 
      style={{ backgroundImage: `url('/images/hero.jpg')` }} // Halkan waa wadada sawirka
    >
      <div className="absolute inset-0  bg-opacity-20 flex flex-col items-center justify-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold font-serif mb-4">END OF SEASON SALE</h2>
        <button className="border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors">Shop Now</button>
      </div>
    </section>
  );
};

export default HeroSection;