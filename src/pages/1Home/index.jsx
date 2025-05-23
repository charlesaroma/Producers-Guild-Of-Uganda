import React from 'react';
import Hero from './1Hero';
import TrendingProjects from './2TrendingProjects';
import MemberPrograms from './3MemberPrograms';
import MembershipQualification from './4MembershipQualification';

const Home = () => {
  return (
    <main>
      <Hero />
      <TrendingProjects />
      <MemberPrograms />
      <MembershipQualification />
    </main>
  );
};

export default Home; 