// src/components/BestsellersSection.jsx
import React from 'react';

const BestsellersSection = () => {
  const products = [
    { name: 'HIP STYLING BAG', price: '₹12,995.00', image: '/public/images/sling bug.jpg' },
    { name: 'HIDESIGN LIFESTYLE BAG', price: '₹14,995.00', image: '/public/images/duffle bug.jpg' },
    { name: '333-LGS-01 POLO WALLET', price: '₹2,995.00', image: '/public/images/wallet.jpg' },
    { name: 'LOTA V-FOLD WALLET', price: '₹2,795.00', image: '/public/images/bi-fold.jpg' },
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Bestsellers</h2>
      <div className="container mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="relative bg-white shadow-md rounded-lg overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestsellersSection;