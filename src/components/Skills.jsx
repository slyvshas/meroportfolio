import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML/CSS', level: 98 },
        { name: 'Tailwind CSS', level: 92 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Python', level: 40 },
        { name: 'Node.js', level: 50 },
        { name: 'PostgreSQL', level: 55 },
        { name: 'Supabase', level: 85 },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Figma', level: 85 },
        { name: 'Canva', level: 80 },
        { name: 'Wordpress', level: 80 },
        { name: 'Webpack', level: 78 },
        { name: 'n8n', level: 78 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 relative bg-black text-white overflow-hidden">
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
            EXPERTISE
          </div> */}

          {/* Main title with gradient */}
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.8] tracking-[-0.02em] mb-8 bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent">
            Skills
          </h2>

          {/* Section divider */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/20"></div>
            <div className="w-2 h-2 bg-gradient-to-b from-[#D1B2FF] to-[#FFFFB2] rounded-full"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/20"></div>
          </div>

          {/* Subtitle */}
          <p className="text-gray-300 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mx-auto tracking-wide">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm p-8 md:p-10 transition-all duration-500 hover:border-white/20 hover:from-white/[0.12] hover:to-white/[0.04] hover:scale-[1.02] shadow-xl"
            >
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:bg-gradient-to-b group-hover:from-[#D1B2FF] group-hover:to-[#FFFFB2] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {category.title}
                </h3>
                
                {/* Category number indicator */}
                <div className="text-gray-600 text-xs font-mono tracking-wider">
                  {String(categoryIndex + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white text-lg font-medium group-hover:text-gray-100 transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm font-mono bg-white/10 px-2 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Skill Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden backdrop-blur-sm">
                        <div 
                          className="h-full bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] rounded-full transition-all duration-1000 ease-out shadow-lg relative overflow-hidden"
                          style={{ width: `${skill.level}%` }}
                        >
                          {/* Animated shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
                        </div>
                      </div>
                      
                      {/* Glow effect */}
                      <div 
                        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D1B2FF]/20 to-[#FFFFB2]/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] via-white/[0.02] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm p-8 md:p-12 transition-all duration-500 hover:border-white/20 hover:from-white/[0.12] hover:to-white/[0.04] shadow-xl group">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:bg-gradient-to-b group-hover:from-[#D1B2FF] group-hover:to-[#FFFFB2] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              Always Learning
            </h3>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto group-hover:text-gray-200 transition-colors duration-300">
              I'm always learning and staying up-to-date with the latest technologies and best practices. 
              Currently exploring{' '}
              <span className="bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent font-semibold">
                AI/ML integration
              </span>
              ,{' '}
              <span className="bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent font-semibold">
                Web3 development
              </span>
              , and{' '}
              <span className="bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent font-semibold">
                advanced React patterns
              </span>
              .
            </p>
          </div>

          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/[0.01] via-white/[0.02] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"></div>
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

export default Skills;