// src/components/CategoriesSection.jsx
import React from 'react';

const CategoriesSection = () => {
  const categories = [
    { name: 'Shoulder Bag', image: '/public/images/sholder bug.jpg' },
    { name: 'Wallet', image: '/public/images/wallet-man.jpg' },
    { name: 'Sling Bag', image: '/public/images/sling women.jpg' },
    { name: 'Leather Bag', image: '/public/images/laptop bug.jpg' },
    { name: 'Sunglasses', image: '/public/images/sunglass.jpg' },
    { name: 'Footwear', image: '/public/images/footwear.jpg' },
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-8">Looking For Something Specific? Shop Categories</h2>
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <img src={category.image} alt={category.name} className="w-full h-auto object-cover rounded-lg mb-2" />
            <p className="font-semibold">{category.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;