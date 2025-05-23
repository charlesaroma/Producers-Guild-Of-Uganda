import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Icon } from '@iconify/react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const slidesRef = useRef([]);
  const progressRef = useRef(null);
  const autoplayRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP timeline
    const tl = gsap.timeline({ paused: true });
    
    // Create slides
    slidesRef.current.forEach((slide, index) => {
      tl.to(slide, {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power3.out"
      }, index * 0.1);
    });

    // Start autoplay
    startAutoplay();

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    transitionToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    transitionToSlide(prevIndex);
  };

  const transitionToSlide = (newIndex) => {
    // Reset autoplay
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }

    // Animate current slide out
    gsap.to(slidesRef.current[currentIndex], {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      ease: "power2.inOut"
    });

    // Animate new slide in
    gsap.to(slidesRef.current[newIndex], {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.inOut"
    });

    // Update progress bar
    gsap.to(progressRef.current, {
      width: "0%",
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(progressRef.current, {
          width: "100%",
          duration: 4.5,
          ease: "none"
        });
      }
    });

    setCurrentIndex(newIndex);
    startAutoplay();
  };

  return (
    <div className="relative w-full h-full overflow-hidden" ref={sliderRef}>
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          ref={el => slidesRef.current[index] = el}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          {image.caption && (
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">{image.caption.title}</h3>
              <p className="text-lg opacity-90">{image.caption.description}</p>
            </div>
          )}
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
      >
        <Icon icon="lucide:chevron-left" className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors"
      >
        <Icon icon="lucide:chevron-right" className="w-6 h-6" />
      </button>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          ref={progressRef}
          className="h-full bg-[var(--accent)]"
          style={{ width: "100%" }}
        />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => transitionToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[var(--accent)]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider; 