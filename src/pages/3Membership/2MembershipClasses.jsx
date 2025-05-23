import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';

const MembershipClasses = () => {
  const membershipTypes = [
    {
      id: 1,
      title: "Individual Membership",
      description: "Open to individuals with a minimum of 3 qualifying producing credits in specified formats",
      requirements: [
        "Feature Length",
        "Short Films",
        "Series",
        "Documentaries",
        "Commercials"
      ],
      icon: "👤"
    },
    {
      id: 2,
      title: "Honorary Members",
      description: "Awarded for significant contributions to the industry",
      features: [
        "No voting rights",
        "May advise and participate",
        "Recognition of achievements"
      ],
      icon: "🏆"
    },
    {
      id: 3,
      title: "Corporate Members",
      description: "Available to companies involved in media production, distribution, or related services",
      features: [
        "Company representation",
        "Business networking",
        "Industry recognition"
      ],
      icon: "🏢"
    }
  ];

  return (
    <section id="membership-classes" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Membership Categories"
          subtitle="Choose the membership that best fits your needs"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {membershipTypes.map((type) => (
            <Card key={type.id} className="flex flex-col">
              <div className="text-4xl mb-4">{type.icon}</div>
              <h3 className="text-xl font-bold mb-4">{type.title}</h3>
              <p className="text-gray-600 mb-6">{type.description}</p>
              <ul className="space-y-2 mb-6">
                {(type.requirements || type.features).map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 mr-2 text-[var(--accent)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <Button variant="outline" to="/membership/apply" className="w-full">
                  Apply Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembershipClasses; 