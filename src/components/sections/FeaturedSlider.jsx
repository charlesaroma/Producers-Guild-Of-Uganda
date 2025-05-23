import React from 'react';
import ImageSlider from '../animations/ImageSlider';

const FeaturedSlider = () => {
  const slides = [
    {
      url: "/images/slides/slide1.jpg",
      alt: "Film Production in Uganda",
      caption: {
        title: "Uganda's Film Industry",
        description: "Showcasing the vibrant and growing film production scene in Uganda"
      }
    },
    {
      url: "/images/slides/slide2.jpg",
      alt: "TV Production",
      caption: {
        title: "Television Excellence",
        description: "Leading the way in television production across East Africa"
      }
    },
    {
      url: "/images/slides/slide3.jpg",
      alt: "Digital Media",
      caption: {
        title: "Digital Innovation",
        description: "Pioneering digital media production in the region"
      }
    },
    {
      url: "/images/slides/slide4.jpg",
      alt: "Film Festival",
      caption: {
        title: "Film Festivals",
        description: "Celebrating Ugandan cinema at international festivals"
      }
    }
  ];

  return (
    <section className="relative h-[70vh] w-full">
      <ImageSlider images={slides} />
    </section>
  );
};

export default FeaturedSlider; 