import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';
import Card from '../../components/shared/Card';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const CommitteeMembers = () => {
  const mainCommittee = [
    {
      id: 1,
      name: "Mathew Nabwiso",
      role: "President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Chief Executive Officer of the Guild, representing PGU in all official capacities."
    },
    {
      id: 2,
      name: "Nana Kagga",
      role: "1st Vice President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Assists the President in executing strategic initiatives and oversees key partnerships."
    },
    {
      id: 3,
      name: "Charles Luzinda",
      role: "2nd Vice President",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Supports the President and 1st Vice President, focusing on internal operations."
    },
    {
      id: 4,
      name: "Cleopatra Koheirwe",
      role: "Secretary General",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Oversees the administrative functions and maintains official records of the Guild."
    },
    {
      id: 5,
      name: "Richard Mulindwa",
      role: "Treasurer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Manages the financial affairs and ensures proper financial reporting."
    },
    {
      id: 6,
      name: "Vincent Odoi",
      role: "Legal Advisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Provides legal guidance and ensures compliance with regulations."
    },
    {
      id: 7,
      name: "Allan Manzi",
      role: "Public Relations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Manages external communications and public image of the Guild."
    },
    {
      id: 8,
      name: "Brenda Nanyonjo",
      role: "Membership Coordinator",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Oversees member relations and coordinates membership activities."
    },
    {
      id: 9,
      name: "Samuel Kizito",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Oversees technical aspects and production standards of the Guild."
    },
    {
      id: 10,
      name: "Humphrey Nabimanya",
      role: "Development Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Leads development initiatives and strategic growth of the Guild."
    },
    {
      id: 11,
      name: "Nathan Magoola",
      role: "Finance Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Manages financial strategies and investment opportunities."
    },
    {
      id: 12,
      name: "Ayeny T. Steven",
      role: "Projects Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Oversees project implementation and execution of Guild initiatives."
    }
  ];

  const directors = [
    {
      title: "Communications",
      icon: "lucide:megaphone",
      members: [
        {
          name: "Cleopatra Koheirwe",
          role: "Director",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Richard Mulindwa",
          role: "Officer",
          image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Vincent Odoi",
          role: "Officer",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      title: "Events & Coordinations",
      icon: "lucide:calendar",
      members: [
        {
          name: "Allan Manzi",
          role: "Director",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Brenda Nanyonjo",
          role: "Director",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      title: "Investment & Funding",
      icon: "lucide:trending-up",
      members: [
        {
          name: "Humphrey Nabimanya",
          role: "Director",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Nathan Magoola",
          role: "Director",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Ayeny T. Steven",
          role: "Director",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  ];

  const regions = [
    {
      title: "Northern Region",
      icon: "lucide:map-pin",
      members: ["Director Name"]
    },
    {
      title: "West Nile Region",
      icon: "lucide:map-pin",
      members: ["Director Name"]
    },
    {
      title: "Eastern Region",
      icon: "lucide:map-pin",
      members: ["Director Name"]
    },
    {
      title: "Western Region",
      icon: "lucide:map-pin",
      members: ["Director Name"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[var(--gray-light)]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Executive Committee"
          subtitle="Leading the future of Ugandan media production"
        />
        
        {/* Main Committee Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mainCommittee.map((member) => (
            <Card key={member.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative w-32 h-32 mx-auto mt-6 mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-full opacity-20 blur-sm transform group-hover:scale-110 transition-transform duration-300" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[var(--accent)]/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold group-hover:text-[var(--accent)] transition-colors">
                  <Link to={`/blogs-events/${member.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    {member.name}
                  </Link>
                </h3>
                <p className="text-sm text-[var(--accent)] mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Directors */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-center mb-8">Directors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {directors.map((director) => (
              <Card key={director.title} className="group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="p-1.5 bg-[var(--accent)]/10 rounded-lg">
                    <Icon icon={director.icon} className="text-[var(--accent)] w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-[var(--accent)] transition-colors">
                    {director.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {director.members.map((member, index) => (
                    <div key={index} className="group/item">
                      <div className="relative w-24 h-24 mx-auto mb-2">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] rounded-full opacity-20 blur-sm transform group-hover/item:scale-110 transition-transform duration-300" />
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[var(--accent)]/20">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover transform group-hover/item:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 rounded-full" />
                        </div>
                      </div>
                      <Link 
                        to={`/blogs-events/${member.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-center"
                      >
                        <span className="text-sm font-medium hover:text-[var(--accent)] transition-colors">
                          {member.name}
                        </span>
                        <p className="text-xs text-gray-600">{member.role}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Regional Directors */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-center mb-8">Regional Directors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {regions.map((region) => (
              <Card key={region.title} className="group hover:shadow-xl transition-all duration-300">
                <div className="flex items-center space-x-2 mb-3">
                  <div className="p-1.5 bg-[var(--accent)]/10 rounded-lg">
                    <Icon icon={region.icon} className="text-[var(--accent)] w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-[var(--accent)] transition-colors">
                    {region.title}
                  </h3>
                </div>
                <div className="space-y-1.5">
                  {region.members.map((member, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-600 hover:text-[var(--accent)] transition-colors">
                      <Icon icon="lucide:user" className="w-4 h-4" />
                      <span className="text-sm">{member}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitteeMembers; 