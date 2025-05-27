import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Icon } from "@iconify/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);
  const filmStripLeftRef = useRef(null);
  const filmStripRightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Overlay animation for a more dramatic entrance
      gsap.from(overlayRef.current, {
        opacity: 0,
        duration: 1.8, // Slightly longer duration
        ease: "power2.out",
      });

      // Text reveal animation with longer duration
      gsap.from(textRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power4.out",
        delay: 0.8, // Slight delay after overlay
      });

      // Floating animation for the film strips (more pronounced)
      gsap.to(filmStripLeftRef.current, {
        y: "40px", // Increased floating distance
        x: "20px", // Added horizontal subtle movement
        rotation: 5, // Slight rotation for more organic feel
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut", // Smoother ease
      });

      gsap.to(filmStripRightRef.current, {
        y: "-40px", // Opposite floating direction
        x: "-20px",
        rotation: -5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5, // Staggered start
      });

      // Optional: Add a subtle glow/pulse to the accent text
      gsap.to(".cinematic-future-text", {
        filter: "drop-shadow(0 0 8px rgba(37, 99, 235, 0.7))", // Matches --accent color
        yoyo: true,
        repeat: -1,
        duration: 2,
        ease: "power1.inOut",
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative lg:pt-10 min-h-screen overflow-hidden text-white flex items-center justify-center text-center"
    >
      {/* Video Background - More intense and direct */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale brightness-75 contrast-125" // Subtle filters for cinematic look
        >
          {/* Using a film production-related video for more relevance */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-film-camera-zooming-on-a-studio-stage-2268-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay - Darker and more impactful */}
      <div
        ref={overlayRef}
        className="absolute inset-0 z-10 bg-[var(--background)]"
      />

      {/* Film Strip Decoration (More prominent and animated) */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none"> {/* pointer-events-none ensures content below is clickable */}
        <div ref={filmStripLeftRef} className="film-strip absolute top-[15%] left-[-5%] w-48 h-48 opacity-15 rotate-12"> {/* Larger, more offset */}
          <img src="/film-strip.png" alt="Film Strip" className="w-full h-full object-contain" />
        </div>
        <div ref={filmStripRightRef} className="film-strip absolute bottom-[10%] right-[-5%] w-48 h-48 opacity-15 -rotate-12"> {/* Larger, more offset, opposite rotation */}
          <img src="/film-strip.png" alt="Film Strip" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16 flex items-center justify-center h-full"> {/* Adjust padding/height for centering */}
        <div className="max-w-4xl">
          <div ref={textRef} className="space-y-8">
            {/* Tagline/Industry Context */}
            <div className="inline-block px-5 py-2 rounded-full border border-[var(--accent)] text-[var(--accent)] text-sm font-medium uppercase tracking-wider bg-black/30 backdrop-blur-sm">
              <Icon icon="ph:sparkle-fill" className="inline-block mr-2 w-4 h-4" />
              Vision Beyond the Lens
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
              Crafting Uganda's
              <span className="block cinematic-future-text text-[var(--accent)]">Cinematic Future</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto drop-shadow-md">
              Empowering producers to shape the future of film, television, and
              digital media in Uganda through collaboration, innovation, and
              excellence.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-4"> {/* Centered buttons */}
              <Link
                to="/about"
                className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-semibold text-black transition-all duration-300 ease-out rounded-full shadow-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] transform hover:-translate-y-1 hover:scale-105"
              >
                <span className="flex items-center">
                  Explore Our Story
                  <Icon
                    icon="lucide:arrow-right"
                    className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                to="/membership"
                className="inline-flex items-center px-8 py-3 font-semibold text-white border border-[var(--accent)] rounded-full hover:bg-[var(--accent)] hover:text-black transition-all transform hover:-translate-y-1 hover:scale-105"
              >
                <Icon icon="lucide:users" className="w-5 h-5 mr-2" />
                Join the Guild
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <Icon
          icon="lucide:chevron-down"
          className="w-7 h-7 text-[var(--accent)] animate-bounce"
        />
      </div>
    </div>
  );
};

export default Hero;