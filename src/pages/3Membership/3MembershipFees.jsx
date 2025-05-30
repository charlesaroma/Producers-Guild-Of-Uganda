import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';
import Card from '../../components/shared/Card';

const MembershipFees = () => {
  const feeStructure = [
    {
      id: 1,
      title: "Individual Membership",
      fees: [
        { label: "One-time access fee", amount: "Ushs. 50,000" },
        { label: "Annual subscription", amount: "Ushs. 50,000" }
      ],
      note: "Members accepted mid-year pay full annual fees"
    },
    {
      id: 2,
      title: "Corporate Membership",
      fees: [
        { label: "Initial annual subscription", amount: "Ushs. 500,000" }
      ],
      note: "Tiered options available for sponsorship"
    }
  ];

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Membership Fees"
          subtitle="Transparent and competitive pricing"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {feeStructure.map((structure) => (
            <Card key={structure.id} className="backdrop-blur-lg bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.5)] transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-white">{structure.title}</h3>
              <div className="space-y-4">
                {structure.fees.map((fee, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-white/80">{fee.label}</span>
                    <span className="font-semibold text-white">{fee.amount}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/60 mt-4">{structure.note}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            To apply for membership, please send a written letter or email to{' '}
            <a href="mailto:info@producersguilduganda.com" className="text-[var(--accent)] hover:underline">
              info@producersguilduganda.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MembershipFees; 