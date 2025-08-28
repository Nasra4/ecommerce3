// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center fixed w-full top-0 z-50">
      <div className="flex items-center space-x-6">
        <nav>
          <ul className="flex space-x-4 text-medium font-semibold text-gray-700">
            <li><Link to="/products" className="hover:text-gray-900">Wallets</Link></li>
            <li><Link to="/products" className="hover:text-gray-900">Men</Link></li>
            <li><Link to="/products" className="hover:text-gray-900">Women</Link></li>
            <li><Link to="/products" className="hover:text-gray-900">Travel</Link></li>
            <li><Link to="/products" className="hover:text-gray-900">Accessories</Link></li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 text-center">
        <h1 className='font-bold'>HIDESIGN</h1>
        {/* <Link to="/"><img src="https://via.placeholder.com/150x50" alt="Hidesign Logo" className="mx-auto" /></Link> */}
      </div>
      <div className="flex items-center space-x-4 text-medium text-gray-700">
        <Link to="/about" className="hover:text-gray-900">Collection</Link>
        <a href="#" className="hover:text-gray-900">Style</a>
        <div className="flex space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H2m2 8l-1-4h18" /></svg>
        </div>
      </div>
    </header>
  );
};

export default Header;