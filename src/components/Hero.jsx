import React from 'react';
import { Github, Linkedin, Mail, PenTool } from 'lucide-react';

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Glass card container */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 md:p-12 shadow-2xl hover:bg-white/10 transition-all duration-500">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-pulse">
              Hi, I'm Sasank Karki
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mb-8">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              I create beautiful, responsive web applications with modern technologies. 
              Passionate about clean code, user experience, and bringing ideas to life.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/slyvshas" 
              className="p-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="www.linkedin.com/in/sasankkarki" 
              className="p-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:sasankkarkii@gmail.com" 
              className="p-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://www.threads.com/@sasank.tech" 
              className="p-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
              </svg>
            </a>
            <a 
              href="https://sasankdev.tech/" 
              className="p-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <PenTool size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-500/80 to-purple-500/80 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg backdrop-blur-xl"
            >
              View My Work
            </button>
            <button 
              onClick={handleDownload}
              className="px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400/30 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-20 w-6 h-6 bg-purple-400/30 rounded-full animate-ping delay-1000"></div>
      <div className="absolute bottom-1/4 right-10 w-3 h-3 bg-pink-400/30 rounded-full animate-ping delay-2000"></div>
    </section>
  );
};

export default Hero;