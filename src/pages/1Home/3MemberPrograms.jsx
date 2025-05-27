import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';
import Button from '../../components/shared/Button';

const MemberPrograms = () => {
  const programs = [
    {
      id: 1,
      title: "Workshops",
      description: "Regular workshops led by industry experts",
      icon: "🎬"
    },
    {
      id: 2,
      title: "Mentorships",
      description: "One-on-one guidance from experienced producers",
      icon: "👥"
    },
    {
      id: 3,
      title: "Masterclasses",
      description: "In-depth learning sessions on specific topics",
      icon: "📚"
    },
    {
      id: 4,
      title: "Events",
      description: "Networking and industry events",
      icon: "🎪"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[var(--background)] to-[var(--gray-light)]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Member Exclusive Programs"
          subtitle="A diverse inclusive skilled producer community"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {programs.map((program) => (
            <div 
              key={program.id}
              className="p-6 rounded-lg backdrop-blur-lg bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.5)] transition-all duration-300"
            >
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{program.title}</h3>
              <p className="text-white/80">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            PGU Members benefit from being part of a professional producing community with easy access
            to member-only Workshops, Mentorships, Masterclasses, Events, Funding, Employment and
            Distribution Opportunities for producers at all stages.
          </p>
          <Button variant="primary" to="/membership">
            Become a Member
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MemberPrograms; 