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
      description: 'A fully functional job board platform built with React (Vite) and Supabase. It allows users to register, log in,and apply for jobs.',
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
    },
    
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-white/70 text-lg mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.liveUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
                  >
                    <ExternalLink size={16} />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white/80 hover:bg-white/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 shadow-lg">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;