// src/components/SocialSection.jsx
import React from 'react';

const SocialSection = () => {
  const socialImages = [
    '/public/images/face.png',
    '/public/images/linked.png',
    '/public/images/yuo.png',
    '/public/images/pin.png',
  ];

  return (
    <section className="py-12 bg-white">
      <h2 className="text-2xl font-bold text-center">Get to know us better</h2>
      <p className="text-center text-gray-600 mb-8">Follow us on Instagram @hidesignin. Be a part of our community of leather & sustainability enthusiasts.</p>
      <div className="container mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {socialImages.map((img, index) => (
          <img key={index} src={img} alt="Instagram Post" className="w-full h-auto object-cover" />
        ))}
      </div>
    </section>
  );
};

export default SocialSection;