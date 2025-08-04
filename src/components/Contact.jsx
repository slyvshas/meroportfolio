import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      info: 'Kathmandu, Nepal'
    },
    {
      icon: Phone,
      title: 'Phone',
      info: '+977 9817925380'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'sasankkarkii@gmail.com'
    }
  ];

  return (
    <section id="contact" className="py-32 relative bg-black text-white overflow-hidden">
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
          {/* Section badge */}
          <div className="inline-block bg-black/60 backdrop-blur-sm text-white text-xs font-bold tracking-[0.2em] uppercase py-3 px-6 rounded-full border border-white/20 mb-12 transition-all duration-300 hover:scale-105 hover:bg-black/80"
               style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
            CONNECT
          </div>

          {/* Main title with gradient */}
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.8] tracking-[-0.02em] mb-8 bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent">
            Contact
          </h2>

          {/* Section divider */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/20"></div>
            <div className="w-2 h-2 bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/20"></div>
          </div>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto tracking-wide">
            I'm always open to discussing new opportunities and interesting projects. Let's create something amazing together!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm p-8 md:p-12 transition-all duration-500 hover:border-white/20 hover:from-white/[0.12] hover:to-white/[0.04] shadow-xl mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:bg-gradient-to-b group-hover:from-[#D1B2FF] group-hover:to-[#FFFFB2] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              Let's Connect
            </h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 group-hover:text-gray-200 transition-colors duration-300 max-w-3xl">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. I typically respond within 24 hours.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="group/item relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/10 backdrop-blur-sm p-6 transition-all duration-500 hover:border-white/20 hover:from-white/[0.10] hover:to-white/[0.04] hover:scale-[1.02]">
                  <div className="flex flex-col items-center text-center space-y-4">
                    {/* Icon with gradient background */}
                    <div className="relative">
                      <div className="p-4 bg-gradient-to-br from-[#D1B2FF] to-[#FFFFB2] rounded-2xl shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                        <item.icon size={24} className="text-black" />
                      </div>
                      {/* Icon glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D1B2FF]/30 to-[#FFFFB2]/30 rounded-2xl blur-lg opacity-0 group-hover/item:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 group-hover/item:text-gray-100 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-lg group-hover/item:text-gray-200 transition-colors duration-300">
                        {item.info}
                      </p>
                    </div>
                  </div>

                  {/* Contact item number indicator */}
                  <div className="absolute top-4 right-4 text-gray-600 text-xs font-mono tracking-wider">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] via-white/[0.02] to-white/[0.01] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
                </div>
              ))}
            </div>

            {/* Hover glow effect for main card */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] via-white/[0.02] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
          </div>

          {/* Availability Card */}
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm p-8 md:p-12 transition-all duration-500 hover:border-white/20 hover:from-white/[0.12] hover:to-white/[0.04] shadow-xl">
            <div className="flex items-start space-x-6">
              {/* Status Indicator */}
              <div className="relative mt-2">
                <div className="w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute inset-0 bg-green-400/30 rounded-full blur-md animate-pulse"></div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:bg-gradient-to-b group-hover:from-[#D1B2FF] group-hover:to-[#FFFFB2] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  Current Availability
                </h3>
                
                <div className="flex items-center space-x-3 mb-6">
                  <span className="text-white text-lg font-medium group-hover:text-gray-100 transition-colors duration-300">
                    Available for new projects
                  </span>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  I'm currently accepting new freelance projects and full-time opportunities. 
                  Let's discuss how we can work together!
                </p>

                {/* CTA Button */}
                <div className="mt-8">
                  <button className="group/btn relative px-8 py-4 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] text-black font-bold text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden">
                    <span className="relative z-10">Start a Conversation</span>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] via-white/[0.02] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
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

export default Contact;