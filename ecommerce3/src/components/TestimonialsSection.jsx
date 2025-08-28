// src/components/TestimonialsSection.jsx
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    { text: 'Bag is great, would recommend everyone.', rating: 5, user: 'Arinana J.', product: 'AMETHYST JOY'  },
    { text: 'Feminine yet masculine styling and get those as your daily wear.', rating: 5, user: 'Sathiya J.', product: 'MAMMA MIYA HANDBAG' },
    { text: 'Perfect bag for office.', rating: 5, user: 'Pavan S.', product: 'LAVA VINTAGE HANDBAG' },
  ];

  return (
    <section className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-8">We Love Hearing From You</h2>
      <div className="container mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.185c.969 0 1.371 1.24.588 1.81l-3.395 2.464a1 1 0 00-.364 1.118l1.287 3.97c.3.921-.755 1.688-1.54 1.118l-3.395-2.464a1 1 0 00-1.176 0l-3.395 2.464c-.785.57-1.84-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.096 9.397c-.783-.57-.38-1.81.588-1.81h4.185a1 1 0 00.95-.69l1.286-3.97z" /></svg>
              ))}
            </div>
            <p className="italic text-gray-700 mb-4">"{testimonial.text}"</p>
            <p className="font-semibold">{testimonial.user}</p>
            {/* <img src={"/public/images/bug3.jng"} alt={testimonial.product} className="mt-4 w-1/2" /> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;