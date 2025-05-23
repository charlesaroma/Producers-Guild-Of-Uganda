import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';

const Mission = () => {
  const missions = [
    {
      id: 1,
      title: "Representation & Support",
      description: "To represent, support, and advocate for Ugandan producers across various media formats."
    },
    {
      id: 2,
      title: "Sustainable Economy",
      description: "To promote a sustainable creative economy."
    },
    {
      id: 3,
      title: "Professional Development",
      description: "To emphasize professional development."
    },
    {
      id: 4,
      title: "Talent Development",
      description: "To create an environment where local talent can thrive, enhance cultural representation, and bring economic benefits."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Mission"
          subtitle="Building a stronger future for Ugandan media production"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {missions.map((mission) => (
            <div 
              key={mission.id}
              className="p-8 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4">{mission.title}</h3>
              <p className="text-gray-600">{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission; 