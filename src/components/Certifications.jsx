import React, { useState, useEffect } from 'react';
import { Award, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

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
      image: "/certifications/ds.png",
      category: "Data Science"
    },
    {
      title: "Machine Learning for All",
      issuer: "University of London",
      date: "2025",
      credentialId: "DEF456UVW",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/mlforall.png",
      category: "Machine Learning"
    },
    {
      title: "HTML and CSS in depth",
      issuer: "Meta",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/htmlcssdepth.png",
      category: "Web Development"
    },
    {
      title: "Programming with JavaScript",
      issuer: "Meta",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/metajs.png",
      category: "Programming"
    },
    {
      title: "Version Control",
      issuer: "Meta",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/vc.png",
      category: "DevOps"
    },
    {
      title: "Front-End Development",
      issuer: "Meta",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/fe.png",
      category: "Frontend"
    },
    {
      title: "AI for Everyone",
      issuer: "DeepLearning.AI",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/dl.png",
      category: "Artificial Intelligence"
    },
    {
      title: "Exploratory Data Analysis for Machine Learning",
      issuer: "IBM",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/ex.png",
      category: "Data Analysis"
    },
    {
      title: "Google Cybersecurity",
      issuer: "Google",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/gc.png",
      category: "Cybersecurity"
    },
    {
      title: "Programming for Everybody",
      issuer: "University of Michigan",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/p1.png",
      category: "Programming"
    },
    {
      title: "Python Data Structures",
      issuer: "University of Michigan",
      date: "2025",
      link: "https://coursera.org/verify/1R317JTCDFTV",
      description: "Proven ability to build scalable and reliable applications using Google Cloud technologies.",
      image: "/certifications/p2.png",
      category: "Python"
    }
  ];

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((newIndex + certifications.length) % certifications.length);
    setTimeout(() => setIsAnimating(false), 600);
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
    <section id="certifications" className="py-32 relative bg-black text-white overflow-hidden min-h-screen">
      {/* Enhanced noisy texture overlay - Primary layer */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='white'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Additional coarse grain layer */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='4' seed='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' fill='white'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Fine detail noise layer */}
      <div 
        className="absolute inset-0 opacity-[0.06] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='fineNoise'%3E%3CfeTurbulence type='turbulence' baseFrequency='2.5' numOctaves='3' seed='10' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23fineNoise)' fill='white'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ultra-fine paper texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paperTexture'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3.2' numOctaves='2' seed='15' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paperTexture)' fill='white'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Section badge 
          <div className="inline-block bg-black/60 backdrop-blur-sm text-white text-xs font-bold tracking-[0.2em] uppercase py-3 px-6 rounded-full border border-white/20 mb-12 transition-all duration-300 hover:scale-105 hover:bg-black/80"
               style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
            ACHIEVEMENTS
          </div>*/}

          {/* Main title with gradient */}
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.8] tracking-[-0.02em] mb-8 bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent">
            Certifications
          </h2>

          {/* Section divider */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/20"></div>
            <div className="w-2 h-2 bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/20"></div>
          </div>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto tracking-wide">
            Professional certifications that validate my expertise and commitment to continuous learning in technology and innovation
          </p>
        </div>

        {/* Main Carousel Container */}
        <div className="relative h-[650px] max-w-[1400px] mx-auto mb-16">
          
          {/* Navigation Arrows */}
          <button 
            onClick={() => updateCarousel(currentIndex - 1)}
            className="group absolute top-1/2 -translate-y-1/2 left-4 z-30 p-4 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/20 hover:border-[#D1B2FF]/50 text-white/80 hover:text-white rounded-2xl transition-all duration-300 hover:scale-110 hover:from-white/[0.12] hover:to-white/[0.04]"
            disabled={isAnimating}
          >
            <ChevronLeft size={24} className="group-hover:text-[#D1B2FF] transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#D1B2FF]/5 to-[#FFFFB2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </button>

          <button 
            onClick={() => updateCarousel(currentIndex + 1)}
            className="group absolute top-1/2 -translate-y-1/2 right-4 z-30 p-4 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/20 hover:border-[#D1B2FF]/50 text-white/80 hover:text-white rounded-2xl transition-all duration-300 hover:scale-110 hover:from-white/[0.12] hover:to-white/[0.04]"
            disabled={isAnimating}
          >
            <ChevronRight size={24} className="group-hover:text-[#D1B2FF] transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#D1B2FF]/5 to-[#FFFFB2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
          </button>

          {/* Carousel Track */}
          <div className="relative h-full flex justify-center items-center">
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
                  className={`group absolute w-[420px] h-[520px] transition-all duration-600 ease-in-out cursor-pointer
                    ${position === 'center' ? 'z-20 scale-110' : ''}
                    ${position === 'left-1' ? 'z-10 -translate-x-[300px] scale-95 opacity-80' : ''}
                    ${position === 'left-2' ? 'z-5 -translate-x-[580px] scale-85 opacity-60' : ''}
                    ${position === 'right-1' ? 'z-10 translate-x-[300px] scale-95 opacity-80' : ''}
                    ${position === 'right-2' ? 'z-5 translate-x-[580px] scale-85 opacity-60' : ''}
                    ${position === 'hidden' ? 'opacity-0 pointer-events-none scale-75' : ''}
                  `}
                  onClick={() => position !== 'center' && updateCarousel(index)}
                >
                  {/* Card with enhanced glassmorphic effect */}
                  <div className="relative w-full h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden shadow-2xl hover:border-white/30 hover:from-white/[0.12] hover:to-white/[0.04] transition-all duration-500">

                    {/* Image Section */}
                    <div className="relative h-[240px] overflow-hidden rounded-t-3xl">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6 px-4 py-2 bg-gradient-to-r from-[#D1B2FF]/20 to-[#FFFFB2]/20 backdrop-blur-sm border border-[#D1B2FF]/30 rounded-xl text-[#D1B2FF] text-sm font-medium shadow-lg">
                        {cert.category}
                      </div>

                      {/* Certificate number indicator */}
                      <div className="absolute top-6 right-6 text-white/60 text-xs font-mono tracking-wider bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative p-6 flex flex-col h-[280px]">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-white text-xl font-bold mb-2 group-hover:bg-gradient-to-b group-hover:from-[#D1B2FF] group-hover:to-[#FFFFB2] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight">
                            {cert.title}
                          </h3>
                          <p className="text-[#FFFFB2] text-lg font-medium mb-1">
                            {cert.issuer}
                          </p>
                          <span className="text-white/60 text-sm bg-white/10 px-3 py-1 rounded-full">
                            {cert.date}
                          </span>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300 flex-1">
                        {cert.description}
                      </p>

                      {/* Action Button - Always visible but styled differently for non-center cards */}
                      <div className="mt-auto">
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg overflow-hidden font-medium text-sm ${
                            position === 'center' 
                              ? 'bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] text-black' 
                              : 'bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-white hover:from-[#D1B2FF]/20 hover:to-[#FFFFB2]/20 hover:border-[#D1B2FF]/40'
                          }`}
                        >
                          <span className="relative z-10">View Certificate</span>
                          <ExternalLink size={16} className="relative z-10" />
                          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                        </a>
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] via-white/[0.02] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Current Certificate Info */}
        <div className="text-center mb-12 transition-all duration-500">
          <div className="inline-block p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent">
              {certifications[currentIndex].title}
            </h3>
            <p className="text-[#FFFFB2] text-xl font-medium mb-2">
              {certifications[currentIndex].issuer}
            </p>
            <p className="text-white/60 text-lg">
              Earned in {certifications[currentIndex].date}
            </p>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-4 mb-20">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => updateCarousel(index)}
              className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] scale-125 shadow-lg shadow-[#D1B2FF]/50' 
                  : 'bg-white/20 hover:bg-white/40 hover:scale-110'
              }`}
            />
          ))}
        </div>

     
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-[#D1B2FF]/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-[#FFFFB2]/20 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-1/4 right-10 w-4 h-4 bg-[#D1B2FF]/15 rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-[#FFFFB2]/15 rounded-full animate-pulse delay-3000"></div>
    </section>
  );
};

export default Certifications;