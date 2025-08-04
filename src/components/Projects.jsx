import React from 'react';
import baghchalImg from '../assets/baghchal.png';
import pikojobImg from '../assets/pikojob.png';
import twitterBotImg from '../assets/x.png';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Bagh Chal Game',
      description: 'Bagh-Chal (Nepali: "Tiger-Moves") is a traditional strategy board game from Nepal, played between two players.',
      image: baghchalImg,
      technologies: ['Html', 'Css', 'JavaScript'],
      liveUrl: 'https://slyvshas.github.io/lamo/htmlcode/baghchal.html',
      githubUrl: 'https://github.com/slyvshas/lamo/'
    },
    {
      title: 'Job Application WebApp',
      description: 'A fully functional job board platform built with React (Vite) and Supabase. It allows users to register, log in, and apply for jobs.',
      image: pikojobImg,
      technologies: ['React', 'JavaScript', 'Supabase', 'Vite'],
      liveUrl: 'https://pikojob.netlify.app/',
      githubUrl: 'https://github.com/slyvshas/pikojob'
    },
    {
      title: 'Twitter Bot',
      description: 'A Twitter bot that tweets coding related random quotes',
      image: twitterBotImg,
      technologies: ['n8n', 'Twitter API', 'Render', 'Llama'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
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
          {/* Section badge */}
          <div className="inline-block bg-black/60 backdrop-blur-sm text-white text-xs font-bold tracking-[0.2em] uppercase py-3 px-6 rounded-full border border-white/20 mb-12 transition-all duration-300 hover:scale-105 hover:bg-black/80"
               style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
            MY WORK
          </div>

          {/* Main title with gradient */}
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.8] tracking-[-0.02em] mb-8 bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent">
            Projects
          </h2>

          

          {/* Subtitle */}
          <p className="text-gray-300 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto tracking-wide">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:from-white/[0.12] hover:to-white/[0.04] hover:scale-[1.02] shadow-xl"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-3xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                {/* Project Links */}
                <div className="absolute top-6 right-6 flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <a 
                    href={project.liveUrl}
                    className="p-3 bg-gradient-to-br from-[#D1B2FF] to-[#FFFFB2] rounded-xl text-black hover:scale-110 transition-all duration-200 shadow-lg"
                  >
                    <ExternalLink size={18} />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-xl text-white hover:bg-white/30 hover:scale-110 transition-all duration-200 shadow-lg"
                  >
                    <Github size={18} />
                  </a>
                </div>

                {/* Project number indicator */}
                <div className="absolute top-6 left-6 text-white/60 text-xs font-mono tracking-wider bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:bg-gradient-to-b group-hover:from-[#D1B2FF] group-hover:to-[#FFFFB2] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm text-white/80 hover:bg-gradient-to-r hover:from-[#D1B2FF]/20 hover:to-[#FFFFB2]/20 hover:text-white transition-all duration-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] via-white/[0.02] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button className="group relative px-12 py-5 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] text-black font-bold text-xl rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl overflow-hidden">
            <span className="relative z-10">View All Projects</span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
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

export default Projects;