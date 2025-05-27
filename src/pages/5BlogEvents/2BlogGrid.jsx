import React, { useState } from 'react';
import Card from '../../components/shared/Card';
import Button from '../../components/shared/Button';
import { Icon } from '@iconify/react';

const BlogGrid = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All', icon: 'lucide:layers' },
    { id: 'blog', label: 'Blog Posts', icon: 'lucide:file-text' },
    { id: 'events', label: 'Events', icon: 'lucide:calendar' }
  ];

  const posts = [
    {
      id: 1,
      title: "The Future of Ugandan Cinema",
      category: "Blog",
      date: "2024-03-20",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Exploring the emerging trends and opportunities in Uganda's film industry..."
    },
    {
      id: 2,
      title: "Digital Storytelling in Africa",
      category: "Blog",
      date: "2024-03-18",
      image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "How digital platforms are transforming African storytelling..."
    }
  ];

  const events = [
    {
      id: 1,
      title: "Film Production Workshop",
      category: "Event",
      date: "2024-04-15",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Join us for an intensive workshop on modern film production techniques..."
    },
    {
      id: 2,
      title: "Networking Mixer",
      category: "Event",
      date: "2024-04-20",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Connect with fellow producers and industry professionals..."
    }
  ];

  const filteredContent = activeTab === 'all' 
    ? [...posts, ...events]
    : activeTab === 'blog' 
      ? posts 
      : events;

  return (
    <section className="py-10 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-2 rounded-full transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[var(--accent)] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Icon icon={tab.icon} className="mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <Card key={item.id} className="flex flex-col group backdrop-blur-lg bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.5)] transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm text-[var(--accent)] font-medium">{item.category}</span>
                  <span className="text-sm text-white/60">•</span>
                  <span className="text-sm text-white/60">
                    {new Date(item.date).toLocaleDateString()}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[var(--accent)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/80 mb-4">{item.excerpt || item.description}</p>
                <Button 
                  variant="ghost" 
                  icon="lucide:arrow-right"
                  className="mt-auto"
                >
                  Read More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid; 