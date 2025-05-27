import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';
import { Icon } from '@iconify/react';

const TrendingProjects = () => {
  const projects = [
    {
      id: 1,
      title: "The Last King of Scotland",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
      category: "Feature Film",
      producer: "Mathew Nabwiso",
      year: "2024"
    },
    {
      id: 2,
      title: "Queen of Katwe",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
      category: "Feature Film",
      producer: "Nana Kagga",
      year: "2024"
    },
    {
      id: 3,
      title: "The Girl in the Yellow Jumper",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
      category: "Feature Film",
      producer: "Charles Luzinda",
      year: "2024"
    },
    {
      id: 4,
      title: "The Mercy of the Jungle",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      link: "#",
      category: "Feature Film",
      producer: "Cleopatra Koheirwe",
      year: "2024"
    }
  ];

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Trending Latest Projects"
          subtitle="Discover the latest works from our talented PGU members"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-sm text-[var(--accent)] font-medium">{project.category}</span>
                    <span className="text-sm text-white/60">•</span>
                    <span className="text-sm text-white/60">{project.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-white/80 mb-4">Producer: {project.producer}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-white hover:text-[var(--accent)] transition-colors"
                  >
                    Watch Now
                    <Icon icon="lucide:arrow-right" className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Explore more projects from our talented producers and discover the vibrant landscape of Ugandan cinema.
          </p>
          <a
            href="/projects"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors"
          >
            View All Projects
            <Icon icon="lucide:arrow-right" className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrendingProjects; 