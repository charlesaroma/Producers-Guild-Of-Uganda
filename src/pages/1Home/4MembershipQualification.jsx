import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';
import Button from '../../components/shared/Button';

const MembershipQualification = () => {
  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Membership Qualifications"
          subtitle="Join PGU"
        />
        
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-[var(--text-primary)] mb-8">
            PGU membership is not automatic. The Producers Guild of Uganda offers several membership
            categories, designed to accommodate a wide range of professionals in the creative industries
            and promote inclusivity, collaboration, and professional development across different stages of a
            producer's career.
          </p>
          
          <p className="text-lg text-[var(--text-primary)] mb-8">
            Wondering how to become a member? Click below for more details on the qualifications,
            application requirements and rates.
          </p>
          
          <Button variant="primary" to="/membership">
            Join PGU
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MembershipQualification; 