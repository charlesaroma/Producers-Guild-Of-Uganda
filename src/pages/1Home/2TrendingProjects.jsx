import React from 'react';
import SectionTitle from '../../components/shared/SectionTitle';

const TrendingProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      image: "/path-to-image.jpg",
      link: "#",
      category: "Feature Film"
    },
    // Add more projects as needed
  ];

  return (
    <section className="py-20 bg-[var(--gray-light)]">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Trending Latest Projects"
          subtitle="Discover the latest works from our talented PGU members"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6">
                  <span className="text-sm text-white/80">{project.category}</span>
                  <h3 className="text-xl font-bold text-white mt-2">{project.title}</h3>
                  <a
                    href={project.link}
                    className="inline-block mt-4 text-white hover:text-[var(--accent)] transition-colors"
                  >
                    Watch Now →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProjects; 