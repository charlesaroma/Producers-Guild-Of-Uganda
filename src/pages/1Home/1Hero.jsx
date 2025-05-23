import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for the overlay
      gsap.to(overlayRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Text reveal animation with longer duration
      gsap.from(textRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power4.out",
        delay: 0.5
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/videos/cinematic-bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Animated Overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 z-10 bg-gradient-to-b from-white/90 via-white/80 to-white/90"
      />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-screen flex items-center">
        <div className="max-w-4xl">
          <div
            ref={textRef}
            className="space-y-8"
          >
            <div className="flex items-center space-x-2">
              <Icon icon="lucide:film" className="w-8 h-8 text-[var(--accent)]" />
              <span className="text-[var(--accent)] font-medium">Producers Guild of Uganda</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Crafting Uganda's
              <span className="block text-[var(--accent)]">Cinematic Future</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Empowering producers to shape the future of film, television, and digital media in Uganda through collaboration, innovation, and excellence.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/about"
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 ease-out rounded-full shadow-md bg-[var(--accent)] hover:shadow-lg"
              >
                <span className="flex items-center">
                  Explore Our Story
                  <Icon icon="lucide:arrow-right" className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link 
                to="/membership"
                className="inline-flex items-center px-8 py-3 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              >
                <Icon icon="lucide:users" className="w-5 h-5 mr-2" />
                Join the Guild
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <Icon icon="lucide:chevron-down" className="w-6 h-6 text-gray-400 animate-bounce" />
      </div>
    </div>
  );
};

export default Hero;