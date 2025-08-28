// src/components/CoreValuesSection.jsx
import React from 'react';

const CoreValuesSection = () => {
  const values = [
    { title: 'HANDMADE FASHION', description: 'Our items are handcrafted using sustainable and organic materials.', image: '/public/images/savoir.jpg' },
    { title: 'SUSTAINABILITY', description: 'All of our products are made with natural, eco-friendly materials.', image: '/public/images/coffee.jpg' },
    { title: 'INNOVATION', description: 'We are constantly innovating and improving our designs to lead the market.', image: '/public/images/innovation.jpg' },
  ];

  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
      <div className="container mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div key={index} className="text-center">
            <img src={value.image} alt={value.title} className="w-full h-auto object-cover mb-4" />
            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValuesSection;