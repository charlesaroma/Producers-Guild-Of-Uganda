import React from 'react';
import { Link } from 'react-router-dom';
import Globe from '../../components/animations/globe'

const Hero = () => {
  return (
    <div className="pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              About PGU
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-600">
              For the Producers of film, TV and Emerging Media in Uganda
            </h2>
            <p className="text-gray-600 text-lg">
              The National Producers Guild of Uganda (PGU) is a non-profit professional body that represents,
              advocates for, promote, protects and supports the rights, interests, and professional
              development of producers for film, television, and digital media in Uganda.
            </p>
            <Link 
              to="/about"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              Learn more about us
            </Link>
          </div>
          <div className="relative">
            <Globe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;