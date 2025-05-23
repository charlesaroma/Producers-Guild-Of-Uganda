import React from 'react';
import MembershipHero from './1MembershipHero';
import MembershipClasses from './2MembershipClasses';
import MembershipFees from './3MembershipFees';
import MemberBenefits from './4MemberBenefits';

const Membership = () => {
  return (
    <main>
      <MembershipHero />
      <MembershipClasses />
      <MembershipFees />
      <MemberBenefits />
    </main>
  );
};

export default Membership; 