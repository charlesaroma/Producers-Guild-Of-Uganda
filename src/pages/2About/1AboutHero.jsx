import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';

const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-[var(--gray-light)] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            title="For the Producers of film, TV and Emerging Media in Uganda"
            subtitle="Empowering the future of Ugandan media production"
          />
          <div className="mt-12">
            <img
              src="/path-to-pgu-gathering.jpg"
              alt="PGU Film Industry Gathering"
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero; 