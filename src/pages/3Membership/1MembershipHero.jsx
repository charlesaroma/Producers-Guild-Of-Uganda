import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';
import Button from '../../components/shared/Button';

const MembershipHero = () => {
  return (
    <section className="pt-32 pb-20 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            title="Join the Producers Guild of Uganda"
            subtitle="Become part of Uganda's premier professional body for media producers"
          />
          <p className="text-lg text-[var(--text-primary)] mt-8">
            The Producers Guild of Uganda offers several membership categories, designed to accommodate 
            a wide range of professionals in the creative industries and promote inclusivity, collaboration, 
            and professional development across different stages of a producer's career.
          </p>
          <div className="mt-12">
            <Button variant="primary" to="#membership-classes">
              View Membership Options
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipHero; 