import React, { useState, useEffect } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const certifications = [
    {
      title: "IBM Data Science",
      issuer: "IBM",
      date: "2024",
      credentialId: "ABC123XYZ",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/MSRG3LJNLSAR",
      description: "In this Professional Certificate, learners developed and honed hands-on skills in Data Science and Machine Learning.",
      image: "/certifications/ds.png"
    },
    {
      title: "Machine Learning for All",
      issuer: "University of London",
      date: "2025",
      credentialId: "DEF456UVW",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/mlforall.png"
    },
    
    {
      title: "HTML and CSS in depth",
      issuer: "Meta",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/htmlcssdepth.png"
    },
    {
      title: "Programming with JavaScript",
      issuer: "Meta",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/metajs.png"
    },
    {
      title: "Version Control",
      issuer: "Meta",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/vc.png"
    },
    {
      title: "Front-End Development",
      issuer: "Meta",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/fe.png"
    },
    
    {
      title: "AI for Everyone",
      issuer: "DeepLearning.AI",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/dl.png"
    },
    {
      title: "Exploratory Data Analysis for Machine Learning",
      issuer: "IBM",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/ex.png"
    },
    {
      title: "Google Cybersecurity",
      issuer: "Google",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/gc.png"
    },
    {
      title: "Programming for Everybody",
      issuer: "University of Michigan",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/p1.png"
    },
    {
      title: "Python Data Structures",
      issuer: "University of Michigan",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/p2.png"
    },
    // Add more certifications as needed
  ];

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((newIndex + certifications.length) % certifications.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      updateCarousel(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      updateCarousel(currentIndex + 1);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous learning.
          </p>
        </div>

        <div className="carousel-container relative h-[600px] max-w-[1200px] mx-auto">
          <button 
            onClick={() => updateCarousel(currentIndex - 1)}
            className="nav-arrow left absolute top-1/2 -translate-y-1/2 left-5 z-20 bg-blue-600/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-track relative h-full flex justify-center items-center">
            {certifications.map((cert, index) => {
              const offset = (index - currentIndex + certifications.length) % certifications.length;
              let position = '';
              
              if (offset === 0) position = 'center';
              else if (offset === 1) position = 'right-1';
              else if (offset === 2) position = 'right-2';
              else if (offset === certifications.length - 1) position = 'left-1';
              else if (offset === certifications.length - 2) position = 'left-2';
              else position = 'hidden';

              return (
                <div
                  key={index}
                  className={`card absolute w-[480px] h-[360px] bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl transition-all duration-800 cursor-pointer
                    ${position === 'center' ? 'z-10 scale-110' : ''}
                    ${position === 'left-1' ? 'z-5 -translate-x-[300px] scale-90 opacity-90' : ''}
                    ${position === 'left-2' ? 'z-1 -translate-x-[600px] scale-80 opacity-70' : ''}
                    ${position === 'right-1' ? 'z-5 translate-x-[300px] scale-90 opacity-90' : ''}
                    ${position === 'right-2' ? 'z-1 translate-x-[600px] scale-80 opacity-70' : ''}
                    ${position === 'hidden' ? 'opacity-0 pointer-events-none' : ''}
                  `}
                  onClick={() => updateCarousel(index)}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-all duration-800"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white text-xl font-bold">{cert.title}</h3>
                    <p className="text-white/80">{cert.issuer}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <button 
            onClick={() => updateCarousel(currentIndex + 1)}
            className="nav-arrow right absolute top-1/2 -translate-y-1/2 right-5 z-20 bg-blue-600/60 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="member-info text-center mt-10 transition-all duration-500">
          <h2 className="text-3xl font-bold text-white mb-2">
            {certifications[currentIndex].title}
          </h2>
          <p className="text-white/70 text-xl">
            {certifications[currentIndex].issuer}
          </p>
        </div>

        <div className="dots flex justify-center gap-3 mt-8">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => updateCarousel(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 