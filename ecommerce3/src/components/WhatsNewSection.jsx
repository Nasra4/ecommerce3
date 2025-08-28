// src/components/WhatsNewSection.jsx
import React from 'react';

const WhatsNewSection = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-8">What's New</h2>
      <div 
        className="relative mx-auto w-full max-w-screen-lg object-bottom h-96 bg-cover bg-center" 
        style={{ backgroundImage: `url('/public/images/sling women.jpg')` }} // Halkan waa wadada sawirka
      >
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold bg-opacity-30">
            <p>WHAT'S NEW</p>
          {/* Haddii aad rabto text dusha sawirka ah, halkan ku dar */}
        </div>
      </div>
    </section>
  );
};

export default WhatsNewSection;