import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';
import Card from '../../components/shared/Card';

const MemberBenefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Producers Mark (p.g.u.)",
      description: "Professional designation for qualified full members",
      icon: "✨"
    },
    {
      id: 2,
      title: "Voting Rights",
      description: "For members in good standing at General Assembly meetings",
      icon: "🗳️"
    },
    {
      id: 3,
      title: "Office Eligibility",
      description: "For full members in good standing to hold office",
      icon: "👥"
    },
    {
      id: 4,
      title: "Events & Programs",
      description: "Access to exclusive workshops, networking events, and resources",
      icon: "🎪"
    }
  ];

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Member Benefits"
          subtitle="Exclusive advantages of PGU membership"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit) => (
            <Card key={benefit.id} className="text-center backdrop-blur-lg bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.5)] transition-all duration-300">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemberBenefits; 