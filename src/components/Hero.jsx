import React from 'react';
import { Github, Linkedin, Mail, PenTool, Twitter, Instagram } from 'lucide-react';

const Hero = () => {
  const handleDownload = () => {
    // Replace 'resume.pdf' with your actual resume file name
    const resumeUrl = '/resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'SasankKarki_Resume.pdf'; // Replace with your name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          {/* Status badge */}
          <div className="inline-block bg-black/60 backdrop-blur-sm text-white text-xs font-bold tracking-[0.2em] uppercase py-3 px-6 rounded-full border border-white/20 mb-12 transition-all duration-300 hover:scale-105 hover:bg-black/80"
               style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
            FULL STACK DEVELOPER
          </div>

          {/* Main hero content */}
          <div className="mb-16">
            {/* Main title with gradient */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-[0.8] tracking-[-0.02em] mb-8 bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent">
              Hi, I'm
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black leading-[0.8] tracking-[-0.02em] mb-12 bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent">
              Sasank Karki
            </h1>
            
            {/* Subtitle */}
            <p className="text-gray-100 text-xl md:text-2xl lg:text-3xl font-normal max-w-4xl mx-auto leading-relaxed mb-12 tracking-wide">
              I create beautiful, responsive web applications with modern technologies. 
              Passionate about clean code, user experience, and bringing ideas to life.
            </p>
          </div>

          {/* Social Links with enhanced styling */}
          <div className="flex justify-center flex-wrap gap-4 md:gap-6 mb-16">
            <a
              href="https://github.com/slyvshas"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:border-[#D1B2FF]/50 shadow-lg"
            >
              <Github size={24} className="group-hover:text-[#D1B2FF] transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/sasank-karki"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:border-[#D1B2FF]/50 shadow-lg"
            >
              <Linkedin size={24} className="group-hover:text-[#D1B2FF] transition-colors duration-300" />
            </a>
            <a
              href="https://twitter.com/sasankkarki"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:border-[#D1B2FF]/50 shadow-lg"
            >
              <Twitter size={24} className="group-hover:text-[#D1B2FF] transition-colors duration-300" />
            </a>
            <a
              href="https://instagram.com/sasankkarki"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:border-[#D1B2FF]/50 shadow-lg"
            >
              <Instagram size={24} className="group-hover:text-[#D1B2FF] transition-colors duration-300" />
            </a>
            <a
              href="https://threads.net/@sasankkarki"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:border-[#D1B2FF]/50 shadow-lg"
            >
              <svg className="w-6 h-6 group-hover:text-[#D1B2FF] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12.006c.027 3.075.718 5.48 2.057 7.138 1.435 1.776 3.631 2.686 6.523 2.707 5.445-.016 7.691-2.61 8.818-6.078l2.056.403c-.861 3.649-2.573 6.306-5.09 7.898C16.379 24.018 14.317 24 12.186 24z"/>
                <path d="M8.681 18.379c-1.314-1.612-1.988-3.946-2.007-6.936.019-2.998.693-5.33 2.007-6.937 1.393-1.705 3.4-2.567 5.963-2.567s4.57.862 5.963 2.567c1.314 1.607 1.988 3.939 2.007 6.937-.019 2.99-.693 5.324-2.007 6.936-1.393 1.705-3.4 2.567-5.963 2.567s-4.57-.862-5.963-2.567z"/>
              </svg>
            </a>
            <a 
              href="https://sasankdev.tech/" 
              className="group p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 hover:border-[#D1B2FF]/50 shadow-lg"
            >
              <PenTool size={28} className="group-hover:text-[#D1B2FF] transition-colors duration-300" />
            </a>
          </div>

          {/* CTA Buttons with terminal-inspired design */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-10 py-4 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] text-black font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={handleDownload}
              className="group px-10 py-4 bg-black/60 backdrop-blur-sm border-2 border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-black/80 hover:border-[#D1B2FF]/50 transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
            >
              <span className="group-hover:text-[#D1B2FF] transition-colors duration-300">Download CV</span>
            </button>
          </div>
        </div>

      {/* Floating particles with gradient colors */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-[#D1B2FF]/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-4 h-4 bg-[#FFFFB2]/30 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-[#D1B2FF]/30 rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-[#FFFFB2]/20 rounded-full animate-pulse delay-3000"></div>
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-[#D1B2FF]/20 rounded-full animate-pulse delay-1500"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="text-gray-500 text-xs font-light tracking-widest uppercase mb-3">
          SCROLL
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent animate-pulse"></div>
        <div className="w-2 h-2 bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] rounded-full animate-bounce delay-300"></div>
      </div>
    </section>
  );
};

export default Hero;