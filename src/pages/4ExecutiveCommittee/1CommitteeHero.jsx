import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';
import { Icon } from '@iconify/react';

const CommitteeHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--gray-light)] via-white to-[var(--gray-light)] opacity-90" />
      <div className="absolute inset-0 bg-[url('/src/assets/images/pattern.png')] opacity-5" />
      
      {/* Animated Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--accent)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-64 h-64 bg-[var(--primary)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-[var(--secondary)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6">
            <Icon icon="lucide:users" className="w-12 h-12 text-[var(--accent)]" />
          </div>
          <SectionTitle
            title="Executive Committee"
            subtitle="Leading the future of Ugandan media production"
          />
          <p className="text-lg text-gray-600 mt-8 leading-relaxed">
            The Executive Committee is the leadership body of the Producers Guild of Uganda, 
            responsible for the overall strategic direction and daily management of the Guild's affairs. 
            The Committee tenure is 3 years and may be re-elected for subsequent terms.
          </p>
          
          {/* Decorative Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] mx-auto mt-8 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default CommitteeHero; 