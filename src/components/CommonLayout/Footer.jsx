import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Membership", href: "/membership" },
        { label: "Executive Committee", href: "/executive-committee" },
        { label: "Blogs & Events", href: "/blogs-events" }
      ]
    },
    {
      title: "Contact",
      links: [
        { label: "info@producersguilduganda.com", href: "mailto:info@producersguilduganda.com" },
        { label: "+256 XXX XXX XXX", href: "tel:+256XXXXXXXXX" },
        { label: "Kampala, Uganda", href: "#" }
      ]
    },
    {
      title: "Follow Us",
      links: [
        { label: "Twitter", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "LinkedIn", href: "#" }
      ]
    }
  ];

  return (
    <footer className="bg-[var(--primary)] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="/logo-white.png" 
              alt="PGU Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400">
              The National Producers Guild of Uganda - Empowering film, TV and digital media producers.
            </p>
          </div>
          
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Producers Guild Uganda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;