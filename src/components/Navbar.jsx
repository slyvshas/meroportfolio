import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', isLink: false },
    { name: 'About', href: '#about', isLink: false },
    { name: 'Skills', href: '#skills', isLink: false },
    { name: 'Projects', href: '#projects', isLink: false },
    { name: 'Certifications', href: '#certifications', isLink: false },
    { name: 'Blog', href: '/blog', isLink: true },
    { name: 'Contact', href: '#contact', isLink: false },
  ];

  const handleNavClick = (item) => {
    setIsOpen(false);
    if (item.isLink) {
      navigate(item.href);
    } else {
      if (location.pathname !== '/') {
        navigate('/');
        // Reduced delay for smoother navigation
        setTimeout(() => {
          const el = document.querySelector(item.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Reduced from 200ms to 100ms
      } else {
        const el = document.querySelector(item.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Check if we're on a blog route
  const isOnBlogRoute = location.pathname.startsWith('/blog');

  // Don't render navbar if on blog routes
  if (isOnBlogRoute) {
    return null;
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
        : 'bg-black/20 backdrop-blur-md'
    }`}>
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2' seed='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' fill='white'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick({ name: 'Home', href: '#home', isLink: false })}
              className="group cursor-pointer"
            >
              <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] bg-clip-text text-transparent transition-all duration-300 group-hover:scale-105"
                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                SasankKarki
              </h1>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className="group relative px-5 py-2.5 text-white/80 hover:text-white text-sm font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-2xl hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20"
                >
                  <span className="relative z-10 group-hover:text-[#D1B2FF] transition-colors duration-300">
                    {item.name}
                  </span>
                  
                  {/* Active indicator for current page */}
                  {((item.isLink && location.pathname === item.href) || 
                    (!item.isLink && location.pathname === '/' && location.hash === item.href)) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] rounded-full"></div>
                  )}
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D1B2FF]/5 to-[#FFFFB2]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="group p-3 text-white/80 hover:text-white rounded-2xl hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="relative">
                {isOpen ? (
                  <X size={24} className="group-hover:text-[#D1B2FF] transition-colors duration-300" />
                ) : (
                  <Menu size={24} className="group-hover:text-[#D1B2FF] transition-colors duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-500 ease-in-out ${
        isOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="relative">
          {/* Mobile menu background */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-xl border-t border-white/10"></div>
          
          {/* Mobile menu noise texture */}
          <div 
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='2' seed='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' fill='white'/%3E%3C/svg%3E")`,
            }}
          />
          
          <div className="relative z-10 px-6 py-6 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="group flex items-center justify-between w-full px-6 py-4 text-white/80 hover:text-white text-base font-medium rounded-2xl hover:bg-white/10 backdrop-blur-sm border border-transparent hover:border-white/20 transition-all duration-300"
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slideInUp 0.3s ease-out forwards' : 'none'
                }}
              >
                <span className="group-hover:text-[#D1B2FF] transition-colors duration-300">
                  {item.name}
                </span>
                
                {/* Mobile active indicator */}
                {((item.isLink && location.pathname === item.href) || 
                  (!item.isLink && location.pathname === '/' && location.hash === item.href)) && (
                  <div className="w-2 h-2 bg-gradient-to-r from-[#D1B2FF] to-[#FFFFB2] rounded-full"></div>
                )}
                
                {/* Arrow indicator */}
                <svg 
                  className="w-4 h-4 text-white/40 group-hover:text-[#FFFFB2] group-hover:translate-x-1 transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;