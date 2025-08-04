import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sasankkarkii@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black text-white overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        
        

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm p-8 transition-all duration-500 hover:border-white/20 hover:from-white/[0.12] hover:to-white/[0.04] shadow-xl">
            <h3 className="text-3xl md:text-4xl font-black leading-tight tracking-[-0.02em] mb-6 bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 group-hover:text-gray-200 transition-colors duration-300">
              Full Stack Developer passionate about creating beautiful, 
              functional web applications that make a difference.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="group/social relative p-4 bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-sm rounded-2xl text-white/70 hover:text-white transition-all duration-300 hover:scale-110 hover:border-white/20 hover:from-white/[0.10] hover:to-white/[0.04] shadow-lg"
                >
                  <link.icon size={20} />
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D1B2FF]/30 to-[#FFFFB2]/30 rounded-2xl blur-lg opacity-0 group-hover/social:opacity-100 transition-opacity duration-500"></div>
                </a>
              ))}
            </div>

            {/* Hover glow effect for brand card */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] via-white/[0.02] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
          </div>

          {/* Quick Links Section */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm p-8 transition-all duration-500 hover:border-white/20 hover:from-white/[0.12] hover:to-white/[0.04] shadow-xl">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-8 group-hover:bg-gradient-to-b group-hover:from-[#D1B2FF] group-hover:to-[#FFFFB2] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="group/link relative text-gray-300 hover:text-white text-lg transition-all duration-300 hover:translate-x-2 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-gradient-to-br from-[#D1B2FF] to-[#FFFFB2] rounded-full opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></span>
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Navigation number indicator */}
            <div className="absolute top-6 right-6 text-gray-600 text-xs font-mono tracking-wider">
              NAV
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] via-white/[0.02] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
          </div>

          {/* Contact Info Section */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm p-8 transition-all duration-500 hover:border-white/20 hover:from-white/[0.12] hover:to-white/[0.04] shadow-xl">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-8 group-hover:bg-gradient-to-b group-hover:from-[#D1B2FF] group-hover:to-[#FFFFB2] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              Get In Touch
            </h4>
            <div className="space-y-4 text-gray-300 text-lg group-hover:text-gray-200 transition-colors duration-300">
              <p className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-gradient-to-br from-[#D1B2FF] to-[#FFFFB2] rounded-full"></span>
                <span>Kathmandu, Nepal</span>
              </p>
              <p className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-gradient-to-br from-[#D1B2FF] to-[#FFFFB2] rounded-full"></span>
                <span>+977 9817925380</span>
              </p>
              <p className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-gradient-to-br from-[#D1B2FF] to-[#FFFFB2] rounded-full"></span>
                <span>sasankkarkii@gmail.com</span>
              </p>
            </div>
            
            {/* Availability Status */}
            <div className="mt-8 p-4 bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-sm rounded-2xl">
              <div className="flex items-center space-x-3 mb-2">
                <div className="relative">
                  <div className="w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute inset-0 bg-green-400/30 rounded-full blur-md animate-pulse"></div>
                </div>
                <span className="text-white font-medium">Available for work</span>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Open to freelance projects and full-time opportunities
              </p>
            </div>

            {/* Contact number indicator */}
            <div className="absolute top-6 right-6 text-gray-600 text-xs font-mono tracking-wider">
              INFO
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] via-white/[0.02] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm p-8 transition-all duration-500 hover:border-white/20 hover:from-white/[0.12] hover:to-white/[0.04] shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            {/* Copyright */}
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-gradient-to-br from-[#D1B2FF] to-[#FFFFB2] rounded-full"></div>
              <p className="text-gray-300 text-lg group-hover:text-gray-200 transition-colors duration-300">
                © 2025 Sasank Karki Portfolio. All rights reserved.
              </p>
            </div>
            
            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group/btn relative px-6 py-3 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] text-black font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden flex items-center space-x-2"
            >
              <span className="relative z-10">Back to Top</span>
              <ArrowUp size={20} className="relative z-10 group-hover/btn:translate-y-[-2px] transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Made with love indicator */}
          <div className="flex items-center justify-center space-x-2 mt-8 pt-6 border-t border-white/10">
            <span className="text-gray-400 text-sm">Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span className="text-gray-400 text-sm">by Sasank Karki</span>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] via-white/[0.02] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
        </div>

        {/* Final section divider */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <div className="w-20 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="text-gray-500 text-xs font-light tracking-widest uppercase">
            END
          </div>
          <div className="w-20 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent"></div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-10 w-3 h-3 bg-[#D1B2FF]/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-[#FFFFB2]/20 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-1/4 right-10 w-4 h-4 bg-[#D1B2FF]/15 rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-3/4 left-1/4 w-2 h-2 bg-[#FFFFB2]/15 rounded-full animate-pulse delay-3000"></div>
    </footer>
  );
};

export default Footer;