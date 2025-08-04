import React from 'react';
import { Code, Palette, Rocket } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code with best practices and modern standards.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that provide exceptional user experiences.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Building fast, optimized applications that deliver smooth performance across all devices.'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          

          {/* Main title with gradient */}
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.8] tracking-[-0.02em] mb-8 bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent">
            About Me
          </h2>

          {/* Section divider */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/20"></div>
            <div className="w-2 h-2 bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/20"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm p-8 md:p-12 transition-all duration-500 hover:border-white/20 hover:from-white/[0.12] hover:to-white/[0.04]">
              
              {/* Content */}
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-[0.9] tracking-tight mb-8 bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent">
                Passionate Developer & Designer
              </h3>
              
              <div className="space-y-6 text-gray-100 text-lg md:text-xl lg:text-2xl font-normal leading-relaxed tracking-wide">
                <p>
                  I'm a BSc IT student with a keen interest in full-stack development, data science, and Artificial Intelligence.
                </p>
                <p>
                  My technical stack includes Python, React, HTML, CSS, and JavaScript — and I'm passionate about leveraging AI to solve problems, bring ideas to life, and make a measurable, positive impact. And, I love Films.
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-10">
                <button className="group relative px-10 py-4 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] text-black font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden">
                  <span className="relative z-10">Learn More</span>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] via-white/[0.02] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-sm p-8 transition-all duration-500 hover:border-white/20 hover:from-white/[0.10] hover:to-white/[0.04] hover:scale-[1.02] shadow-lg"
              >
                <div className="flex items-start space-x-6">
                  {/* Icon with gradient background */}
                  <div className="relative">
                    <div className="p-4 bg-gradient-to-br from-[#D1B2FF] to-[#FFFFB2] rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <feature.icon size={28} className="text-black" />
                    </div>
                    {/* Icon glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D1B2FF]/30 to-[#FFFFB2]/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Card number indicator */}
                <div className="absolute top-6 right-6 text-gray-600 text-xs font-mono tracking-wider">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] via-white/[0.02] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
              </div>
            ))}
          </div>
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

export default About;