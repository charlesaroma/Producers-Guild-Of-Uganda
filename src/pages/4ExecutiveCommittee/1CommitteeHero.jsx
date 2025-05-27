import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';
import { Icon } from '@iconify/react';

const CommitteeHero = () => {
  return (
    <section className="relative lg:pt-40 pb-20 bg-[var(--background)]">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6">
            <Icon icon="lucide:users" className="w-12 h-12 text-[var(--accent)]" />
          </div>
          <SectionTitle
            title="Executive Committee"
            subtitle="Leading the future of Ugandan media production"
          />
          <p className="text-lg text-[var(--text-secondary)] mt-8 leading-relaxed">
            The Executive Committee is the leadership body of the Producers Guild of Uganda, 
            responsible for the overall strategic direction and daily management of the Guild's affairs. 
            The Committee tenure is 3 years and may be re-elected for subsequent terms.
          </p>
          {/* Subtle Accent Line */}
          <div className="w-24 h-1 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-hover)] mx-auto mt-8 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default CommitteeHero; 