import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';

const BlogHero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-[var(--gray-light)] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            title="Blog & Events"
            subtitle="Stay updated with the latest news and events in the Ugandan film industry"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogHero; 