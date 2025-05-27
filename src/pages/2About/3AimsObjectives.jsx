import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';
import Button from '../../components/shared/Button';

const AimsObjectives = () => {
  const objectives = [
    "Global and National Competitiveness",
    "Capacity Building and Training",
    "Producers Mark (p.g.u.)",
    "Industry Partnerships",
    "Advocacy",
    "Funding and Investment",
    "Digital and Emerging Markets",
    "International Representation"
  ];

  return (
    <section className="py-20 bg-[var(--gray-light)]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Aims and Objectives"
          subtitle="Our commitment to excellence"
        />
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {objectives.map((objective, index) => (
              <div 
                key={index}
                className="flex items-start space-x-4 p-4 backdrop-blur-lg bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.5)] transition-all duration-300 rounded-lg"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--accent)] text-white flex items-center justify-center">
                  {index + 1}
                </div>
                <p className="text-white">{objective}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              Wondering how to become a member? Click below for more details on the qualifications,
              application requirements and rates.
            </p>
            <Button variant="primary" to="/membership">
              Join PGU
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AimsObjectives; 